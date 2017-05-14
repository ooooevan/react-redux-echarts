
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.statistics;
import Immutable from 'immutable';
const initialState = Immutable.Map({});

export default function lineReducer(state=initialState,action){
	switch(action.type){
		case TYPE.statisticsCustomerNumInit:
			let obj={time:[],num:[],percent:[]};
			action.payload.forEach(item => {
        obj.time.push(item.countDate);
        obj.num.push(item.incrementNum);
        // obj.percent.push(item.percent);
      })
			return state.setIn(['customerNum','xAxis',0,'data'],Immutable.List(obj.time))
									.setIn(['customerNum','series',0,'data'],Immutable.List(obj.num))
									// .setIn(['customerNum','series',1,'data'],Immutable.List(obj.percent));
    case TYPE.statisticsPeakInit:
    // debugger
      let peak={time:[],value:[]};
      action.payload.forEach(item=>{
        //为day参数，时间格式只需要时分秒。其他只要日期
        // debugger
        if(item.countDate.split(' ')[1]){
          peak.time.push(item.countDate.split(' ')[1]);
          peak.value.push(item.customerNumber);
        }else{
          peak.time.push(item.countDate);
          peak.value.push(item.customerNumber);
        }
        
      })
      return state.setIn(['customerPeak','xAxis',0,'data'],Immutable.List(peak.time))
                  .setIn(['customerPeak','series',0,'data'],Immutable.List(peak.value));
		case TYPE.statisticsOldOrNewInit:
      let oldnew={time:[],old:[],new:[]};
      action.payload.forEach(item=>{
        oldnew.time.push(item.countDate);
        oldnew.old.push(item.oldCustomer);
        oldnew.new.push(item.newCustomer);
      })
      return state.setIn(['oldOrNew','xAxis',0,'data'],Immutable.List(oldnew.time))
                  .setIn(['oldOrNew','series',0,'data'],Immutable.List(oldnew.new))
                  .setIn(['oldOrNew','series',1,'data'],Immutable.List(oldnew.old));
    case TYPE.statisticsTimeSectionInit:
    	let timeSec={key:[],value:[]};
      action.payload.forEach(item=>{
        timeSec.key.push(item.key);
        timeSec.value.push(item.value);
      })
      return state.setIn(['timeSection','xAxis',0,'data'],Immutable.List(timeSec.key))
                  .setIn(['timeSection','series',0,'data'],Immutable.List(timeSec.value))
    case TYPE.statisticsCycleInit:
    	let cycle={name:[],value:[]};
      action.payload.forEach(item=>{
        cycle.name.push(item.key);
        cycle.value.push(item.value);
      })
      return state.setIn(['cycle','xAxis',0,'data'],Immutable.List(cycle.name))
                  .setIn(['cycle','series',0,'data'],Immutable.List(cycle.value))
    case TYPE.statisticsActiveInit:
    	let active={name:[],value:[]};
      action.payload.forEach(item=>{
        active.name.push(item.key);
        active.value.push(item.value);
      })
      return state.setIn(['active','xAxis',0,'data'],Immutable.List(active.name.reverse()))
                  .setIn(['active','series',0,'data'],Immutable.List(active.value))



    default:return state;
  }
}