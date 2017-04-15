/*
* 调节y坐标虚线: 在line->series->markLine->data->yAxis
* 调节标题：line->title->text
*
* */
let dataX,dataY;
  let options={
    line:{
        title: { 
            text: '万达商场客流量',
            show:false
            // textAlign:'center',
            // left:'50%',
            // top:'5%',
            // textStyle:{
                // fontSize:'23'
            // }
        },
        grid:{
            left:'5%',
            right:'5%'
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
            },
            yesterday:{}

        },
        yAxis: {
            type: 'value',
            name: '客流量',
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
            // startValue: '16:32:024'
        }, {
            //type: 'inside'          //这个可以设置滚轮放大
        }
        ],
        series: {
            name: '客流量',
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
        },


    pie:{
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    series : [
        {
            name: '拥挤度',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            // splitNumber: 11,
            radius: '60%',
            splitNumber:10,
            center: ['50%', '50%'],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:5
            },
            title : {
                offsetCenter: [0, '100%'],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 25,
                    fontStyle: 'normal'
                }
            },
            detail : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            data:[{value: 40, name: '拥挤度'}]
        },
        {
            name: '活跃度',
            type: 'gauge',
            center: ['20%', '50%'],    // 默认全局居中
            radius: '80%',
            min:0,
            max:100,
            // endAngle:45,
             radius: '60%',
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length:0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length:10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:5
            },
            title: {
                offsetCenter: [0, '100%'],       // x, y，单位px
                textStyle:{
                    fontWeight: 'bolder',
                    fontSize:30,
                    fontWeight: 'bolder'

                }
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            data:[{value: 60, name: '活跃度'}]
        },
        {
            name: '新顾客率',
            type: 'gauge',
            center: ['83%', '50%'],    // 默认全局居中
            radius: '80%',
            min:0,
            max:100,
            // endAngle:45,
             radius: '60%',
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length:0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length:10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:5
            },
            title: {
                offsetCenter: [0, '100%'],       // x, y，单位px
                textStyle:{
                    fontSize:30,
                    fontWeight: 'bolder'

                }
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                }
            },
            data:[{value: 30, name: '新顾客率'}]
        }
    ]
}
  }


export default options;