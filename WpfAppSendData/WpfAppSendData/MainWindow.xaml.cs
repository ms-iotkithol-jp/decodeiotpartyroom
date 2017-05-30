using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfAppSendData
{
    /// <summary>
    /// MainWindow.xaml の相互作用ロジック
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void buttonViewer_Click(object sender, RoutedEventArgs e)
        {
            Process.Start(tbURL.Text+"/viewer.html");
        }

        private async void buttonSender_Click(object sender, RoutedEventArgs e)
        {
            var data = new List<RoomEnvironment>();
            using (var fs = new FileStream("../../Data/roomenvironment.json",FileMode.Open, FileAccess.Read))
            {
                using (var reader = new StreamReader(fs))
                {
                    while (!reader.EndOfStream)
                    {
                        string content = reader.ReadLine();
                        var json = Newtonsoft.Json.JsonConvert.DeserializeObject<RoomEnvironment>(content);
                        data.Add(json);
                    }
                }
            }

            SendData(data);

        }

        async Task SendData(List<RoomEnvironment> data)
        {
            double duration = 10000;
            TimeSpan delta10sec = TimeSpan.FromMilliseconds(duration);

            var avgs = new List< RoomEnvironment>();

            DateTime startTime = data.First().time;
            DateTime endTime = data.Last().time;

            int index = 0;
            DateTime cursor = startTime;
            DateTime cursorEnd = cursor + delta10sec;
            var current = new Dictionary<string,List< RoomEnvironment>>();
            while (cursor <= endTime && index < data.Count)
            {
                var re = data[index++];
                if (re.time > cursorEnd)
                {
                    foreach (var k in current.Keys)
                    {
                        if (current[k].Count > 0)
                        {
                            RoomEnvironment avg = CalcAvg(cursorEnd, current[k], k);
                            avgs.Add(avg);
                        }
                        current[k].Clear();
                    }
                    cursor = cursorEnd;
                    cursorEnd += delta10sec;
                    current[re.deviceid].Add(re);
                }
                else
                {
                    if (!current.ContainsKey(re.deviceid))
                    {
                        current.Add(re.deviceid, new List<RoomEnvironment>());
                    }
                    current[re.deviceid].Add(re);
                }

            }
            foreach(var k in current.Keys)
            {
                if (current[k].Count > 0)
                {
                    RoomEnvironment avg = CalcAvg(cursorEnd, current[k], k);
                    avgs.Add(avg);
                }
            }
            var hubConnection = new Microsoft.AspNet.SignalR.Client.HubConnection(tbURL.Text);
            var proxy = hubConnection.CreateHubProxy("EnvHub");
            await hubConnection.Start();

            foreach (var re in avgs)
            {
                tbData.Text = string.Format("{0}@{1}:T={2},H={3}", re.deviceid, re.time, re.temperature, re.humidity);
                await proxy.Invoke("Environment", re);
                Thread.Sleep((int)(duration / currentSpeed));
            }
            tbData.Text = "End";
        }

        private static RoomEnvironment CalcAvg(DateTime cursorEnd, List<RoomEnvironment> current, string k)
        {
            double tsum = 0;
            double hsum = 0;
            foreach (var cr in current)
            {
                tsum += cr.temperature;
                hsum += cr.humidity;
            }
            var avg = new RoomEnvironment()
            {
                deviceid = k,
                temperature = tsum / current.Count,
                humidity = hsum / current.Count,
                time = cursorEnd
            };
            return avg;
        }

        private double currentSpeed = 1.0;
        private void lbSpeed_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var selected = ((ComboBoxItem)((ComboBox)sender).SelectedItem).Content as string;
            int value = int.Parse(selected.Substring(1));
            currentSpeed *= value;
        }
    }

    public class RoomEnvironment
    {
      public  string deviceid { get; set; }
      public  double temperature { get; set; }
      public  double humidity { get; set; }
       public DateTime time { get; set; }
    }
}
