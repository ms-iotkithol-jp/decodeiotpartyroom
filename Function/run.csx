using System;

public static void Run(string myEventHubMessage, TraceWriter log)
{
    log.Info($"C# Event Hub trigger function processed a message: {myEventHubMessage}+");

    dynamic msgJsons = Newtonsoft.Json.JsonConvert.DeserializeObject(myEventHubMessage);
    foreach (dynamic msgJson in msgJson)
    {
        log.Info("--");
        dynamic deviceIdToken= msgJson.SelectToken("deviceid");
        if (deviceIdToken==null) {
            log.Info("deviceid doesn't exist!");
            return;
        }

        string deviceId = deviceIdToken.Value;
        log.Info($"Got deviceId:{deviceId}");
        dynamic temperatureToken = msgJson.SelectToken("temperature");
        if (temperatureToken==null) {
            log.Info("temperature doesn't exist!");
            return;
        }
        double temperature = temperatureToken.Value;
        log.Info($"Got temperature:{temperature}");
        dynamic humidityToken = msgJson.SelectToken("humidity");
        if (humidityToken==null) {
            log.Info("humidity doesn't exist!");
            return;
        }
        double humidity = humidityToken.Value;
        log.Info($"Got humidity:{humidity}");
        dynamic timeToken = msgJson.SelectToken("time");
        if (timeToken==null) {
            log.Info("time doesn't exist!");
            return;
        }
        DateTime time = timeToken.Value;
        var notifyMessage = new
        {
            deviceId = deviceId,
            temperature = temperature,
            humidity = humidity,
            time = time
        };

        string noticeContent = Newtonsoft.Json.JsonConvert.SerializeObject(notifyMessage);
        log.Info($"noticeContent - {noticeContent}");
        var hubConnection = new Microsoft.AspNet.SignalR.Client.HubConnection("http://[Web App URL]/");
        var proxy = hubConnection.CreateHubProxy("EnvHub");
        hubConnection.Start().Wait();
        proxy.Invoke("Environment",notifyMessage);
        log.Info("Notify Done.");
    }
}
