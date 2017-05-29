
let data;
const options = {
  lineAndBar: {
      // color:['#c23531','#3b5054'],
    title: {
      text: '各商家入店量',
      show: false
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['入店量', '环比增幅']
    },
    xAxis: [
      {
        type: 'category',
        // axisLabel: {interval: 0},
        data
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '入店量',

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
        name: '入店量',
        type: 'bar',
        data
      },

      {
        name: '环比增幅',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        data
      }
    ]
  },
  sellers: [],
  customerNum: {
        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
    color: ['#1165ee', '#cfd9ee', '#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    title: {
      text: '堆叠区域图',
      show: false
    },
    tooltip: {
      trigger: 'axis'
            // axisPointer: {
            //     type: 'cross',
            //     label: {
            //         backgroundColor: '#6a7985'
            //     }
            // }
    },
    legend: {
      data: ['客流量', '门前客流量', '客流总体占比']
            // data:['入店量','入店率']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {show: true, readOnly: false},
        saveAsImage: {show: true}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data
      }
    ],
    yAxis: [
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
        axisLine: {
          lineStyle: {
            color: '#d14a61'
          }
        }
      }
    ],
    series: [
      {
        name: '客流量',
        type: 'line',
                    // stack: '总量',
                    // yAxisIndex: 2,
        areaStyle: {
          normal: {
                            // color:'#ccdef0'
                            // color:'red'
          }},
        data
      },
      {
        name: '门前客流量',
        type: 'line',
                    // stack: '总量',
                    // yAxisIndex: 3,
        areaStyle: {
          normal: {
                            // color:'rgba(0,0,0,0.9)'
          }
        },
        data
      },
      {
        name: '客流总体占比',
        type: 'line',
        smooth: true,
                    // areaStyle: {
                    //     normal: {
                    //         color:'rgba(91,150,244,0.3)'
                    //     }
                    // },
        yAxisIndex: 1,
        data
      }
    ]
  },
  table: [],
  customerAvg: {
        // color:['#b6d0e9','#d14a61'],
    color: ['#6699ff', '#d14a61'],
    title: {
      text: '客流量',
      show: false
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['客流量', '客流总体占比']
    },
    xAxis: {
      type: 'category',
      // axisLabel: {interval: 0},
      boundaryGap: false,
      data: undefined
    },
    yAxis: [{
      type: 'value',
      name: '人数',

            // min: 0,
            // max: 250,
            // interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    }, {
      type: 'value',
      name: '比率',
      position: 'right',

            // min: 0,
            // max: 9,
            // interval: 1,
      axisLine: {
        lineStyle: {
          color: '#d14a61'
        }
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }],
    series: [{
      name: '客流量',
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
                    // color:'#ccdef0'
                    // color:'red'
        }},
      data: undefined
    }, {
      name: '客流总体占比',
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      data
    }]
  },
  customerFlow: {
        // color:['#b6d0e9','#d14a61'],
    color: ['#6699ff', '#d14a61'],
    title: {
      text: '客流量',
      show: false
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['客流量峰值', '客流总体占比']
    },
    xAxis: {
      type: 'category',
      // axisLabel: {interval: 0},
      boundaryGap: false,
      data: undefined
    },
    yAxis: [{
      type: 'value',
      name: '人数',

            // min: 0,
            // max: 250,
            // interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    }, {
      type: 'value',
      name: '比率',
      position: 'right',

            // min: 0,
            // max: 9,
            // interval: 1,
      axisLine: {
        lineStyle: {
          color: '#d14a61'
        }
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }],
    series: [{
      name: '客流量峰值',
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
                    // color:'#ccdef0'
                    // color:'red'
        }},
      data: undefined
    }, {
      name: '客流总体占比',
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      data
    }]
  },
  customerIn: {
    color: ['#6699ff', '#d14a61'],
            // color:['#6699ff','#d14a61'],
    title: {
      text: '商家顾客入店量',
      show: false
    },
            // grid:{
            //     left:'5%',
            //     right:'8%'
            // },
    tooltip: {
      trigger: 'axis'
                // axisPointer: {
                //     type: 'cross'
                // }
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['入店量', '入店率'/* ,'跳出率'*/]
    },
    xAxis: {
      type: 'category',
      data,
      boundaryGap: false
    },
    yAxis: [
      {
        type: 'value',
        name: '人数',
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
        name: '比率',
        position: 'right',

                    // min: 0,
                    // max: 9,
                    // interval: 1,
        axisLine: {
          lineStyle: {
                            // color:'#d14a61'
          }
        },
        axisLabel: {
          formatter: '{value} %'
        }

      }/* ,
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
                }*/
    ],
            // dataZoom: [{
            //     // startValue: '16:32:024'
            //     }, {
            //     //type: 'inside'          //这个可以设置滚轮放大
            //     }
            // ],
    series: [
      {
        name: '入店量',
        type: 'line',
        smooth: true,
        areaStyle: {
          normal: {
                            // color:'#b6d0e9'
          }
        },
                    // color:['#b6d0e9'],
        data
      }, {
        name: '入店率',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data
      }/* ,{
                    name:'跳出率',
                    type:'line',
                    smooth:true,
                    yAxisIndex: 2,
                    data:data
                }*/
    ]
  },
  radar: {
    title: {
      text: '整体分析',
      show: false
    },
    tooltip: {},
    legend: {
      data: ['整体分析']
    },
    radar: {
            // shape: 'circle',
      indicator: [
               { name: '', max: 100},
               { name: '', max: 100},
               { name: '', max: 100},
               { name: '', max: 100},
               { name: '', max: 100}
      ]
    },
    series: {
      name: '整体分析',
      type: 'radar',
      areaStyle: {normal: {}},
      data: [{
        value: undefined,
        name: '整体分析'
      }]
    }
  },
  stayBar: {

    title: {
      text: '驻店时长',
      show: false
    },
    tooltip: {
            // trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['驻店时长']
    },
    xAxis: [
      {
        type: 'category',
        // axisLabel: {interval: 0},
        data: undefined
      }
    ],
    yAxis: {
            //     type: 'value',
      name: '人数',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
    },
    series: [{
      name: '驻店时长',
      type: 'bar',
      data: undefined
    }
    ]
  },

  oldOrNew: {
    color: ['#c23531', '#2f4554'],
        // color:['#c23531','#548dff'],
    title: {
      text: '新老顾客',
      x: 'center',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['新顾客', '老顾客']
    },
    grid: {
            // left: '3%',
            // right: '4%',
            // bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: undefined
    }],
    yAxis: [{
      type: 'value',
      name: '人数'
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
  timeSection: {
    title: {
      text: '各时间段人数峰值',
      show: false
    },
    tooltip: {
            // trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['各时间段人数峰值']
    },
    xAxis: [
      {
        type: 'category',
        // axisLabel: {interval: 0},
        data
      }
    ],
    yAxis: {
            //     type: 'value',
      name: '人数',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
    },
    series: [{
      name: '各时间段人数峰值',
      type: 'bar',
      data
    }
    ]
  },

  deepVisit: {
    color: ['#c23531', '#2f4554'],
    title: {
      text: '深访率',
      show: false
    },
    grid: {
            // left:'5%',
            // right:'5%'
    },
    legend: {
      data: ['深访率', '跳出率']
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        saveAsImage: {show: true}
      }
    },
    xAxis: {
      data: undefined,
      type: 'category',
      name: '时间',
      boundaryGap: true,
            // onZero:'true',
      axisTick: {
        alignWithLabel: 'true'
      }
            // yesterday:{}

    },
    yAxis: [{
      type: 'value',
      name: '深访比率',
            // splitLine: {
            //     show: false
            // }
      axisLine: {
        lineStyle: {
                    // color:'#d14a61'
          color: '#c23531'
        }
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }, {
      type: 'value',
      name: '跳出比率',
            // splitLine: {
            //     show: false
            // }
      axisLine: {
        lineStyle: {
          color: '#2f4554'
        }
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }],
    series: [{
      name: '深访率',
      type: 'line',
      data: undefined,
      smooth: true
            // color:['rgba(122,187,239,1)'],
            // backgroundColor:'rgb(228, 228, 228)',
            // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,false),
            // symbol: 'none',
            // stack: 'a',
    }, {
      name: '跳出率',
      type: 'line',
      data: undefined,
      yAxisIndex: 1,
      smooth: true
    }]
  },
  cycle: {
    title: {
      text: '来访周期',
      show: false
    },
    tooltip: {
            // trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['来访周期']
    },
    xAxis: [
      {
        type: 'category',
        // axisLabel: {interval: 0},
        data: undefined
      }
    ],
    yAxis: {
            //     type: 'value',
      name: '人数',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
    },
    series: [{
      name: '来访周期',
      type: 'bar',
      label: {
        normal: {
          position: 'top',
          show: false
        }
      },
      data: undefined
    }
    ]
  },
  active: {

    title: {
      text: '活跃度',
      show: false
    },
    tooltip: {
            // trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['活跃度']
    },
    xAxis: [
      {
        type: 'category',
        // axisLabel: {interval: 0},
        data: undefined
      }
    ],
    yAxis: {
            //     type: 'value',
      name: '人数'

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
    },
    series: [{
      name: '活跃度',
      type: 'bar',
      label: {
        normal: {
          position: 'top',
          show: false
        }
      },
      data: undefined
    }
    ]
  }
};


export default options;
