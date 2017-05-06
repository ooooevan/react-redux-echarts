// import 'babel-polyfill';

import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.firstPage;
import Immutable from 'immutable';
const initialState = Immutable.Map({})

export default function lineReducer(state=initialState,action){
    // if(typeof state === 'undefined') return {line:{},pie:{}};
    switch(action.type){
        case TYPE.numInit:{

            let numInit={time:[],value:[],percent:[]};
            let yesterday={};

            action.payload.forEach(item=>{
                if(item.increase){
                    yesterday.num=item.num;
                    yesterday.increase=true;
                    yesterday.most=item.most;
                    yesterday.avg=item.avg;
                    yesterday.timeSection=item.timeSection;
                }else{
                    numInit.time.push(item.time);
                    numInit.value.push(item.value);
                    numInit.percent.push(item.percent);
                }
            })
            // debugger
            // const mapLine1 = state.updateIn(['line','xAxis','data'],data =>time);
            // const mapLine2 = mapLine1.updateIn(['line','series','data'],data =>value);
            // const mapLine3 = mapLine2.setIn(['line','xAxis','yesterday'],Immutable.fromJS(yesterday));
            // debugger
            return state.setIn(['line','xAxis','data'],Immutable.List(numInit.time))
                        .setIn(['line','series',0,'data'],Immutable.List(numInit.value))
                        .setIn(['line','series',1,'data'],Immutable.List(numInit.percent))
                        .setIn(['line','xAxis','yesterday'],Immutable.fromJS(yesterday));
            // return mapLine3;
        }
        case TYPE.fetch:{
            
            // debugger
            // console.log(Object.assign({},state,aa))
            return state.updateIn(['line','xAxis','data'],list=>{
                        
                        return list.push(action.payload.time);
                    })
                    .updateIn(['line','xAxis','data'],list=>{
                        return list.shift();
                    })
                    .updateIn(['line','series',0,'data'],list=>{
                        return list.push(parseInt(action.payload.value));
                    })
                    .updateIn(['line','series',0,'data'],list=>{
                        return list.shift();
                    })
                    .updateIn(['line','series',1,'data'],list=>{
                        return list.push(action.payload.percent);
                    })
                    .updateIn(['line','series',1,'data'],list=>{
                        return list.shift();
                    });

        }
        case TYPE.sellersInit:{
            let obj={sellers:[],num:[]}
            action.payload.forEach((item)=>{
                obj.sellers.push(item.seller);
                obj.num.push(item.num);
            })
            return state.setIn(['sellers','xAxis',0,'data'],obj.sellers)
                        .setIn(['sellers','series',0,'data'],obj.num);
        }
        default:return state;
    }
}