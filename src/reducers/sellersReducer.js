/**
 * Created by HH on 2017/3/16.
 */
export default function sellersReducer(state={"sellers":[]},action){
    // if(typeof state === 'undefined') return {sellers:[]}
    switch(action.type){
        case 'sellersInit':
          let obj=Object.assign({},state);
          obj.sellers=action.payload;
          return Object.assign({},state,obj);
        case 'allSellersLineChartInit':
        	// debugger;
      		let obj2=Object.assign({},state);
      		obj2.lineAndBar.xAxis[0].data=[];
      		obj2.lineAndBar.series[0].data=[];
      		obj2.lineAndBar.series[1].data=[];
          action.payload.map(item=>{
          	obj2.lineAndBar.xAxis[0].data.push(item.seller);
          	obj2.lineAndBar.series[0].data.push(item.num);
          	obj2.lineAndBar.series[1].data.push(item.percent);
          });
          // debugger
					return Object.assign({},state,obj2);

        default:
            return state;
    }
}