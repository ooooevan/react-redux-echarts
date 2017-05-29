// import 'babel-polyfill';
import dispatchType from '../constants/dispatchType';
const TYPE = dispatchType.compare;
import Immutable from 'immutable';
const initialState = Immutable.Map({});

export default function compareReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.numInit: {
      const obj = {time: [], num1: [], num2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1.push(item.customerNumber);
      });
      value[1].forEach((item, index) => {
        obj.time[index] = `${obj.time[index]}/${item.countDate}`;
        obj.num2.push(item.customerNumber);
      });
      return state.setIn(['customerNum', 'xAxis', 0, 'data'], obj.time)
                        .setIn(['customerNum', 'series', 0, 'data'], obj.num1)
                        .setIn(['customerNum', 'series', 1, 'data'], obj.num2);
    }
    case TYPE.numAvgInit: {
      const obj = {time: [], num1: [], num2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1.push(item.customerNumber);
      });
      value[1].forEach((item, index) => {
        obj.time[index] = `${obj.time[index]}/${item.countDate}`;
        obj.num2.push(item.customerNumber);
      });
      return state.setIn(['customerAvg', 'xAxis', 0, 'data'], obj.time)
                        .setIn(['customerAvg', 'series', 0, 'data'], obj.num1)
                        .setIn(['customerAvg', 'series', 1, 'data'], obj.num2);
    }
    case TYPE.numInInit: {
      const obj = {time: [], num1: [], num2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1.push(item.incrementNum);
      });
      value[1].forEach((item, index) => {
        obj.time[index] = `${obj.time[index]}/${item.countDate}`;
        obj.num2.push(item.incrementNum);
      });
      return state.setIn(['customerIn', 'xAxis', 0, 'data'], obj.time)
                        .setIn(['customerIn', 'series', 0, 'data'], obj.num1)
                        .setIn(['customerIn', 'series', 1, 'data'], obj.num2);
    }
    case TYPE.oldOrNewInit: {
      const obj = {time: [], num1Old: [], num1New: [], percent1: [], num2Old: [], num2New: [], percent2: []};
      const value = [];
      let total = 0;
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1Old.push(item.oldCustomer);
        obj.num1New.push(item.newCustomer);
        total = parseInt(item.oldCustomer) + parseInt(item.newCustomer);
        if (!total) {
          obj.percent1.push(0);
        } else {
          obj.percent1.push(parseInt(item.newCustomer / total * 100));
        }
      });
      value[1].forEach((item, index) => {
        obj.time[index] = `${obj.time[index]}/${item.countDate}`;
        obj.num2Old.push(item.oldCustomer);
        obj.num2New.push(item.newCustomer);
        total = parseInt(item.oldCustomer) + parseInt(item.newCustomer);
        if (!total) {
          obj.percent2.push(0);
        } else {
          obj.percent2.push(parseInt(item.newCustomer / total * 100));
        }
      });
      return state.setIn(['oldOrNew', 'xAxis', 0, 'data'], obj.time)
                        .setIn(['oldOrNew', 'series', 0, 'data'], obj.percent1)
                        .setIn(['oldOrNew', 'series', 1, 'data'], obj.percent2)
                        .setIn(['oldOrNew', 'xAxis', 0, 'num1Old'], obj.num1Old)
                        .setIn(['oldOrNew', 'xAxis', 0, 'num1New'], obj.num1New)
                        .setIn(['oldOrNew', 'xAxis', 0, 'num2Old'], obj.num2Old)
                        .setIn(['oldOrNew', 'xAxis', 0, 'num2New'], obj.num2New);
    }
    case TYPE.deepVisitInit: {
      const obj = {time: [], deep1Num: [], deep2Num: [], deepRatio1: [], deepRatio2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.deep1Num.push(item.deepNum);
        obj.deepRatio1.push(item.deepRatio);
      });
      value[1].forEach((item, index) => {
        obj.time[index] = `${obj.time[index]}/${item.countDate}`;
        obj.deep2Num.push(item.deepNum);
        obj.deepRatio2.push(item.deepRatio);
      });
      return state.setIn(['deepVisit', 'xAxis', 0, 'data'], obj.time)
                        .setIn(['deepVisit', 'series', 0, 'data'], obj.deepRatio1)
                        .setIn(['deepVisit', 'series', 1, 'data'], obj.deepRatio2)
                        .setIn(['deepVisit', 'xAxis', 0, 'deep1Num'], obj.deep1Num)
                        .setIn(['deepVisit', 'xAxis', 0, 'deep2Num'], obj.deep2Num);
    }
    case TYPE.outInit: {
      const obj = {time: [], out1Num: [], out2Num: [], outRatio1: [], outRatio2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.out1Num.push(item.jumpNum);
        obj.outRatio1.push(item.jumpRatio);
      });
      value[1].forEach((item, index) => {
        obj.time[index] = `${obj.time[index]}/${item.countDate}`;
        obj.out2Num.push(item.jumpNum);
        obj.outRatio2.push(item.jumpRatio);
      });
      return state.setIn(['out', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['out', 'series', 0, 'data'], obj.outRatio1)
                  .setIn(['out', 'series', 1, 'data'], obj.outRatio2)
                  .setIn(['out', 'xAxis', 0, 'out1Num'], obj.out1Num)
                  .setIn(['out', 'xAxis', 0, 'out2Num'], obj.out2Num);
    }
    case TYPE.activeInit: {
      const obj = {key: [], num1: [], num2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.key.push(item.key);
        obj.num1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.num2.push(item.value);
      });
      return state.setIn(['active', 'xAxis', 0, 'data'], obj.key)
                        .setIn(['active', 'series', 0, 'data'], obj.num1)
                        .setIn(['active', 'series', 1, 'data'], obj.num2);
    }
    case TYPE.cycleInit: {
      const obj = {key: [], value1: [], value2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.key.push(item.key);
        obj.value1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.value2.push(item.value);
      });
      return state.setIn(['cycle', 'xAxis', 0, 'data'], obj.key)
                  .setIn(['cycle', 'series', 0, 'data'], obj.value1)
                  .setIn(['cycle', 'series', 1, 'data'], obj.value2);
    }
    case TYPE.stayInit: {
      const obj = {key: [], value1: [], value2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.key.push(item.key);
        obj.value1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.value2.push(item.value);
      });
      return state.setIn(['stay', 'xAxis', 0, 'data'], obj.key)
                  .setIn(['stay', 'series', 0, 'data'], obj.value1)
                  .setIn(['stay', 'series', 1, 'data'], obj.value2);
    }
    case TYPE.sellersNumInit: {
      const obj = {time: [], num1: [], percent1: [], num2: [], percent2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1.push(item.customerNumber);
        obj.percent1.push(item.customerRatio);
      });
      value[1].forEach((item) => {
        obj.num2.push(item.customerNumber);
        obj.percent2.push(item.customerRatio);
      });

      return state.setIn(['sellersNum', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersNum', 'series', 0, 'data'], obj.num1)
                  .setIn(['sellersNum', 'series', 1, 'data'], obj.num2)
                  .setIn(['sellersNum', 'xAxis', 0, 'percent1'], obj.percent1)
                  .setIn(['sellersNum', 'xAxis', 0, 'percent2'], obj.percent2);
    }
    case TYPE.sellersAvgInit: {
      const obj = {time: [], num1: [], percent1: [], num2: [], percent2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1.push(item.customerNumber);
        obj.percent1.push(item.customerRatio);
      });
      value[1].forEach((item) => {
        obj.num2.push(item.customerNumber);
        obj.percent2.push(item.customerRatio);
      });
      return state.setIn(['sellersAvg', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersAvg', 'series', 0, 'data'], obj.num1)
                  .setIn(['sellersAvg', 'series', 1, 'data'], obj.num2)
                  .setIn(['sellersAvg', 'xAxis', 0, 'percent1'], obj.percent1)
                  .setIn(['sellersAvg', 'xAxis', 0, 'percent2'], obj.percent2);
    }
    case TYPE.sellersListInit: {
      const list = [];
      action.payload.forEach((item) => {
        list.push(item.shopName);
      });
    	return state.setIn(['sellersList'], Immutable.List(list));
    }
    case TYPE.sellersInInit: {
      const obj = {time: [], num1: [], num2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.num1.push(item.incrementNum);
      });
      value[1].forEach((item) => {
        obj.num2.push(item.incrementNum);
      });
      return state.setIn(['sellersIn', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersIn', 'series', 0, 'data'], obj.num1)
                  .setIn(['sellersIn', 'series', 1, 'data'], obj.num2);
    }
    case TYPE.sellersOldOrNewInit: {
      const obj = {time: [], oldNum1: [], newNum1: [], newRatio1: [], oldNum2: [], newNum2: [], newRatio2: []};
      const value = [];
      let total = 0;
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.newNum1.push(item.newCustomer);
        obj.oldNum1.push(item.oldCustomer);
        total = parseInt(item.newCustomer) + parseInt(item.oldCustomer);
        if (!total) {
          obj.newRatio1.push(0);
        } else {
          obj.newRatio1.push(parseInt(item.newCustomer / total * 100));
        }
      });
      value[1].forEach((item) => {
        obj.newNum2.push(item.newCustomer);
        obj.oldNum2.push(item.oldCustomer);
        total = parseInt(item.newCustomer) + parseInt(item.oldCustomer);
        if (!total) {
          obj.newRatio2.push(0);
        } else {
          obj.newRatio2.push(parseInt(item.newCustomer / total * 100));
        }
      });
      return state.setIn(['sellersOldOrNew', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersOldOrNew', 'series', 0, 'data'], obj.newRatio1)
                  .setIn(['sellersOldOrNew', 'series', 1, 'data'], obj.newRatio2)
                  .setIn(['sellersOldOrNew', 'xAxis', 0, 'newNum1'], obj.newNum1)
                  .setIn(['sellersOldOrNew', 'xAxis', 0, 'newNum2'], obj.newNum2)
                  .setIn(['sellersOldOrNew', 'xAxis', 0, 'oldNum1'], obj.oldNum1)
                  .setIn(['sellersOldOrNew', 'xAxis', 0, 'oldNum2'], obj.oldNum2);
    }
    case TYPE.sellersOutInit: {
      const obj = {time: [], jumpNum1: [], jumpNum2: [], jumpRatio1: [], jumpRatio2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.jumpNum1.push(item.jumpNum);
        obj.jumpRatio1.push(item.jumpRatio);
      });
      value[1].forEach((item) => {
        obj.jumpNum2.push(item.jumpNum);
        obj.jumpRatio2.push(item.jumpRatio);
      });
      return state.setIn(['sellersOut', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersOut', 'series', 0, 'data'], obj.jumpRatio1)
                  .setIn(['sellersOut', 'series', 1, 'data'], obj.jumpRatio2)
                  .setIn(['sellersOut', 'xAxis', 0, 'jumpNum1'], obj.jumpNum1)
                  .setIn(['sellersOut', 'xAxis', 0, 'jumpNum2'], obj.jumpNum2);
    }
    case TYPE.sellersDeepInit: {
      const obj = {time: []/* ,jumpNum:[],jumpRatio:[]*/, deepNum1: [], deepNum2: [], deepRatio1: [], deepRatio2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.countDate);
        obj.deepNum1.push(item.deepNum);
        obj.deepRatio1.push(item.deepRatio);
      });
      value[1].forEach((item) => {
        obj.deepNum2.push(item.deepNum);
        obj.deepRatio2.push(item.deepRatio);
      });
      return state.setIn(['sellersDeep', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersDeep', 'series', 0, 'data'], obj.deepRatio1)
                  .setIn(['sellersDeep', 'series', 1, 'data'], obj.deepRatio2)
                  .setIn(['sellersDeep', 'xAxis', 0, 'deepNum1'], obj.deepNum1)
                  .setIn(['sellersDeep', 'xAxis', 0, 'deepNum2'], obj.deepNum2);
    }
    case TYPE.sellersStayInit: {
      const obj = {key: [], value1: [], value2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.key.push(item.key);
        obj.value1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.value2.push(item.value);
      });
      return state.setIn(['sellersStay', 'xAxis', 0, 'data'], obj.key)
                  .setIn(['sellersStay', 'series', 0, 'data'], obj.value1)
                  .setIn(['sellersStay', 'series', 1, 'data'], obj.value2);
    }
    case TYPE.sellersActiveInit: {
      const obj = {key: [], value1: [], value2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.key.push(item.key);
        obj.value1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.value2.push(item.value);
      });
      return state.setIn(['sellersActive', 'xAxis', 0, 'data'], obj.key)
                  .setIn(['sellersActive', 'series', 0, 'data'], obj.value1)
                  .setIn(['sellersActive', 'series', 1, 'data'], obj.value2);
    }
    case TYPE.sellersTimeSectionInit: {
      const obj = {time: [], num1: [], num2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.time.push(item.key);
        obj.num1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.num2.push(item.value);
      });
      return state.setIn(['sellersTimeSection', 'xAxis', 0, 'data'], obj.time)
                  .setIn(['sellersTimeSection', 'series', 0, 'data'], obj.num1)
                  .setIn(['sellersTimeSection', 'series', 1, 'data'], obj.num2);
    }
    case TYPE.sellersCycleInit: {
      const obj = {key: [], value1: [], value2: []};
      const value = [];
      for (const i in action.payload) {
        value.push(action.payload[i]);
      }
      value[0].forEach((item) => {
        obj.key.push(item.key);
        obj.value1.push(item.value);
      });
      value[1].forEach((item) => {
        obj.value2.push(item.value);
      });
      return state.setIn(['sellersCycle', 'xAxis', 0, 'data'], obj.key)
                  .setIn(['sellersCycle', 'series', 0, 'data'], obj.value1)
                  .setIn(['sellersCycle', 'series', 1, 'data'], obj.value2);
    }
    default:return state;
  }
}
