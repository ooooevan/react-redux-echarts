
// import 'babel-polyfill';
import Immutable from 'immutable';
import dispatchType from '../constants/dispatchType';
const TYPE = dispatchType.sellers;

const initialState = Immutable.Map({});
export default function sellersReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.sellersListInit: {
      const list = [];
      action.payload.forEach((item) => {
        list.push(item.shopName);
      });
      return state.setIn(['sellers'], Immutable.List(list));
    }
    case TYPE.allSellersLineChartInit: {
      const obj = {seller: [], num: [], percent: [], lastPage: false};
      action.payload.forEach((item) => {
        if (item.isLastPage) {
          obj.lastPage = true;
          obj.seller.push(item.shopName);
          obj.num.push(item.incrementNum);
          obj.percent.push(item.momPercent);
        } else {
          obj.seller.push(item.shopName);
          obj.num.push(item.incrementNum);
          obj.percent.push(item.momPercent);
        }
      });
      return state.setIn(['lineAndBar', 'xAxis', 0, 'data'], Immutable.List(obj.seller))
                  .setIn(['lineAndBar', 'xAxis', 0, 'lastPage'], obj.lastPage)
                  .setIn(['lineAndBar', 'series', 0, 'data'], Immutable.List(obj.num))
                  .setIn(['lineAndBar', 'series', 1, 'data'], Immutable.List(obj.percent));
    }

    case TYPE.singleSellerCustomerNumInit: {
      const yesterday = {};
      const customer = {name: action.payload[0].shopName, time: [], num1: [], num2: [], percent: []};
      action.payload.reverse().forEach((item) => {
        if (item.yesterdayMaxNumber > 0) {
          yesterday.num = item.yesterdayMaxNumber;
          yesterday.time = item.maxNumberTime.split(' ')[1];
        } else {
          customer.time.push(item.countDate.split(' ')[1]);
          customer.num1.push(item.customerNumber);
          customer.num2.push(item.doorCustomerNumber);
          customer.percent.push(item.customerRatio);
        }
      });
      return state.setIn(['customerNum', 'xAxis', 0, 'data'], Immutable.List(customer.time))
                  .setIn(['customerNum', 'series', 0, 'data'], Immutable.List(customer.num1))
                  .setIn(['customerNum', 'series', 1, 'data'], Immutable.List(customer.num2))
                  .setIn(['customerNum', 'series', 2, 'data'], Immutable.List(customer.percent))
                  .setIn(['customerNum', 'name'], customer.name)
                  .setIn(['customerNum', 'xAxis', 0, 'yesterday'], Immutable.Map(yesterday));
    }


    case TYPE.singleSellerCustomerNumFetch: {
      return state.updateIn(['customerNum', 'xAxis', 0, 'data'], list => list.unshift(action.payload.countDate.split(' ')[1]))
                  .updateIn(['customerNum', 'xAxis', 0, 'data'], list => list.pop())
                  .updateIn(['customerNum', 'series', 0, 'data'], list => list.unshift(action.payload.customerNumber))
                  .updateIn(['customerNum', 'series', 0, 'data'], list => list.pop())
                  .updateIn(['customerNum', 'series', 1, 'data'], list => list.unshift(action.payload.doorCustomerNumber))
                  .updateIn(['customerNum', 'series', 1, 'data'], list => list.pop())
                  .updateIn(['customerNum', 'series', 2, 'data'], list => list.unshift(action.payload.customerRatio))
                  .updateIn(['customerNum', 'series', 2, 'data'], list => list.pop());
    }

    case TYPE.singleSellerCustomerFlowInit: {
      const CustomerFlow = {name: action.payload[0].shopName, time: [], num: [], percent: []};
      action.payload.forEach((item) => {
        if (item.countDate.split(' ')[1]) {
          CustomerFlow.time.push(item.countDate.split(' ')[1]);
          CustomerFlow.num.push(item.customerNumber);
          CustomerFlow.percent.push(item.customerRatio);
        } else {
          CustomerFlow.time.push(item.countDate);
          CustomerFlow.num.push(item.customerNumber);
          CustomerFlow.percent.push(item.customerRatio);
        }
      });
      return state.setIn(['customerFlow', 'xAxis', 'data'], Immutable.List(CustomerFlow.time))
                  .setIn(['customerFlow', 'name'], CustomerFlow.name)
                  .setIn(['customerFlow', 'series', 0, 'data'], Immutable.List(CustomerFlow.num))
                  .setIn(['customerFlow', 'series', 1, 'data'], Immutable.List(CustomerFlow.percent));
    }
    case TYPE.singleSellerCustomerAvgInit: {
      const CustomerAvg = {name: action.payload[0].shopName, time: [], num: [], percent: []};
      action.payload.forEach((item) => {
        if (item.countDate.split(' ')[1]) {
          CustomerAvg.time.push(item.countDate.split(' ')[1]);
          CustomerAvg.num.push(item.customerNumber);
          CustomerAvg.percent.push(item.customerRatio);
        } else {
          CustomerAvg.time.push(item.countDate);
          CustomerAvg.num.push(item.customerNumber);
          CustomerAvg.percent.push(item.customerRatio);
        }
      });
      return state.setIn(['customerAvg', 'xAxis', 'data'], Immutable.List(CustomerAvg.time))
                  .setIn(['customerAvg', 'name'], CustomerAvg.name)
                  .setIn(['customerAvg', 'series', 0, 'data'], Immutable.List(CustomerAvg.num))
                  .setIn(['customerAvg', 'series', 1, 'data'], Immutable.List(CustomerAvg.percent));
    }

    case TYPE.singleSellerCustomerInInit: {
      const customerIn = {name: '', time: [], num: [], percent1: [], percent2: []};
      customerIn.name = action.payload.name;
      action.payload.forEach((item) => {
        if (item.countDate.split(' ')[1]) {
          customerIn.time.push(item.countDate.split(' ')[1]);
          customerIn.num.push(item.incrementNum);
          customerIn.percent1.push(item.incrementRatio);
        } else {
          customerIn.time.push(item.countDate);
          customerIn.num.push(item.incrementNum);
          customerIn.percent1.push(item.incrementRatio);
        }
      });
      return state.setIn(['customerIn', 'xAxis', 'data'], Immutable.List(customerIn.time))
                  .setIn(['customerIn', 'name'], customerIn.name)
                  .setIn(['customerIn', 'series', 0, 'data'], Immutable.List(customerIn.num))
                  .setIn(['customerIn', 'series', 1, 'data'], Immutable.List(customerIn.percent1));
                  // .setIn(['customerIn','series',2,'data'],Immutable.List(customerIn.percent2));
    }

    case TYPE.singleSellerRadar: {
      const radar = {name: [], value: []};
      action.payload.forEach((item) => {
        radar.name.push(item.indicators);
        radar.value.push(item.score);
      });
      return state.setIn(['radar', 'series', 'data', 0], Immutable.List(radar.value))
                  .setIn(['radar', 'radar', 'indicator', 0, 'name'], radar.name[0])
                  .setIn(['radar', 'radar', 'indicator', 1, 'name'], radar.name[1])
                  .setIn(['radar', 'radar', 'indicator', 2, 'name'], radar.name[2])
                  .setIn(['radar', 'radar', 'indicator', 3, 'name'], radar.name[3])
                  .setIn(['radar', 'radar', 'indicator', 4, 'name'], radar.name[4]);
    }
    case TYPE.singleSellerStayBar: {
      const staybar = {name: [], value: []};
      action.payload.forEach((item) => {
        staybar.name.push(item.key);
        staybar.value.push(item.value);
      });
      return state.setIn(['stayBar', 'xAxis', 0, 'data'], Immutable.List(staybar.name))
                  .setIn(['stayBar', 'series', 0, 'data'], Immutable.List(staybar.value));
    }
    case TYPE.singleSellerOldOrNew: {
      const oldnew = {time: [], old: [], new: []};
      action.payload.forEach((item) => {
        oldnew.time.push(item.countDate);
        oldnew.old.push(item.oldCustomer);
        oldnew.new.push(item.newCustomer);
      });
      return state.setIn(['oldOrNew', 'xAxis', 0, 'data'], Immutable.List(oldnew.time))
                  .setIn(['oldOrNew', 'series', 0, 'data'], Immutable.List(oldnew.new))
                  .setIn(['oldOrNew', 'series', 1, 'data'], Immutable.List(oldnew.old));
    }
    case TYPE.singleSellerTimeSection: {
      const timeSection = {name: [], value: []};
      action.payload.forEach((item) => {
        timeSection.name.push(item.key);
        timeSection.value.push(item.value);
      });
      return state.setIn(['timeSection', 'xAxis', 0, 'data'], Immutable.List(timeSection.name))
                  .setIn(['timeSection', 'series', 0, 'data'], Immutable.List(timeSection.value));
    }
    case TYPE.singleSellerDeepVisit: {
      const deep = {time: [], deep: [], out: [], deepNum: [], outNum: []};
      action.payload.forEach((item) => {
        deep.time.push(item.countDate);
        deep.deep.push(item.deepRatio);
        deep.deepNum.push(item.deepNum);
        deep.out.push(item.jumpRatio);
        deep.outNum.push(item.jumpNum);
      });
      return state.setIn(['deepVisit', 'xAxis', 'data'], Immutable.List(deep.time))
                  .setIn(['deepVisit', 'series', 0, 'data'], Immutable.List(deep.deep))
                  .setIn(['deepVisit', 'series', 1, 'data'], Immutable.List(deep.out))
                  .setIn(['deepVisit', 'xAxis', 'deepNum'], Immutable.List(deep.deepNum))
                    .setIn(['deepVisit', 'xAxis', 'outNum'], Immutable.List(deep.outNum));
    }
    case TYPE.singleSellerCycleInit: {
      const cycle = {name: [], value: []};
      action.payload.forEach((item) => {
        cycle.name.push(item.key);
        cycle.value.push(item.value);
      });
      return state.setIn(['cycle', 'xAxis', 0, 'data'], Immutable.List(cycle.name))
                  .setIn(['cycle', 'series', 0, 'data'], Immutable.List(cycle.value));
    }
    case TYPE.singleSellerActiveInit: {
      const active = {name: [], value: []};
      action.payload.forEach((item) => {
        active.name.push(item.key);
        active.value.push(item.value);
      });
      return state.setIn(['active', 'xAxis', 0, 'data'], Immutable.List(active.name.reverse()))
                  .setIn(['active', 'series', 0, 'data'], Immutable.List(active.value));
    }
    default:
      return state;
  }
}
