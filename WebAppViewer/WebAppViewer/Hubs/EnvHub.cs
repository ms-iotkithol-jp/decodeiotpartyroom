using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace WebAppViewer.Hubs
{
    public class EnvHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
        public void Environment(dynamic packet)
        {
            var msg = new Models.EnvSensor()
            {
                DeviceId = packet.deviceid,
                Time = packet.time,
                Temperature = packet.temperature,
                Humidity = packet.humidity
            };
            Clients.Others.Environment(msg);
        }
    }
}