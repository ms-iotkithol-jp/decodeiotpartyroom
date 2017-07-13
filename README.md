# de:code 2017 IoT Party Room environment monitoring 
2017年5月に開催されたde:code 2017の初日のパーティでは、IoT Roomがサテライト会場として用意されました。そこでは、東京エレクトロンデバイス様が販売している、[IoT PoC Kit] (http://www.teldevice.co.jp/pro_info/2016/press_170209.html)
- Armadillo-IoTゲートウェイG3（Ubuntu）
- TI Sensor Tag CC2650 

を6台設置し、部屋の温度、湿度を収集・蓄積・可視化のチャレンジを行いました。 
![images/room.png] 
そのIoTソリューションを紹介します。 
## 利用サービス・テクノロジー  
### クラウド側 
- Azure IoT Hub 
- Azure Stream Analytics - [Query](StreamAnalytics/query.asaql) 
- Storage Account 
- Azure Event Hubs 
- Functions - [Implementation](Function) 
- Web Apps - [Implementation](WebAppViewer) 
- Signal R 

### エッジ側 
- [Azure IoT Edge SDK](http://github.com/azure/iot-edge)の[拡張](https://github.com/ms-iotkithol-jp/AzureIoTGatewaySDKExtention)を利用 

## 処理概要 
BLE GATT Profileを使ってCC2650から収集した温度・湿度データを、ArmadilloからAzure IoT Hubに1秒間隔で送信します。 
IoT Hubで受信したデータはそのままStream Analyticsの入力となり、Stream Analyticsで、 
- 受信データのStorage Tableへの生データ蓄積 
- 10秒あたりの平均値算出とイベントハブへの転送 
を行います。
- Event Hubに転送された平均値を、Web App側で用意したSignal Rハブに送信します。 
- Signal Rハブは、データを受信すると、そのハブにサブスクライブしているノード群に一斉同報を行います。 

Web AppがデプロイされたWebサーバーの、Viewer.htmlをブラウザで開いたとき、Signal Rハブにサブスクライブを行っていて、Viewer.htmlは各ブラウザで、一斉同報されたメッセージを受信し、グラフ表示を行います。 
ここでの公開情報を元に、皆さんのAzureサブスクリプションで再現してみてくださいね。 
## おまけ 
[WebAppViewer](WebAppViewer)に入っているASP.NET Web Appはローカル環境でも動作可能です。
1. Visual Studioでソリューションを開く 
2. 実行し、ブラウザが開いたら、URLのlocalhost:xxx の部分をメモなどにコピペしておく 
次に、[WpfAppSendData](WpfAppSendData)に入っているWPF AppをVisual Studioで開きます。 
3. MainWindow.xamlの17行目付近の'[WebAppViewer URL]'を、ブラウザで開かれているWebAppViewerのURLで置き換える  
```xml
<TextBlock Name="tbURL" Text="http://[WebAppVewer URL]" Margin="5"/>
``` 
4. WpfAppSendDataを実行する 
5. 表示されたパネルの’Open Viewer’ボタンをクリックし、Viewer.htmlを表示させます 
6. ’Send Data’をクリックすると、当日夜に計測収集されたデータを10秒単位でWebAppViewerのSignalRハブに送信します。※当日の電波状況や準備時間の短さのせいで残念ながらTag2とTag6しか記録されていませんが実際のデータです。 
7. Viewer.htmlでグラフ表示されます 
以上です。10秒単位がかったるければ、Send Dataボタンの下のコンボボックスで再生時間を変えてやってみてください。 
計測した生データは、WpfAppSendDataプロジェクトの[Data/roomenvironment.json](WpfAppSendData/WpfAppSendData/Data/roomenvironment.json)に格納されています。 
