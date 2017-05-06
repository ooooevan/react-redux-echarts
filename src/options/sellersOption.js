/*
* 调节y坐标虚线: 在line->series->markLine->data->yAxis
* 调节标题：line->title->text

*
    lineAndBar是全部商家图表
    lineAndLine是单个商家图表

* */
let data;
  let options = {
    lineAndBar:{
        title:{
           text: "各商家客流",
           show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['客流量','环比增幅']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: data
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '店铺客流量',

                // min: 0,
                // max: 250,
                // interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '环比增幅',
                position: 'right',

                // min: -5,
                // max: 5,
                // interval: 1,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name:'客流量',
                type:'bar',
                data:data
            },
            
            {
                name:'环比增幅',
                type:'line',
                yAxisIndex: 1,
                smooth:true,
                data:data
            }
        ]
    },
    sellers:[],
    customerNum:{
        /*颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        color:['#b6d0e9','#d14a61'],
        title: {
            text: '堆叠区域图',
            show:false
        },
        tooltip : {
            trigger: 'axis'
            // axisPointer: {
            //     type: 'cross',
            //     label: {
            //         backgroundColor: '#6a7985'
            //     }
            // }
        },
        legend: {
            // data:['入店量','门前客流量','入店率']
            data:['入店量','入店率']
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : data
            }
        ],
        yAxis : [
            {
                type: 'value',
                name: '入店量',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
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
            }
            ],
            series : [
                {
                    name:'入店量',
                    type:'line',
                    // stack: '总量',
                    // yAxisIndex: 2,
                    areaStyle: {
                        normal: {
                            // color:'#ccdef0'
                            // color:'red'
                        }},
                    data:data
                },
                /*{
                    name:'门前客流量',
                    type:'line',
                    // stack: '总量',
                    // yAxisIndex: 3,
                    areaStyle: {
                        normal: {
                            // color:'rgba(0,0,0,0.9)'
                        }
                    },
                    data:data
                },*/
                {
                    name:'入店率',
                    type:'line',
                    smooth:true,
                    // areaStyle: {
                    //     normal: {
                    //         color:'rgba(91,150,244,0.3)'
                    //     }
                    // },
                    yAxisIndex: 1,
                    data:data
                }
            ]
    },
    table:[],
    customerFlow:{
        color:['#b6d0e9','#d14a61'],
        title:{
           text: "客流量",
           show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['客流量','入店率']
        },
        xAxis:{
            type: 'category',
            axisLabel:{interval:0},
            boundaryGap : false,
            data: undefined
        },
        yAxis: [{
            type: 'value',
            name: '客流量',

            // min: 0,
            // max: 250,
            // interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },{
            type: 'value',
            name: '入店率',
            position: 'right',

            min: 0,
            // max: 9,
            interval: 1,
            axisLine:{
                lineStyle:{
                    color:'#d14a61'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }],
        series: [{
            name:'客流量',
            type:'line',
            smooth:true,
            areaStyle: {
                normal: {
                    // color:'#ccdef0'
                    // color:'red'
                }},
            data:undefined
        },{
            name:'入店率',
            type:'line',
            smooth:true,
            yAxisIndex: 1,
            data:data
        }]
    },
    customerIn:{
            color: ['#d14a61', '#5793f3'],
            title:{
               text: "商家顾客流动",
               show:false
            },
            grid:{
                left:'5%',
                right:'8%'
            },
            tooltip: {
                trigger: 'axis'
                // axisPointer: {
                //     type: 'cross'
                // }
            },
            // toolbox: {
            //     feature: {
            //         dataView: {show: true, readOnly: false},
            //         magicType: {show: true, type: ['line', 'bar']},
            //         restore: {show: true},
            //         saveAsImage: {show: true}
            //     }
            // },
            legend: {
                data:['入店量','入店率','跳出率']
            },
            xAxis:{
                    type: 'category',
                    data: data,
                    boundaryGap: false
            },
            yAxis: [
                {
                    type: 'value',
                    name: '入店量',
                    // axisLine:{
                    //     lineStyle:{
                    //         color:'#d14a61'
                    //     }
                    // },
                    axisLabel: {
                        formatter: '{value}',
                    }
                },
                {
                    type: 'value',
                    name: '入店率',
                    position: 'right',

                    min: 0,
                    // max: 9,
                    interval: 1,
                    axisLine:{
                        lineStyle:{
                            color:'#d14a61'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                {
                    type: 'value',
                    name: '跳出率',
                    position: 'right',
                    offset: 50,
                    min: 0,
                    axisLine:{
                        lineStyle:{
                            color:'#5793f3'
                        }
                    },
                    // max: 9,
                    interval: 1,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }
            ],
            dataZoom: [{
                // startValue: '16:32:024'
                }, {
                //type: 'inside'          //这个可以设置滚轮放大
                }
            ],
            series: [
                {
                    name:'入店量',
                    type:'line',
                    smooth:true,
                    areaStyle:{
                        normal:{
                            color:'#b6d0e9'
                        }
                    },
                    color:['#b6d0e9'],
                    data:data
                },{
                    name:'入店率',
                    type:'line',
                    smooth:true,
                    yAxisIndex: 1,
                    data:data
                },{
                    name:'跳出率',
                    type:'line',
                    smooth:true,
                    yAxisIndex: 2,
                    data:data
                }
            ]
    },
    radar:{
        title: {
            text: '整体分析',
            show:false
        },
        tooltip: {},
        legend: {
            data: ['整体分析']
        },
        radar: {
            // shape: 'circle',
            indicator: [
               { name: '客流量', max: 100},
               { name: '顾客活跃度', max: 100},
               { name: '驻店时长', max: 100},
               { name: '新顾客', max: 100},
               { name: '深访率', max: 100}
            ]
        },
        series: {
            name: '整体分析',
            type: 'radar',
            areaStyle: {normal: {}},
            data : [{
                    value : data,
                    name : '整体分析'
                }]
        }
    },
    stayBar:{

        title:{
           text: "驻店时长",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['驻店时长']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: data
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'驻店时长',
                type:'bar',
                data:data
            }
        ]
    },
    /*OldOrNew:{
        title : {
            text: '新老顾客',
            x:'center',
            show:false
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['老顾客','新顾客']
        },
        series : [
            {
                name: '新老顾客',
                type: 'pie',
                radius : '75%',
                // center: ['50%', '60%'],
                data:[
                    {value:data, name:'老顾客'},
                    {value:data, name:'新顾客'},
                ],
                // itemStyle: {
                    // emphasis: {
                    //     shadowBlur: 10,
                    //     shadowOffsetX: 0,
                    //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                    // }
                // }
            }
        ]
    },*/
    oldOrNew:{
        title : {
            text: '新老顾客',
            x:'center',
            show:false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        legend: {
            data: ['新顾客', '老顾客']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: undefined
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '新顾客',
            type: 'bar',
            stack: '顾客',
            data: undefined,
            label: {
                normal: {
                    show: true
                }
            },
        }, {
            name: '老顾客',
            type: 'bar',
            stack: '顾客',
            data: undefined,
            label: {
                normal: {
                    show: true
                }
            },
        }, ]
    },
    timeSection:{
        title:{
           text: "各时间段人数",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['各时间段人数']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: data
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'各时间段人数',
                type:'bar',
                data:data
            }
        ]
    },
    /*deepVisit:{

        title : {
            text: '深访率',
            x:'center',
            show:false
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['深度访问','普通访问','浅访问']
        },
        series : [
            {
                name: '深访率',
                type: 'pie',
                radius : '75%',
                // center: ['50%', '60%'],
                data:[
                    {value:data, name:'深度访问'},
                    {value:data, name:'普通访问'},
                    {value:data, name:'浅访问'}
                ],
                // itemStyle: {
                    // emphasis: {
                    //     shadowBlur: 10,
                    //     shadowOffsetX: 0,
                    //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                    // }
                // }
            }
        ]
    },*/
    deepVisit:{
        title: { 
            text: '深访率',
            show:false
        },
        grid:{
            left:'5%',
            right:'5%'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: undefined,
            type: 'category',
            name:'时间',
            boundaryGap: true,
            // onZero:'true',
            axisTick:{
                alignWithLabel:'true'
            }
            // yesterday:{}

        },
        yAxis: {
            type: 'value',
            name: '深访率',
            splitLine: {
                show: false
            }
        },
        series: {
            name: '客流量',
            type: 'line',
            data: undefined,
            smooth:true
            // color:['rgba(122,187,239,1)'],
            // backgroundColor:'rgb(228, 228, 228)',
            // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,false),
            // symbol: 'none',
            // stack: 'a',
        }
    },
    cycle:{
        title:{
           text: "来访周期",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['来访周期']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: undefined
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'来访周期',
                type:'bar',
                label: {
                normal: {
                    position: 'top',
                    show: false
                    }
                },
                data:undefined
            }
        ]
    },
    active:{

        title:{
           text: "活跃度",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['活跃度']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: undefined
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'活跃度',
                type:'bar',
                label: {
                normal: {
                    position: 'top',
                    show: false
                    }
                },
                data:undefined
            }
        ]
    }/*,
    cycleAndActive:{
        tooltip: {},
        title: [{
            text: '来访周期',
            // subtext: '总计 ' + builderJson.all,
            x: '25%',
            textAlign: 'center'
        }, {
            text: '活跃度',
            // subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
                // return all + downloadJson[key];
            // }, 0),
            x: '75%',
            textAlign: 'center'
        }],
        grid: [{
            top: 50,
            width: '50%',
            // bottom: '45%',
            left: 10,
            containLabel: true
        }
        // , {
        //     // top: '55%',
        //     // width: '50%',
        //     // bottom: 0,
        //     // left: 10,
        //     // containLabel: true
        // }
        ],
        xAxis: [{
            type: 'value',
            // max: builderJson.all,
            splitLine: {
                show: false
            }
        }
        // , {
        //     // type: 'value',
        //     // max: builderJson.all,
        //     gridIndex: 1,
        //     // splitLine: {
        //     //     show: false
        //     // }
        // }
        ],
        yAxis: [{
            type: 'category',
            data: data,
            axisLabel: {
                interval: 0,
                rotate: 30
            },
            splitLine: {
                show: false
            }
        // }, {
        //     gridIndex: 1,
            // type: 'category',
            // data: Object.keys(builderJson.components),
            // axisLabel: {
            //     interval: 0,
            //     rotate: 30
            // },
            // splitLine: {
            //     show: false
            // }
        }],
        series: [{
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },
            data: data
        },{
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '45%'],
            data: data
        }]
    }*/
};




export default options;