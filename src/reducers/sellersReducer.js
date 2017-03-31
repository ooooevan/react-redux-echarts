/**
 * Created by HH on 2017/3/16.
 */
// import 'babel-polyfill';
export default function sellersReducer(state={"sellers":[]},action){
    // if(typeof state === 'undefined') return {sellers:[]}
    switch(action.type){
        case 'sellersInit':
          let obj=Object.assign({},state);
          obj.sellers=action.payload;
          return Object.assign({},state,obj);
        case 'allSellersLineChartInit':
      		let obj2=Object.assign({},state);
          //本身没有数据就初始化，本身有数据就清除
      		obj2.lineAndBar.xAxis[0].data=[];
      		obj2.lineAndBar.series[0].data=[];
      		obj2.lineAndBar.series[1].data=[];
          action.payload.forEach(item=>{
          	obj2.lineAndBar.xAxis[0].data.push(item.seller);
          	obj2.lineAndBar.series[0].data.push(item.num);
          	obj2.lineAndBar.series[1].data.push(item.percent);
          });
					return Object.assign({},state,obj2);

        case "singleSellerLineChartInit":
          let obj3=Object.assign({},state);
          obj3.lineAndLine.xAxis.data=[]
          obj3.lineAndLine.series[0].data=[];
          obj3.lineAndLine.series[1].data=[];
          //商家名
          obj3.lineAndLine.name =action.payload.name;
          //赋值
          action.payload.value.forEach(item=>{
            obj3.lineAndLine.xAxis.data.push(item.time);
            obj3.lineAndLine.series[0].data.push(item.num);
            obj3.lineAndLine.series[1].data.push(item.percent);
          })


          return Object.assign({},state,obj3);
        case "singleSellerLineChartFetch":
          let obj4=Object.assign({},state);
          // debugger
          obj4.lineAndLine.xAxis.data.push(action.payload.value[0].time);
          obj4.lineAndLine.series[0].data.push(action.payload.value[0].num);
          obj4.lineAndLine.series[1].data.push(action.payload.value[0].percent);
          obj4.lineAndLine.xAxis.data.shift();
          obj4.lineAndLine.series[0].data.shift();
          obj4.lineAndLine.series[1].data.shift();
          return Object.assign({},state,obj4);
        case "allSellersTableInit":
            let obj5=Object.assign({},state);
            obj5.table=[];
            action.payload.forEach(item=>{
                obj5.table.push(item);
            });
            //debugger;
            return Object.assign({},state,obj5);
        default:
            return state;
    }
}