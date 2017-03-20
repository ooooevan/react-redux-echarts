/*
* 调节y坐标虚线: 在line->series->markLine->data->yAxis
* 调节标题：line->title->text
  dataX：横坐标，全部商家。y轴市他们对应的数据
  barDataY：客流量y值
  lineDataY：环比增幅y值
*
    lineAndBar是全部商家图表
    lineAndLine是单个商家图表

* */
let dataX,barDataY,lineDataY;
  let options = {
    "lineAndBar":{
        title:{
           text: "昨日/上月客流",
           show:false
        },tooltip: {
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
                data: dataX
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
                data:barDataY
            },
            
            {
                name:'环比增幅',
                type:'line',
                yAxisIndex: 1,
                data:lineDataY
            }
        ]
    },
    "lineAndLine":{
            title:{
               text: "商家入店量及入店率",
               show:false
            },
            grid:{
                left:'5%',
                right:'5%'
            },
            tooltip: {
                trigger: 'axis'
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
                data:['入店量','入店率']
            },
            xAxis:{
                    type: 'category',
                    data: dataX,
                    boundaryGap: false
            },
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
                    data:lineDataY
                },
                
                {
                    name:'入店率',
                    type:'line',
                    smooth:true,
                    yAxisIndex: 1,
                    data:lineDataY
                }
            ]
        }
};





export default options;