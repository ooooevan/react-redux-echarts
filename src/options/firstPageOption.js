
export default {
  line: {
    color: ['#6699ff'],
    title: {
      text: '万达商场客流量',
      show: false
    },
    grid: {
      left: '5%',
      right: '5%'
    },
    toolbox: {
            // y: 'bottom',
      feature: {
        dataView: {show: true, readOnly: false},
        saveAsImage: {
          pixelRatio: 1
        }
      }
    },
    legend: {
      data: ['客流量']
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: undefined,
      type: 'category',
      name: '时间',
      boundaryGap: false,
      onZero: 'true',
      axisTick: {
        alignWithLabel: 'true'
      },
      yesterday: {}

    },
    yAxis: [{
      type: 'value',
      name: '客流量',
      splitLine: {
        show: false
      }
    }/* ,{
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
            // type: 'inside'          //这个可以设置滚轮放大
    }
    ],
    series: [{
      name: '客流量',
      type: 'line',
      data: undefined,
      smooth: true,
            // color:['rgba(122,187,239,1)'],
            // color:['rgba(150,187,223,1)'],  //
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
    }/* ,{
            name:"入店率",
            type:'line',
            smooth:true,
            yAxisIndex:1,
            data:undefined
    }*/]
  },
  sellers: {
    color: ['#78b3ee'],
    title: {
      text: '各商家客流',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
    xAxis: [
      {
        type: 'category',
        data: undefined

      }
    ],
    dataZoom: {
            // startValue: '16:32:024'
    },
    yAxis: [
      {
        type: 'value',
        name: '客流量'
      }
    ],
    series: [
      {
        name: '客流量',
        type: 'bar',
        barWidth: '60%',
        data: undefined,
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      }
    ]
  }
};

