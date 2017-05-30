$(document).ready(function () {
    var timeData0 = [],
        timeData1 = [],
        timeData2 = [],
        timeData3 = [],
        timeData4 = [],
        timeData5 = [],
        temperatureData0 = [],
        humidityData0 = [],
        temperatureData1 = [],
        humidityData1 = [],
        temperatureData2 = [],
        humidityData2 = [],
        temperatureData3 = [],
        humidityData3 = [],
        temperatureData4 = [],
        humidityData4 = [],
        temperatureData5 = [],
        humidityData5 = [];
    var data0 = {
        labels: timeData0,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData0
            },
            {
                fill: false,
                label: 'Humidity',
                yAxisID: 'Humidity',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: humidityData0
            }
        ]
    }
    var data1 = {
        labels: timeData1,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData1
            },
            {
                fill: false,
                label: 'Humidity',
                yAxisID: 'Humidity',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: humidityData1
            }
        ]
    }
    var data2 = {
        labels: timeData2,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData2
            },
            {
                fill: false,
                label: 'Humidity',
                yAxisID: 'Humidity',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: humidityData2
            }
        ]
    }
    var data3 = {
        labels: timeData3,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData3
            },
            {
                fill: false,
                label: 'Humidity',
                yAxisID: 'Humidity',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: humidityData3
            }
        ]
    }
    var data4 = {
        labels: timeData4,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData4
            },
            {
                fill: false,
                label: 'Humidity',
                yAxisID: 'Humidity',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: humidityData4
            }
        ]
    }
    var data5 = {
        labels: timeData5,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData5
            },
            {
                fill: false,
                label: 'Humidity',
                yAxisID: 'Humidity',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: humidityData5
            }
        ]
    }

    var basicOptions = [
        {
        title: {
            display: true,
            text: 'Tag1',
            fontSize: 36
        },
        scales: {
            yAxes: [{
                id: 'Temperature',
                type: 'linear',
                scaleLabel: {
                    labelString: 'Temperature(C)',
                    display: true
                },
                position: 'left',
            }, {
                id: 'Humidity',
                type: 'linear',
                scaleLabel: {
                    labelString: 'Humidity(%)',
                    display: true
                },
                position: 'right'
            }]
        }
        },
        {
            title: {
                display: true,
                text: 'Tag2',
                fontSize: 36
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left',
                }, {
                    id: 'Humidity',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Humidity(%)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag3',
                fontSize: 36
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left',
                }, {
                    id: 'Humidity',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Humidity(%)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag4',
                fontSize: 36
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left',
                }, {
                    id: 'Humidity',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Humidity(%)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag5',
                fontSize: 36
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left',
                }, {
                    id: 'Humidity',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Humidity(%)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag6',
                fontSize: 36
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left',
                }, {
                    id: 'Humidity',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Humidity(%)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        }
    ];
    var deviceTimes = {
        "tag1": timeData0, "tag2": timeData1, "tag3": timeData2, "tag4": timeData3, "tag5": timeData4, "tag6": timeData5
    };

    var deviceTemps = {
        "tag1": temperatureData0, "tag2": temperatureData1, "tag3": temperatureData2, "tag4": temperatureData3, "tag5": temperatureData4, "tag6": temperatureData5
    };
    var deviceHums = {
        "tag1": humidityData0, "tag2": humidityData1, "tag3": humidityData2, "tag4": humidityData3, "tag5": humidityData4, "tag6": humidityData5
    };

    //Get the context of the canvas element we want to select
    var ctx0 = document.getElementById("myChart0").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var myLineChart0 = new Chart(ctx0, {
        type: 'line',
        data: data0,
        options: basicOptions[0]
    });
    var ctx1 = document.getElementById("myChart1").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var myLineChart1 = new Chart(ctx1, {
        type: 'line',
        data: data1,
        options: basicOptions[1]
    });
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var myLineChart2 = new Chart(ctx2, {
        type: 'line',
        data: data2,
        options: basicOptions[2]
    });
    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var myLineChart3 = new Chart(ctx3, {
        type: 'line',
        data: data3,
        options: basicOptions[3]
    });
    var ctx4 = document.getElementById("myChart4").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var myLineChart4 = new Chart(ctx4, {
        type: 'line',
        data: data4,
        options: basicOptions[4]
    });
    var ctx5 = document.getElementById("myChart5").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var myLineChart5 = new Chart(ctx5, {
        type: 'line',
        data: data5,
        options: basicOptions[5]
    });

    var myLineCharts = { "tag1": myLineChart0, "tag2": myLineChart1, "tag3": myLineChart2, "tag4": myLineChart3, "tag5": myLineChart4, "tag6": myLineChart5}
    var envHub = $.connection.envHub;
    envHub.on("Environment", function (obj) {
        if (!obj.DeviceId && (!obj.Time || !obj.Temperature || !obj.Humidity)) {
            return;
        }
        deviceTimes[obj.DeviceId].push(obj.Time);
        deviceTemps[obj.DeviceId].push(obj.Temperature);
        deviceHums[obj.DeviceId].push(obj.Humidity);

        // only keep no more than 50 points in the line chart
        var len = deviceTimes[obj.DeviceId].length;
        if (len > 120) {
            deviceTimes[obj.DeviceId].shift();
            deviceTemps[obj.DeviceId].shift();
            deviceHums[obj.DeviceId].shift();
        }
        myLineCharts[obj.DeviceId].update();
    });
    $.connection.hub.start();
});
