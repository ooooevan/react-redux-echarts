
export default function reducer(state,action){
    if(typeof state === 'undefined') return {list:[],name:'evan'};
    switch(action.type){
        case 'add':
            let list=state.list.concat(action.payload);   //title不是value了
            // console.log(list);
            return Object.assign({},state,{list});
        case 'logined':
            if(action.error){
                return Object.assign({},state,{loginError:action.payload ,logined:false});
            }else{
                return Object.assign({},state,{loginError:null ,logined:true});
            }
        case 'init':
            const time=new Array();
            const value=new Array();
            // const obj={};
            //获取time和value数据
            // console.log(state)
            action.payload.list.map(item=>{
                time.push(item.time)
                value.push(item.value)
            })
            //aa是新obj，用于返回
            var aa = Object.assign({},state,{});
            aa.xAxis.data=time;
            aa.series.data=value;
            // action.chart.hideLoading()  //隐藏遮罩
            // console.log('state:');
            // console.log(state);
            action.chart.setOption(state);

            // console.log('aa:');
            // console.log(aa);

            return aa;
        case 'logout':
            return Object.assign({},state,{loginError:null ,logined:false});
        case 'change':
            // var aa = Object.assign({},state,{});
            // var aa = state;
            // aa.xAxis.data.push(action.payload.time);
            // aa.series.data.push(parseInt(action.payload.value));


            // console.log(action.payload.time)
            var dataX = state.xAxis.data.concat(action.payload.time);
            dataX.shift()
            var dataY = state.series.data.concat(parseInt(action.payload.value));
            dataY.shift()
            /*新对象，用于返回*/
            var aa=Object.assign({},state);
            aa.xAxis.data = dataX;
            aa.series.data = dataY;
            // console.log(Object.assign({},state,aa))


            action.chart.setOption(aa);
            // console.log(action)

            return aa;
        default:return state;
    }
}