export default function lineReducer(state={line:{},pie:{}},action){
    // if(typeof state === 'undefined') return {line:{},pie:{}};
    switch(action.type){
        case 'firstPageChartInit':
        console.log(action.payload)
            let time=new Array();
            let value=new Array();
            // const obj={};
            //获取time和value数据
            action.payload.list.forEach(item=>{
                time.push(item.time)
                value.push(item.value)
            })
            //aa是新obj，用于返回
            // debugger
            var aaa = Object.assign({},state.line);
            aaa.xAxis.data=time;
            aaa.series.data=value;
            // action.chart.hideLoading()  //隐藏遮罩
            // action.chart.setOption(state.data);
            // console.log(Object.assign({},state,{"line":aa}))
            return Object.assign({},state,{"line":aaa});
        case 'change':
            // var aa = Object.assign({},state,{});
            // var aa = state;
            // aa.xAxis.data.push(action.payload.time);
            // aa.series.data.push(parseInt(action.payload.value));


            // console.log(action.payload.time)
            var dataX = state.data.xAxis.data.concat(action.payload.time);
            dataX.shift()
            var dataY = state.data.series.data.concat(parseInt(action.payload.value));
            dataY.shift()
            /*新对象，用于返回*/
            var aa=Object.assign({},state.data);
            aa.xAxis.data = dataX;
            aa.series.data = dataY;
            // console.log(Object.assign({},state,aa))


            // action.chart.setOption(aa);
            // console.log(action)
            return aa;
        default:return state;
    }
}