// import 'babel-polyfill';

import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.firstPage;
import Immutable from 'immutable';
const initialState = Immutable.Map({})

export default function lineReducer(state=initialState,action){
    // if(typeof state === 'undefined') return {line:{},pie:{}};
    switch(action.type){
        case TYPE.firstPageNumInit:{

        // debugger

            let time=[];
            let value=[];
            
            let yesterday={};
            // let increase=false;
            // let yesterday=0;
            // let most=0;
            // let timeSection='';
/*var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};



            var aaa=cloneObj(state.line);*/
            // debugger
            action.payload.forEach(item=>{
                if(item.increase){
                    yesterday.num=item.num;
                    yesterday.increase=true;
                    yesterday.most=item.most;
                    yesterday.avg=item.avg;
                    yesterday.timeSection=item.timeSection;
                }else{
                    time.push(item.time)
                    value.push(item.value)
                }
            })
            //aa是新obj，用于返回
            // debugger
            // const  eeee=state.toJS();
            /*var aaa = Object.assign({},state.line);
            aaa.xAxis.data=time;
            aaa.xAxis.yesterday=yesterday;
            // aaa.xAxis.yesterday.yesterday=yesterday;
            // aaa.xAxis.yesterday.most=most;
            // aaa.xAxis.yesterday.timeSection=timeSection;
            aaa.series.data=value;
            return Object.assign({},state,{"line":aaa});*/
            // debugger
            const mapLine1 = state.updateIn(['line','xAxis','data'],data =>time);
            const mapLine2 = mapLine1.updateIn(['line','series','data'],data =>value);
            const mapLine3 = mapLine2.setIn(['line','xAxis','yesterday'],Immutable.fromJS(yesterday));
            let mapLine4 = mapLine3.toJS();
            let mapLine5 = mapLine2.toJS();
            // debugger
            return mapLine3;
        }
        case TYPE.firstPageFetch:{
            
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


            return aa;
        }
        
        default:return state;
    }
}