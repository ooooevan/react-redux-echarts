// import 'babel-polyfill';

import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.compare;
import Immutable from 'immutable';
const initialState = Immutable.Map({})

export default function compareReducer(state=initialState,action){
    // if(typeof state === 'undefined') return {line:{},pie:{}};
    switch(action.type){
        case TYPE.numInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.data1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.data2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['customerNum','xAxis',0,'data'],obj.time)
                        .setIn(['customerNum','series',0,'data'],obj.num1)
                        .setIn(['customerNum','series',1,'data'],obj.num2);
            // return mapLine3;
        }
        case TYPE.oldOrNewInit:{
            let obj={time:[],percent1:[],percent2:[]};
            action.payload.data1.forEach(item=>{
                obj.time.push(item.time);
                obj.percent1.push(item.percent);
            })
            action.payload.data2.forEach(item=>{
                obj.percent2.push(item.percent);
            })
            // debugger
            return state.setIn(['oldOrNew','xAxis',0,'data'],obj.time)
                        .setIn(['oldOrNew','series',0,'data'],obj.percent1)
                        .setIn(['oldOrNew','series',1,'data'],obj.percent2);
        }
        case TYPE.deepVisitInit:{
            let obj={time:[],percent1:[],percent2:[]};
            action.payload.data1.forEach(item=>{
                obj.time.push(item.time);
                obj.percent1.push(item.percent);
            })
            action.payload.data2.forEach(item=>{
                obj.percent2.push(item.percent);
            })
            // debugger
            return state.setIn(['deepVisit','xAxis',0,'data'],obj.time)
                        .setIn(['deepVisit','series',0,'data'],obj.percent1)
                        .setIn(['deepVisit','series',1,'data'],obj.percent2);
        }
        case TYPE.outInit:{
            let obj={time:[],percent1:[],percent2:[]};
            action.payload.data1.forEach(item=>{
                obj.time.push(item.time);
                obj.percent1.push(item.percent);
            })
            action.payload.data2.forEach(item=>{
                obj.percent2.push(item.percent);
            })
            // debugger
            return state.setIn(['out','xAxis',0,'data'],obj.time)
                        .setIn(['out','series',0,'data'],obj.percent1)
                        .setIn(['out','series',1,'data'],obj.percent2);
        }
        case TYPE.activeInit:{
            
            let obj={time:[],num1:[],num2:[]};
            action.payload.data1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.data2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['active','xAxis',0,'data'],obj.time)
                        .setIn(['active','series',0,'data'],obj.num1)
                        .setIn(['active','series',1,'data'],obj.num2);
        }
        case TYPE.cycleInit:{
            
            let obj={time:[],num1:[],num2:[]};
            action.payload.data1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.data2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['cycle','xAxis',0,'data'],obj.time)
                        .setIn(['cycle','series',0,'data'],obj.num1)
                        .setIn(['cycle','series',1,'data'],obj.num2);
        }
        case TYPE.sellersNumInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.seller1.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['sellersNum','xAxis',0,'data'],obj.time)
                        .setIn(['sellersNum','series',0,'data'],obj.num1)
                        .setIn(['sellersNum','series',1,'data'],obj.num2);
            // return mapLine3;
        }
        case TYPE.sellersListInit:{
        	return state.setIn(['sellersList'],Immutable.List(action.payload));
        }
        case TYPE.sellersInInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.seller2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['sellersIn','xAxis',0,'data'],obj.time)
                        .setIn(['sellersIn','series',0,'data'],obj.num1)
                        .setIn(['sellersIn','series',1,'data'],obj.num2);
            // return mapLine3;
        }
        case TYPE.sellersOldOrNewInit:{
            let obj={time:[],percent1:[],percent2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.percent1.push(item.percent);
            })
            action.payload.seller2.forEach(item=>{
                obj.percent2.push(item.percent);
            })
            // debugger
            return state.setIn(['sellersOldOrNew','xAxis',0,'data'],obj.time)
                        .setIn(['sellersOldOrNew','series',0,'data'],obj.percent1)
                        .setIn(['sellersOldOrNew','series',1,'data'],obj.percent2);
        }
        case TYPE.sellersOutInit:{
            let obj={time:[],percent1:[],percent2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.percent1.push(item.percent);
            })
            action.payload.seller2.forEach(item=>{
                obj.percent2.push(item.percent);
            })
            return state.setIn(['sellersOut','xAxis',0,'data'],obj.time)
                        .setIn(['sellersOut','series',0,'data'],obj.percent1)
                        .setIn(['sellersOut','series',1,'data'],obj.percent2);
        }
        case TYPE.sellersDeepInit:{
            let obj={time:[],percent1:[],percent2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.percent1.push(item.percent);
            })
            action.payload.seller2.forEach(item=>{
                obj.percent2.push(item.percent);
            })
            // debugger
            return state.setIn(['sellersDeep','xAxis',0,'data'],obj.time)
                        .setIn(['sellersDeep','series',0,'data'],obj.percent1)
                        .setIn(['sellersDeep','series',1,'data'],obj.percent2);
        }
        case TYPE.sellersStayInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.seller2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['sellersStay','xAxis',0,'data'],obj.time)
                        .setIn(['sellersStay','series',0,'data'],obj.num1)
                        .setIn(['sellersStay','series',1,'data'],obj.num2);
        }
        case TYPE.sellersActiveInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.seller2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['sellersActive','xAxis',0,'data'],obj.time)
                        .setIn(['sellersActive','series',0,'data'],obj.num1)
                        .setIn(['sellersActive','series',1,'data'],obj.num2);
        }
        case TYPE.sellersTimeSectionInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.seller2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['sellersTimeSection','xAxis',0,'data'],obj.time)
                        .setIn(['sellersTimeSection','series',0,'data'],obj.num1)
                        .setIn(['sellersTimeSection','series',1,'data'],obj.num2);
        }
        case TYPE.sellersCycleInit:{
            let obj={time:[],num1:[],num2:[]};
            action.payload.seller1.forEach(item=>{
                obj.time.push(item.time);
                obj.num1.push(item.num);
            })
            action.payload.seller2.forEach(item=>{
                obj.num2.push(item.num);
            })
            // debugger
            return state.setIn(['sellersCycle','xAxis',0,'data'],obj.time)
                        .setIn(['sellersCycle','series',0,'data'],obj.num1)
                        .setIn(['sellersCycle','series',1,'data'],obj.num2);
        }
        default:return state;
    }
}