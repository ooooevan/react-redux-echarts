

const options = {
  customerNum: {
        // color:['#c23531','#ff9a20'],
    color: ['#c23531', '#de9a48'],
    title: {
      text: '客流量峰值对比',
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
      data: []
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  customerAvg: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '客流量对比',
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
      data: []
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  customerIn: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '入店量对比',
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
      data: []
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
      type: 'value',
      name: '入店量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },

  oldOrNew: {

        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    color: ['#c23531', '#01494c'],
    title: {
      text: '新顾客率',
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
            // data:['入店量','门前客流量','入店率']
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
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
        boundaryGap: true,
        data: undefined
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '新顾客率',
        axisLabel: {
          formatter: '{value} %'
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,

                // stack: '总量',
                // yAxisIndex: 2,
                // areaStyle: {
                //     normal: {
                //         // color:'#ccdef0'
                //         // color:'red'
                //     }},
        data: undefined
      },
      {
        name: '2',
        type: 'line',
        smooth: true,
                // areaStyle: {
                //     normal: {
                //         color:'rgba(91,150,244,0.3)'
                //     }
                // },
                // yAxisIndex: 1,
        data: undefined
      }
    ]
  },
  cycle: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '来访周期',
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
      data: []
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
      type: 'value',
      name: '人数',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  stay: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '停留时长',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
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
      type: 'value',
      name: '人数',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  active: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '活跃度',
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
      data: []
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
      type: 'value',
      name: '人数',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  deepVisit: {
    color: ['#c23531', '#01494c'],
        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    title: {
      text: '深访率对比',
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
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
            // data:['入店量','门前客流量','入店率']
      data: []
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
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: undefined
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '深访率',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,
                // stack: '总量',
                // yAxisIndex: 2,
                // areaStyle: {
                //     normal: {
                //         // color:'#ccdef0'
                //         // color:'red'
                //     }},
        data: undefined
      },
      {
        name: '2',
        type: 'line',
        smooth: true,
                // areaStyle: {
                //     normal: {
                //         color:'rgba(91,150,244,0.3)'
                //     }
                // },
                // yAxisIndex: 1,
        data: undefined
      }
    ]
  },
  out: {
    color: ['#c23531', '#01494c'],
        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    title: {
      text: '跳出率对比',
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
            // data:['入店量','门前客流量','入店率']
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
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
        boundaryGap: true,
        data: undefined
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '跳出率',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,
                // stack: '总量',
                // yAxisIndex: 2,
                // areaStyle: {
                //     normal: {
                //         // color:'#ccdef0'
                //         // color:'red'
                //     }},
        data: undefined
      },
      {
        name: '2',
        type: 'line',
        smooth: true,
                // areaStyle: {
                //     normal: {
                //         color:'rgba(91,150,244,0.3)'
                //     }
                // },
                // yAxisIndex: 1,
        data: undefined
      }
    ]
  },
  sellersAvg: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '客流量对比',
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
      data: []
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  sellersNum: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '客流量峰值对比',
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
      data: []
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  sellersList: '',
  sellersIn: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '入店量对比',
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
      data: []
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
      type: 'value',
      name: '入店量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  sellersOldOrNew: {

        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    color: ['#c23531', '#01494c'],
    title: {
      text: '新顾客率',
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
            // data:['入店量','门前客流量','入店率']
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
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
        boundaryGap: true,
        data: undefined
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '新顾客率',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        barGap: 0,
        smooth: true,
                // stack: '总量',
                // yAxisIndex: 2,
                // areaStyle: {
                //     normal: {
                //         // color:'#ccdef0'
                //         // color:'red'
                //     }},
        data: undefined
      },
      {
        name: '2',
        type: 'line',
        smooth: true,
                // areaStyle: {
                //     normal: {
                //         color:'rgba(91,150,244,0.3)'
                //     }
                // },
                // yAxisIndex: 1,
        data: undefined
      }
    ]
  },
  sellersOut: {

        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    color: ['#c23531', '#01494c'],
    title: {
      text: '跳出率对比',
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
            // data:['入店量','门前客流量','入店率']
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
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
        boundaryGap: true,
        data: undefined
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '跳出率',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,
                // stack: '总量',
                // yAxisIndex: 2,
                // areaStyle: {
                //     normal: {
                //         // color:'#ccdef0'
                //         // color:'red'
                //     }},
        data: undefined
      },
      {
        name: '2',
        type: 'line',
        smooth: true,
                // areaStyle: {
                //     normal: {
                //         color:'rgba(91,150,244,0.3)'
                //     }
                // },
                // yAxisIndex: 1,
        data: undefined
      }
    ]
  },
  sellersDeep: {

        /* 颜色是后面叠加前面的，要想某个颜色不被覆盖，要放到后面*/
        // color:['#1165ee','#cfd9ee','#d14a61'],
        // color:['#b6d0e9','#d14a61'],
    color: ['#c23531', '#01494c'],
    title: {
      text: '深访率对比',
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
            // data:['入店量','门前客流量','入店率']
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
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
        boundaryGap: true,
        data: undefined
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '跳出率',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,
                // stack: '总量',
                // yAxisIndex: 2,
                // areaStyle: {
                //     normal: {
                //         // color:'#ccdef0'
                //         // color:'red'
                //     }},
        data: undefined
      },
      {
        name: '2',
        type: 'line',
        smooth: true,
                // areaStyle: {
                //     normal: {
                //         color:'rgba(91,150,244,0.3)'
                //     }
                // },
                // yAxisIndex: 1,
        data: undefined
      }
    ]
  },
  sellersStay: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '驻店时长对比',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  sellersActive: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '活跃度对比',
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
      data: []
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  sellersTimeSection: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '各时间段对比',
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
      data: []
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
  sellersCycle: {
    color: ['#c23531', '#de9a48'],
    title: {
      text: '来访周期对比',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: []
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
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
      type: 'value',
      name: '客流量',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '时间一',
      type: 'bar',
      barGap: 0,
      data: undefined
    }, {
      name: '时间二',
      type: 'bar',
      data: undefined
    }]
  },
};

export default options;
