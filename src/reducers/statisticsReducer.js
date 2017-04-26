
import dispatchType from '../constants/dispatchType';
const TYPE=dispatchType.statistics;
import Immutable from 'immutable';
const initialState = Immutable.Map({});

export default function lineReducer(state=initialState,action){
	switch(action.type){
		case TYPE.statisticsCustomerNumInit:
			let obj={time:[],num:[],percent:[]};
			action.payload.forEach(item => {
        obj.time.push(item.time);
        obj.num.push(item.num);
        obj.percent.push(item.percent);
      })
			return state.setIn(['customerNum','xAxis',0,'data'],Immutable.List(obj.time))
									.setIn(['customerNum','series',0,'data'],Immutable.List(obj.num))
									.setIn(['customerNum','series',1,'data'],Immutable.List(obj.percent));
		case TYPE.statisticsOldOrNewInit:
      let oldnew={time:[],old:[],new:[]};
      action.payload.forEach(item=>{
        oldnew.time.push(item.time);
        oldnew.old.push(item.old);
        oldnew.new.push(item.new);
      })
      return state.setIn(['oldOrNew','xAxis',0,'data'],Immutable.List(oldnew.time))
                  .setIn(['oldOrNew','series',0,'data'],Immutable.List(oldnew.new))
                  .setIn(['oldOrNew','series',1,'data'],Immutable.List(oldnew.old));
    case TYPE.statisticsTimeSectionInit:
    	let timeSec={name:[],value:[]};
      action.payload.forEach(item=>{
        timeSec.name.push(item.name);
        timeSec.value.push(item.value);
      })
      return state.setIn(['timeSection','xAxis',0,'data'],Immutable.List(timeSec.name))
                  .setIn(['timeSection','series',0,'data'],Immutable.List(timeSec.value))
    case TYPE.statisticsCycleInit:
    	let cycle={name:[],value:[]};
      action.payload.forEach(item=>{
        cycle.name.push(item.time);
        cycle.value.push(item.value);
      })
      return state.setIn(['cycle','xAxis',0,'data'],Immutable.List(cycle.name))
                  .setIn(['cycle','series',0,'data'],Immutable.List(cycle.value))
    case TYPE.statisticsActiveInit:
    	let active={name:[],value:[]};
      action.payload.forEach(item=>{
        active.name.push(item.time);
        active.value.push(item.value);
      })
      return state.setIn(['active','xAxis',0,'data'],Immutable.List(active.name))
                  .setIn(['active','series',0,'data'],Immutable.List(active.value))



    default:return state;
  }
}