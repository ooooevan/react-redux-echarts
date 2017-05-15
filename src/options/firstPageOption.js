
export default {
    line:{
        title: { 
            text: '万达商场客流量',
            show:false
        },
        grid:{
            left:'5%',
            right:'5%'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                dataView : {show: true, readOnly: false},
                saveAsImage: {
                    pixelRatio: 1
                }
            }
        },
        legend:{
            data: ['客流量']
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: undefined,
            type: 'category',
            name:'时间',
            boundaryGap: false,
            onZero:'true',
            axisTick:{
                alignWithLabel:'true'
            },
            yesterday:{}

        },
        yAxis: [{
            type: 'value',
            name: '客流量',
            splitLine: {
                show: false
            }
        }/*,{
            type: 'value',
            name: '入店率',
            position: 'right',

            min: 0,
            // max: 25,
            // interval: 0.9,
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine:{
                lineStyle:{
                    color:'#d14a61'
                }
            }   
        }*/],
        dataZoom: [{
            // startValue: '16:32:024'
        }, {
            //type: 'inside'          //这个可以设置滚轮放大
        }
        ],
        series: [{
            name: '客流量',
            type: 'line',
            data: undefined,
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
        }/*,{
            name:"入店率",
            type:'line',
            smooth:true,
            yAxisIndex:1,
            data:undefined
        }*/]
    },
    sellers:{
        color: ['#78b3ee'],
        title: {
            text: '各商家客流',
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            feature: {
                dataView: {},
                saveAsImage: {
                    pixelRatio: 1
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : undefined
                
            }
        ],
        dataZoom: {
            // startValue: '16:32:024'
        },
        yAxis : [
            {
                type : 'value',
                name:'客流量'
            }
        ],
        series : [
            {
                name:'客流量',
                type:'bar',
                barWidth: '60%',
                data:undefined,
                label: {
                    normal: {
                        show: true,
                        position:'top'
                    }
                }
            }
        ]
    }

    /*pie:{
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
    }*/
}


