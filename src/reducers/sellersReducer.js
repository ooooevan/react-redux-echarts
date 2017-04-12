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
          let lastPage=false;
          //本身没有数据就初始化，本身有数据就清除
      		obj2.lineAndBar.xAxis[0].data=[];
      		obj2.lineAndBar.series[0].data=[];
      		obj2.lineAndBar.series[1].data=[];
          action.payload.forEach((item)=>{
            if(item.lastPage){         //判断是否最后一页
              lastPage=true;
            }
          	obj2.lineAndBar.xAxis[0].data.push(item.seller);
          	obj2.lineAndBar.series[0].data.push(item.num);
          	obj2.lineAndBar.series[1].data.push(item.percent);
          });
            obj2.lineAndBar.xAxis[0].lastPage=lastPage;
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
        case "singleSellerCustomerNumInit":
          // debugger;
          let obj13=Object.assign({},state);
          obj13.customerNum.xAxis[0].data=[];
          obj13.customerNum.series[0].data=[];
          obj13.customerNum.series[1].data=[];
          obj13.customerNum.series[2].data=[];
          //商家名
          obj13.customerNum.name =action.payload.name;
          //赋值
          action.payload.value.forEach(item=>{
            // debugger
            obj13.customerNum.xAxis[0].data.push(item.time);
            obj13.customerNum.series[0].data.push(item.num1);
            obj13.customerNum.series[1].data.push(item.num2);
            obj13.customerNum.series[2].data.push(item.percent);
          })
          return Object.assign({},state,obj13);



        case "singleSellerCustomerNumFetch":
          let obj4=Object.assign({},state);
          // debugger
          obj4.customerNum.xAxis[0].data.push(action.payload.time);
          obj4.customerNum.series[0].data.push(action.payload.num1);
          obj4.customerNum.series[1].data.push(action.payload.num2);
          obj4.customerNum.series[2].data.push(action.payload.percent);
          obj4.customerNum.xAxis[0].data.shift();
          obj4.customerNum.series[0].data.shift();
          obj4.customerNum.series[1].data.shift();
          obj4.customerNum.series[2].data.shift();
          return Object.assign({},state,obj4);
        case "singleSellerCustomerFlowInit":
          // debugger
          let obj12=Object.assign({},state);
          obj12.customerFlow.xAxis.data=[]
          obj12.customerFlow.series[0].data=[];
          obj12.customerFlow.series[1].data=[];
          obj12.customerFlow.series[2].data=[];
          //商家名
          obj12.customerFlow.name =action.payload.name;
          //赋值
          action.payload.value.forEach(item=>{
            obj12.customerFlow.xAxis.data.push(item.time);
            obj12.customerFlow.series[0].data.push(item.num);
            obj12.customerFlow.series[1].data.push(item.percent1);
            obj12.customerFlow.series[2].data.push(item.percent2);
          })
          return Object.assign({},state,obj12);
        case "allSellersTableInit":
          let obj5=Object.assign({},state);
          obj5.table=[];
          action.payload.forEach(item=>{
              obj5.table.push(item);
          });
          //debugger;
          return Object.assign({},state,obj5);
        case 'singleSellerRadar':   
          // debugger
          let obj6=Object.assign({},state);
          let value=[];
          let payloadValue=action.payload;
          for(let item in payloadValue){
            value.push(payloadValue[item])
          }
          obj6.radar.series.data[0].value = value;
// debugger
          return Object.assign({},state,obj6);
        case 'singleSellerStayBar':
          // debugger
          let obj7=Object.assign({},state);
          let name2=[];
          let value2=[];
          action.payload.forEach(data=>{
            name2.push(data.name);
            value2.push(data.value);
          })
          obj7.stayBar.xAxis[0].data = name2;
          obj7.stayBar.series[0].data = value2;
          return Object.assign({},state,obj7);
        case 'singleSellerOldOrNew':
          // debugger
          let obj8=Object.assign({},state);
          obj8.OldOrNew.series[0].data[0].value = action.payload.old;
          obj8.OldOrNew.series[0].data[1].value = action.payload.new;
          return Object.assign({},state,obj8);
        case 'singleSellerTimeSection':
          // debugger
          let obj9=Object.assign({},state);
          let name3=[];
          let value3=[];
          action.payload.forEach(data=>{
            name3.push(data.name);
            value3.push(data.value);
          })
          obj9.timeSection.xAxis[0].data = name3;
          obj9.timeSection.series[0].data = value3;
          return Object.assign({},state,obj9);
        case 'singleSellerDeepVisit':
          // debugger
          let obj10=Object.assign({},state);
          obj10.deepVisit.series[0].data[0].value = action.payload.shallow;
          obj10.deepVisit.series[0].data[1].value = action.payload.common;
          obj10.deepVisit.series[0].data[2].value = action.payload.deep;
          return Object.assign({},state,obj10);
        case 'singleSellerCycleAndActive':
          let obj11=Object.assign({},state);
          let payLoadData1=action.payload.data1;
          let payLoadData2=action.payload.data2;
          obj11.cycleAndActive.yAxis[0].data=[];
          obj11.cycleAndActive.series[0].data=[];
          obj11.cycleAndActive.series[1].data=[];
          for(let i in payLoadData1){        //bar、来访周期放入数据
            obj11.cycleAndActive.yAxis[0].data.push(payLoadData1[i].time);
            obj11.cycleAndActive.series[0].data.push(payLoadData1[i].value);
          }
          for(let i in payLoadData2){       //pie、活跃度放入数据
            obj11.cycleAndActive.series[1].data.push(payLoadData2[i]);
          }
          return Object.assign({},state,obj11);

        default:
            return state;
    }
}