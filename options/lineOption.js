
var dataX,dataY;
  var options={
        title: { 
            text: 'xx商场客流量',
            textAlign:'center',
            left:'50%',
            top:'5%',
            textStyle:{
                fontSize:'23'
            }
        },
        // legend:{
        //     left:'10%'
        // },
        // gird:{
        //     right:'10%',
        //     padding:'0'
        // },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: dataX,
            type: 'category',
            name:'时间',
            boundaryGap: false,
            onZero:'true',
            axisTick:{
                alignWithLabel:'true'
            }

        },
        // toolbox: {
        //     left: 'center',
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
            startValue: '16:32:024'
        }, {
            type: 'inside'
        }
        ],
        series: {
            name: '人流量',
            type: 'line',
            data: dataY,
            smooth:true,
            // color:['rgba(122,187,239,1)'],
            color:['rgba(150,187,223,1)'],  //
            // backgroundColor:'rgb(228, 228, 228)',
            // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,false),
            // symbol: 'none',
            // stack: 'a',
            areaStyle: {
                normal: {}
            },
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


export default options;