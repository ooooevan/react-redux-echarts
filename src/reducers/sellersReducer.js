
// import 'babel-polyfill';
import Immutable from 'immutable';
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.sellers;

const initialState = Immutable.Map({});
export default function sellersReducer(state=initialState,action){
    // if(typeof state === 'undefined') return {sellers:[]}
    switch(action.type){
        case TYPE.sellersListInit:

          //商家列表,action.payload是对象数组，用List
          return state.setIn(['sellers'],Immutable.List(action.payload));
        case TYPE.allSellersLineChartInit:
      		/*let obj2=Object.assign({},state);*/
          
          /*//本身没有数据就初始化，本身有数据就清除
      		obj2.lineAndBar.xAxis[0].data=[];
      		obj2.lineAndBar.series[0].data=[];
      		obj2.lineAndBar.series[1].data=[];*/
          // debugger
          let obj={seller:[],num:[],percent:[],lastPage:false};
          // let lastPage=false;
          action.payload.forEach(item => {
            if(item.lastPage){         //判断是否最后一页
              obj.lastPage=true;
            }else{
              obj.seller.push(item.seller);
              obj.num.push(item.num);
              obj.percent.push(item.percent);
            }
          })
          //获取xAis对象,用链式调用
          return state.setIn(['lineAndBar','xAxis',0,'data'],Immutable.List(obj.seller))
                              .setIn(['lineAndBar','xAxis',0,'lastPage'],obj.lastPage)
                              .setIn(['lineAndBar','series',0,'data'],Immutable.List(obj.num))
                              .setIn(['lineAndBar','series',1,'data'],Immutable.List(obj.percent));
          // const xAis1 = xAxis.set('data',Immutable.List(item.seller));
          // let fds=xAxis.toJS();
          // const xAis11 = xAxis.setIn(['lineAndBar','xAxis',0,'lastPage'],lastPage);
          //获取series[0]
          // let ew=xAis11.toJS();
          // const series0 = xAis11.setIn(['lineAndBar','series',0,'data'],Immutable.List(obj.num));
          // const series01 = series0.set('data',Immutable.List(item.num))
          //获取series[1]
          // const series1 = series01.getIn(['lineAndBar','series']).get(1);
          // const series11 = series0.setIn(['lineAndBar','series',1,'data'],Immutable.List(obj.percent));
            // obj2.lineAndBar.xAxis[0].lastPage=lastPage;
            // let df=xAxis.toJS();
					// return xAxis;
        // case "singleSellerLineChartInit":



          // let obj3=Object.assign({},state);
          // obj3.lineAndLine.xAxis.data=[]
          // obj3.lineAndLine.series[0].data=[];
          // obj3.lineAndLine.series[1].data=[];
          // //商家名
          // obj3.lineAndLine.name =action.payload.name;
          // //赋值
          // action.payload.value.forEach(item=>{
          //   obj3.lineAndLine.xAxis.data.push(item.time);
          //   obj3.lineAndLine.series[0].data.push(item.num);
          //   obj3.lineAndLine.series[1].data.push(item.percent);
          // })




          // return Object.assign({},state,obj3);
        case TYPE.singleSellerCustomerNumInit:
          // debugger;
          /*let obj13=Object.assign({},state);
          obj13.customerNum.xAxis[0].data=[];
          obj13.customerNum.series[0].data=[];
          obj13.customerNum.series[1].data=[];
          obj13.customerNum.series[2].data=[];*/
          let customer={name:'',time:[],num1:[]/*,num2:[]*/,percent:[]}
          //商家名
          customer.name =action.payload.name;
          //赋值
          action.payload.value.forEach(item=>{
            // debugger
            customer.time.push(item.time);
            customer.num1.push(item.num1);
            // customer.num2.push(item.num2);
            customer.percent.push(item.percent);
          })
          return state.setIn(['customerNum','xAxis',0,'data'],Immutable.List(customer.time))
                      .setIn(['customerNum','series',0,'data'],Immutable.List(customer.num1))
                      // .setIn(['customerNum','series',1,'data'],Immutable.List(customer.num2))
                      .setIn(['customerNum','series',1,'data'],Immutable.List(customer.percent))
                      .setIn(['customerNum','name'],customer.name);

        case TYPE.singleSellerCustomerNumFetch:
          // let obj4=Object.assign({},state);
          // let dfas= state.setIn(['customerNum','xAxis',0,'data'],action.payload.time)
          //             .setIn(['customerNum','series',0,'data'],action.payload.num1)
          //             .setIn(['customerNum','series',1,'data'],action.payload.num2)
          //             .setIn(['customerNum','series',2,'data'],action.payload.percent)
         return state.updateIn(['customerNum','xAxis',0,'data'],list=>{
                        return list.push(action.payload.time);
                      })
                     .updateIn(['customerNum','xAxis',0,'data'],list=>{
                        return list.shift();
                      })
                      .updateIn(['customerNum','series',0,'data'],list=>{
                        return list.push(action.payload.num1);
                      })
                      .updateIn(['customerNum','series',0,'data'],list=>{
                        return list.shift();
                      })
                      /*.updateIn(['customerNum','series',1,'data'],data=>{
                        return data.push(action.payload.num2).shift();
                      })*/
                      .updateIn(['customerNum','series',1,'data'],list=>{
                        console.log(state.getIn(['customerNum']).toJS())
                        return list.push(action.payload.percent).shift();
                      });

        /*case TYPE.allSellersTableInit:
          // debugger
          let arr=[];
          // let obj5=Object.assign({},state);
          // obj5.table=[];
          action.payload.forEach(item=>{
            arr.push(item);
              // obj5.table.push(item);
          });
          return state.set('table',Immutable.List(arr));*/
        case TYPE.singleSellerCustomerFlowInit:
          let CustomerFlow={name:'',time:[],num:[],percent:[]};
          CustomerFlow.name =action.payload.name;
          action.payload.value.forEach(item=>{
            CustomerFlow.time.push(item.time);
            CustomerFlow.num.push(item.num);
            CustomerFlow.percent.push(item.percent);
          })
          return state.setIn(['customerFlow','xAxis','data'],Immutable.List(CustomerFlow.time))
                        .setIn(['customerFlow','name'],CustomerFlow.name)
                        .setIn(['customerFlow','series',0,'data'],Immutable.List(CustomerFlow.num))
                        .setIn(['customerFlow','series',1,'data'],Immutable.List(CustomerFlow.percent));

        case TYPE.singleSellerCustomerInInit:
          let customerIn={name:'',time:[],num:[],percent1:[],percent2:[]};
          /*let obj12=Object.assign({},state);
          obj12.customerFlow.xAxis.data=[]
          obj12.customerFlow.series[0].data=[];
          obj12.customerFlow.series[1].data=[];
          obj12.customerFlow.series[2].data=[];*/
          //商家名
          customerIn.name =action.payload.name;
          //赋值
          action.payload.value.forEach(item=>{
          /*  obj12.customerFlow.xAxis.data.push(item.time);
            obj12.customerFlow.series[0].data.push(item.num);
            obj12.customerFlow.series[1].data.push(item.percent1);
            obj12.customerFlow.series[2].data.push(item.percent2);*/
            customerIn.time.push(item.time);
            customerIn.num.push(item.num);
            customerIn.percent1.push(item.percent1);
            customerIn.percent2.push(item.percent2);
          })
          // return Object.assign({},state,obj12);
            return state.setIn(['customerIn','xAxis','data'],Immutable.List(customerIn.time))
                        .setIn(['customerIn','name'],customerIn.name)
                        .setIn(['customerIn','series',0,'data'],Immutable.List(customerIn.num))
                        .setIn(['customerIn','series',1,'data'],Immutable.List(customerIn.percent1))
                        .setIn(['customerIn','series',2,'data'],Immutable.List(customerIn.percent2));
        
        case TYPE.singleSellerRadar:
          // debugger

          // let obj6=Object.assign({},state);
          let value=[];
          action.payload.forEach(item=>{
            value.push(item)
          })
          // for(let item in payloadValue){
          //   value.push(payloadValue[item])
          // }
          // obj6.radar.series.data[0].value = value;
          return state.setIn(['radar','series','data',0],Immutable.List(value));
          // return Object.assign({},state,obj6);
        case TYPE.singleSellerStayBar:
          // debugger
          // let obj7=Object.assign({},state);
          let staybar={name:[],value:[]}
          // let name2=[];
          // let value2=[];
          action.payload.forEach(item=>{
            staybar.name.push(item.name);
            staybar.value.push(item.value);
          })
          return state.setIn(['stayBar','xAxis',0,'data'],Immutable.List(staybar.name))
               .setIn(['stayBar','series',0,'data'],Immutable.List(staybar.value))
          // obj7.stayBar.xAxis[0].data = name2;
          // obj7.stayBar.series[0].data = value2;
          // return Object.assign({},state,obj7);
        case TYPE.singleSellerOldOrNew:
          // debugger
          // let obj8=Object.assign({},state);
          // obj8.OldOrNew.series[0].data[0].value = action.payload.old;
          // obj8.OldOrNew.series[0].data[1].value = action.payload.new;
          // return Object.assign({},state,obj8);
          let oldnew={time:[],old:[],new:[]};
          action.payload.forEach(item=>{
            oldnew.time.push(item.time);
            oldnew.old.push(item.old);
            oldnew.new.push(item.new);
          })
          return state.setIn(['oldOrNew','xAxis',0,'data'],Immutable.List(oldnew.time))
                      .setIn(['oldOrNew','series',0,'data'],Immutable.List(oldnew.new))
                      .setIn(['oldOrNew','series',1,'data'],Immutable.List(oldnew.old));
        case TYPE.singleSellerTimeSection:
          // debugger
          // let obj9=Object.assign({},state);
          let timeSection={name:[],value:[]};
          // let name3=[];
          // let value3=[];
          action.payload.forEach(item=>{
            timeSection.name.push(item.name);
            timeSection.value.push(item.value);
          })
          // obj9.timeSection.xAxis[0].data = name3;
          // obj9.timeSection.series[0].data = value3;
          // return Object.assign({},state,obj9);
          return state.setIn(['timeSection','xAxis',0,'data'],Immutable.List(timeSection.name))
                      .setIn(['timeSection','series',0,'data'],Immutable.List(timeSection.value))
        case TYPE.singleSellerDeepVisit:
          let deep={time:[],deep:[]};
          action.payload.forEach(item=>{
            deep.time.push(item.time);
            deep.deep.push(item.deep);
          })
          // debugger
          // let obj10=Object.assign({},state);
          // obj10.deepVisit.series[0].data[0].value = action.payload.shallow;
          // obj10.deepVisit.series[0].data[1].value = action.payload.common;
          // obj10.deepVisit.series[0].data[2].value = action.payload.deep;
          return state.setIn(['deepVisit','xAxis','data'],Immutable.List(deep.time))
                      .setIn(['deepVisit','series','data'],Immutable.List(deep.deep));
          // return Object.assign({},state,obj10);
        /*case TYPE.singleSellerCycleAndActive:
          // let obj11=Object.assign({},state);
          // let payLoadData1=action.payload.data1;
          // let payLoadData2=action.payload.data2;
          // obj11.cycleAndActive.yAxis[0].data=[];
          // obj11.cycleAndActive.series[0].data=[];
          // obj11.cycleAndActive.series[1].data=[];
          // for(let i in payLoadData1){        //bar、来访周期放入数据
          //   obj11.cycleAndActive.yAxis[0].data.push(payLoadData1[i].time);
          //   obj11.cycleAndActive.series[0].data.push(payLoadData1[i].value);
          // }
          // for(let i in payLoadData2){       //pie、活跃度放入数据，放入的是对象(echarts规定)
          //   obj11.cycleAndActive.series[1].data.push(payLoadData2[i]);
          // }
          let data1={time:[],value:[]};
          let data2=[];
          //bar、来访周期放入数据
          action.payload.data1.reverse().forEach(item=>{
            data1.time.push(item.time);
            data1.value.push(item.value);
          })
          //pie、活跃度放入数据，放入的是对象(echarts规定)
          action.payload.data2.forEach(item=>{
            data2.push(item);
          })
          // return Object.assign({},state,obj11);
          return state.setIn(['cycleAndActive','yAxis',0,'data'],Immutable.List(data1.time))
                      .setIn(['cycleAndActive','series',0,'data'],Immutable.List(data1.value))
                      .setIn(['cycleAndActive','series',1,'data'],Immutable.List(data2))*/
        case TYPE.singleSellerCycleInit:
          let cycle={name:[],value:[]};
          action.payload.forEach(item=>{
            cycle.name.push(item.time);
            cycle.value.push(item.value);
          })
          return state.setIn(['cycle','xAxis',0,'data'],Immutable.List(cycle.name))
                  .setIn(['cycle','series',0,'data'],Immutable.List(cycle.value));
        case TYPE.singleSellerActiveInit:
          let active={name:[],value:[]};
          action.payload.forEach(item=>{
            active.name.push(item.time);
            active.value.push(item.value);
          })
          return state.setIn(['active','xAxis',0,'data'],Immutable.List(active.name))
                  .setIn(['active','series',0,'data'],Immutable.List(active.value));
        default:
            return state;
    }
}