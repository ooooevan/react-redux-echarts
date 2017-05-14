// import 'babel-polyfill';

import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.firstPage;
import Immutable from 'immutable';
const initialState = Immutable.Map({})

export default function lineReducer(state=initialState,action){
    // if(typeof state === 'undefined') return {line:{},pie:{}};
    switch(action.type){
        case TYPE.numInit:{

            const numInit={time:[],value:[],percent:[]};
            const yesterday={};

            action.payload.forEach(item=>{
                if( item.yesterdayMaxNumber > 0 ){
                    yesterday.num=item.yesterdayMaxNumber;
                    yesterday.countDate=item.countDate.split(' ')[1];
                }else{
                    numInit.time.push(item.countDate.split(' ')[1]);
                    numInit.value.push(item.customerNumber);
                    // numInit.percent.push(item.percent);
                }
            })
            return state.setIn(['line','xAxis','data'],Immutable.List(numInit.time))
                        .setIn(['line','series',0,'data'],Immutable.List(numInit.value))
                        // .setIn(['line','series',1,'data'],Immutable.List(numInit.percent))
                        .setIn(['line','xAxis','yesterday'],Immutable.fromJS(yesterday));
            // return mapLine3;
        }
        case TYPE.fetch:{
            return state.updateIn(['line','xAxis','data'],list=>{
                        
                        return list.push(action.payload.countDate.split(' ')[1]);
                    })
                    .updateIn(['line','xAxis','data'],list=>{
                        return list.shift();
                    })
                    .updateIn(['line','series',0,'data'],list=>{
                        return list.push(parseInt(action.payload.customerNumber));
                    })
                    .updateIn(['line','series',0,'data'],list=>{
                        return list.shift();
                    })
                    /*.updateIn(['line','series',1,'data'],list=>{
                        return list.push(action.payload.percent);
                    })
                    .updateIn(['line','series',1,'data'],list=>{
                        return list.shift();
                    });*/

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