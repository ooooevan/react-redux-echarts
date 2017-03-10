var dataX,dataY;
  var option={
            tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: dataX
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: dataY,
            markLine: {
                silent: true,
                data: [{
                    yAxis: 100
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }, {
                    yAxis: 400
                }]
            }
        }
        }