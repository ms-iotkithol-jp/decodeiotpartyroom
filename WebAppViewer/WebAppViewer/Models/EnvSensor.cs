using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppViewer.Models
{
    public class EnvSensor
    {
        public string DeviceId { get; set; }
        public DateTime Time { get; set; }
        public double Temperature { get; set; }
        public double Humidity { get; set; }
    }
}