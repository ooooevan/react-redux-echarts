/*
* 调节y坐标虚线: 在line->series->markLine->data->yAxis
* 调节标题：line->title->text
  dataX：横坐标，全部商家。y轴市他们对应的数据
  barDataY：客流量y值
  lineDataY：环比增幅y值
*
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
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['客流量','环比增幅']
        },
        xAxis: [
            {
                type: 'category',
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

                // min: 0,
                // max: 25,
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
    }
};





export default options;