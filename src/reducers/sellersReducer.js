
// import 'babel-polyfill';
import Immutable from 'immutable';
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.sellers;

const initialState = Immutable.Map({});
export default function sellersReducer(state=initialState,action){
    // if(typeof state === 'undefined') return {sellers:[]}
    switch(action.type){
        case TYPE.sellersListInit:
          let list=[];
          action.payload.forEach(item => {
            list.push(item.shopName);
          })

          //商家列表,action.payload是对象数组，用List
          return state.setIn(['sellers'],Immutable.List(list));
        case TYPE.allSellersLineChartInit:
      		/*let obj2=Object.assign({},state);*/
          
          /*//本身没有数据就初始化，本身有数据就清除
      		obj2.lineAndBar.xAxis[0].data=[];
      		obj2.lineAndBar.series[0].data=[];
      		obj2.lineAndBar.series[1].data=[];*/
          // debugger
          const obj={seller:[],num:[],percent:[],lastPage:false};
          // let lastPage=false;
          action.payload.forEach(item => {
            if(item.isLastPage){         //判断是否最后一页
              obj.lastPage=true;
              obj.seller.push(item.shopName);
              obj.num.push(item.incrementNum);
              obj.percent.push(item.momPercent);
            }else{
              obj.seller.push(item.shopName);
              obj.num.push(item.incrementNum);
              obj.percent.push(item.momPercent);
            }
          })
          // debugger
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

        case TYPE.singleSellerCustomerNumInit:
          const yesterday={};
          const customer={name:action.payload[0].shopName,time:[],num1:[],num2:[],percent:[]}
          action.payload.forEach(item=>{
                if( item.yesterdayMaxNumber > 0 ){
                    yesterday.num=item.yesterdayMaxNumber;
                    yesterday.time=item.maxNumberTime.split(' ')[1];
                }else{
                    customer.time.push(item.countDate.split(' ')[1]);
                    customer.num1.push(item.customerNumber);
                    customer.num2.push(item.doorCustomerNumber);
                    customer.percent.push(item.customerRatio);
                }
            })
          //商家名
          // customer.name =action.payload.name;
          //赋值
          // action.payload.value.forEach(item=>{
          //   // debugger
          //   customer.time.push(item.time);
          //   customer.num1.push(item.num1);
          //   // customer.num2.push(item.num2);
          //   customer.percent.push(item.percent);
          // })
          return state.setIn(['customerNum','xAxis',0,'data'],Immutable.List(customer.time))
                      .setIn(['customerNum','series',0,'data'],Immutable.List(customer.num1))
                      .setIn(['customerNum','series',1,'data'],Immutable.List(customer.num2))
                      .setIn(['customerNum','series',2,'data'],Immutable.List(customer.percent))
                      .setIn(['customerNum','name'],customer.name)
                      .setIn(['customerNum','xAxis',0,'yesterday'],Immutable.Map(yesterday));


        case TYPE.singleSellerCustomerNumFetch:
          // let obj4=Object.assign({},state);
          // let dfas= state.setIn(['customerNum','xAxis',0,'data'],action.payload.time)
          //             .setIn(['customerNum','series',0,'data'],action.payload.num1)
          //             .setIn(['customerNum','series',1,'data'],action.payload.num2)
          //             .setIn(['customerNum','series',2,'data'],action.payload.percent)
         return state.updateIn(['customerNum','xAxis',0,'data'],list=>{
                        return list.push(action.payload.countDate.split(' ')[1]);
                      })
                     .updateIn(['customerNum','xAxis',0,'data'],list=>{
                        return list.shift();
                      })
                      .updateIn(['customerNum','series',0,'data'],list=>{
                        return list.push(action.payload.customerNumber);
                      })
                      .updateIn(['customerNum','series',0,'data'],list=>{
                        return list.shift();
                      })
                      .updateIn(['customerNum','series',1,'data'],list=>{
                        return list.push(action.payload.doorCustomerNumber);
                      })
                      .updateIn(['customerNum','series',1,'data'],list=>{
                        return list.shift();
                      })
                      .updateIn(['customerNum','series',2,'data'],list=>{
                        return list.push(action.payload.customerRatio);
                      })
                      .updateIn(['customerNum','series',2,'data'],list=>{
                        return list.shift();
                      })
                      /*.updateIn(['customerNum','series',1,'data'],data=>{
                        return data.push(action.payload.num2).shift();
                      })*/
                      // .updateIn(['customerNum','series',1,'data'],list=>{
                      //   console.log(state.getIn(['customerNum']).toJS())
                      //   return list.push(action.payload.percent).shift();
                      // });

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
          let CustomerFlow={name:action.payload[0].shopName,time:[],num:[],percent:[]};
          action.payload.forEach(item=>{
            if(item.countDate.split(' ')[1]){
              CustomerFlow.time.push(item.countDate.split(' ')[1]);
              CustomerFlow.num.push(item.customerNumber);
              CustomerFlow.percent.push(item.customerRatio);
            }else{
              CustomerFlow.time.push(item.countDate);
              CustomerFlow.num.push(item.customerNumber);
              CustomerFlow.percent.push(item.customerRatio);
            }
          })
          return state.setIn(['customerFlow','xAxis','data'],Immutable.List(CustomerFlow.time))
                        .setIn(['customerFlow','name'],CustomerFlow.name)
                        .setIn(['customerFlow','series',0,'data'],Immutable.List(CustomerFlow.num))
                        .setIn(['customerFlow','series',1,'data'],Immutable.List(CustomerFlow.percent));
        case TYPE.singleSellerCustomerAvgInit:
          let CustomerAvg={name:action.payload[0].shopName,time:[],num:[],percent:[]};
          action.payload.forEach(item=>{
            if(item.countDate.split(' ')[1]){
              CustomerAvg.time.push(item.countDate.split(' ')[1]);
              CustomerAvg.num.push(item.customerNumber);
              CustomerAvg.percent.push(item.customerRatio);
            }else{
              CustomerAvg.time.push(item.countDate);
              CustomerAvg.num.push(item.customerNumber);
              CustomerAvg.percent.push(item.customerRatio);
            }
          })
          return state.setIn(['customerAvg','xAxis','data'],Immutable.List(CustomerAvg.time))
                        .setIn(['customerAvg','name'],CustomerAvg.name)
                        .setIn(['customerAvg','series',0,'data'],Immutable.List(CustomerAvg.num))
                        .setIn(['customerAvg','series',1,'data'],Immutable.List(CustomerAvg.percent));

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
          action.payload.forEach(item=>{
          /*  obj12.customerFlow.xAxis.data.push(item.time);
            obj12.customerFlow.series[0].data.push(item.num);
            obj12.customerFlow.series[1].data.push(item.percent1);
            obj12.customerFlow.series[2].data.push(item.percent2);*/
            if(item.countDate.split(' ')[1]){
              customerIn.time.push(item.countDate.split(' ')[1]);
              customerIn.num.push(item.incrementNum);
              customerIn.percent1.push(item.incrementRatio);
            }else{
              customerIn.time.push(item.countDate);
              customerIn.num.push(item.incrementNum);
              customerIn.percent1.push(item.incrementRatio);
            }
            // customerIn.percent2.push(item.percent2);
          })
          // return Object.assign({},state,obj12);
            return state.setIn(['customerIn','xAxis','data'],Immutable.List(customerIn.time))
                        .setIn(['customerIn','name'],customerIn.name)
                        .setIn(['customerIn','series',0,'data'],Immutable.List(customerIn.num))
                        .setIn(['customerIn','series',1,'data'],Immutable.List(customerIn.percent1))
                        // .setIn(['customerIn','series',2,'data'],Immutable.List(customerIn.percent2));
        
        case TYPE.singleSellerRadar:
          // debugger

          // let obj6=Object.assign({},state);
          let radar={name:[],value:[]};
          action.payload.forEach(item=>{
            radar.name.push(item.indicators);
            radar.value.push(item.score);
          })
          // for(let item in payloadValue){
          //   value.push(payloadValue[item])
          // }
          // obj6.radar.series.data[0].value = value;
          return state.setIn(['radar','series','data',0],Immutable.List(radar.value))
                      .setIn(['radar','radar','indicator',0,'name'],radar.name[0])
                      .setIn(['radar','radar','indicator',1,'name'],radar.name[1])
                      .setIn(['radar','radar','indicator',2,'name'],radar.name[2])
                      .setIn(['radar','radar','indicator',3,'name'],radar.name[3])
                      .setIn(['radar','radar','indicator',4,'name'],radar.name[4])
          // return Object.assign({},state,obj6);
        case TYPE.singleSellerStayBar:
          // debugger
          // let obj7=Object.assign({},state);
          let staybar={name:[],value:[]}
          // let name2=[];
          // let value2=[];
          action.payload.forEach(item=>{
            staybar.name.push(item.key);
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
            oldnew.time.push(item.countDate);
            oldnew.old.push(item.oldCustomer);
            oldnew.new.push(item.newCustomer);
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
            timeSection.name.push(item.key);
            timeSection.value.push(item.value);
          })
          // obj9.timeSection.xAxis[0].data = name3;
          // obj9.timeSection.series[0].data = value3;
          // return Object.assign({},state,obj9);
          return state.setIn(['timeSection','xAxis',0,'data'],Immutable.List(timeSection.name))
                      .setIn(['timeSection','series',0,'data'],Immutable.List(timeSection.value))
        case TYPE.singleSellerDeepVisit:
          let deep={time:[],deep:[],out:[],deepNum:[],outNum:[]};
          action.payload.forEach(item=>{
            deep.time.push(item.countDate);
            deep.deep.push(item.deepRatio);
            deep.deepNum.push(item.deepNum);
            deep.out.push(item.jumpRatio);
            deep.outNum.push(item.jumpNum);
          })
          // let obj10=Object.assign({},state);
          // obj10.deepVisit.series[0].data[0].value = action.payload.shallow;
          // obj10.deepVisit.series[0].data[1].value = action.payload.common;
          // obj10.deepVisit.series[0].data[2].value = action.payload.deep;
          return state.setIn(['deepVisit','xAxis','data'],Immutable.List(deep.time))
                      .setIn(['deepVisit','series',0,'data'],Immutable.List(deep.deep))
                      .setIn(['deepVisit','series',1,'data'],Immutable.List(deep.out))
                      .setIn(['deepVisit','xAxis','deepNum'],Immutable.List(deep.deepNum))
                      .setIn(['deepVisit','xAxis','outNum'],Immutable.List(deep.outNum))
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
            cycle.name.push(item.key);
            cycle.value.push(item.value);
          })
          return state.setIn(['cycle','xAxis',0,'data'],Immutable.List(cycle.name))
                  .setIn(['cycle','series',0,'data'],Immutable.List(cycle.value));
        case TYPE.singleSellerActiveInit:
          let active={name:[],value:[]};
          action.payload.forEach(item=>{
            active.name.push(item.key);
            active.value.push(item.value);
          })
          return state.setIn(['active','xAxis',0,'data'],Immutable.List(active.name.reverse()))
                  .setIn(['active','series',0,'data'],Immutable.List(active.value));
        default:
            return state;
    }
}