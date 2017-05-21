
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
    case TYPE.statisticsAvgInit:
    // debugger
      let avg={time:[],value:[]};
      action.payload.forEach(item=>{
        //为day参数，时间格式只需要时分秒。其他只要日期
        // debugger
        if(item.countDate.split(' ')[1]){
          avg.time.push(item.countDate.split(' ')[1]);
          avg.value.push(item.customerNumber);
        }else{
          avg.time.push(item.countDate);
          avg.value.push(item.customerNumber);
        }
        
      })
      return state.setIn(['customerAvg','xAxis',0,'data'],Immutable.List(avg.time))
                  .setIn(['customerAvg','series',0,'data'],Immutable.List(avg.value));
    case TYPE.statisticsDeepInit:
    // debugger
      let deep={time:[],deepNum:[],deepRatio:[]};
      action.payload.forEach(item=>{
        deep.time.push(item.countDate);
        deep.deepNum.push(item.deepNum);
        deep.deepRatio.push(item.deepRatio);
      })
      return state.setIn(['deep','xAxis',0,'data'],Immutable.List(deep.time))
                  .setIn(['deep','series',0,'data'],Immutable.List(deep.deepRatio))
                  .setIn(['deep','xAxis',0,'num'],Immutable.List(deep.deepNum));
    case TYPE.statisticsOutInit:
    // debugger
      let out={time:[],jumpNum:[],jumpRatio:[]};
      action.payload.forEach(item=>{
        out.time.push(item.countDate);
        out.jumpNum.push(item.jumpNum);
        out.jumpRatio.push(item.jumpRatio);
      })
      return state.setIn(['out','xAxis',0,'data'],Immutable.List(out.time))
                  .setIn(['out','series',0,'data'],Immutable.List(out.jumpRatio))
                  .setIn(['out','xAxis',0,'num'],Immutable.List(out.jumpNum));
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
    case TYPE.statisticsStayInit:
      let stay={name:[],value:[]};
      action.payload.forEach(item=>{
        stay.name.push(item.key);
        stay.value.push(item.value);
      })
      return state.setIn(['stay','xAxis',0,'data'],Immutable.List(stay.name.reverse()))
                  .setIn(['stay','series',0,'data'],Immutable.List(stay.value))


    default:return state;
  }
}