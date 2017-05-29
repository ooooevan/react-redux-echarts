
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link, Redirect, browserHistory, IndexRedirect} from 'react-router';
import General from './general';
// import Sellers from './sellers';
import FirstPage from './firstPage/firstPage';
import store from '../store/store';
import FirstPageChart from './firstPage/firstPageChart';
import FirstPageSellers from './firstPage/allSellers';


import Calendar from './calendar';
import NotFindPage from './notFindPage';


class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentWillMount(){
  //  console.log(this.props.params)
  // }
  render() {
    return <div className="chartWrapper" style={{paddingTop: '70px'}}> 404</div>;
  }
}
/* ---------singleSeller开始*/
const Sellers = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/sellers').default);
  }, 'sellers');
};

const Allsellers = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/allSellers').default);
  }, 'allsellers');
};
const SingleSellerRoute = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerRoute').default);
  }, 'total');
};
const SingleSellerChartCurrent = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartCurrent').default);
  }, 'now');
};
const SingleSellerChartHistory = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory').default);
  }, 'history');
};
const CustomerIn = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/customerIn').default);
  }, 'customerIn');
};
const CustomerFlow = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/customerFlow').default);
  }, 'customerFlow');
};
const CustomerAvg = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/customerAvg').default);
  }, 'customerAvg');
};
const Radar = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/radar').default);
  }, 'radar');
};
const StayBar = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/stayBar').default);
  }, 'stayBar');
};
const OldOrNew = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/oldOrNew').default);
  }, 'OldOrNew');
};
const TimeSection = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/timeSection').default);
  }, 'timeSection');
};
const DeepVisit = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/deepVisit').default);
  }, 'deepVisit');
};
const Cycle = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/cycle').default);
  }, 'cycle');
};
const Active = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./sellers/singleSellerChartHistory/active').default);
  }, 'active');
};
// import Allsellers from './allSellers';
// import SingleSellerRoute from './singleSellerRoute';
// import SingleSellerChartCurrent from './singleSellerChartCurrent';
// import SingleSellerChartHistory from './singleSellerChartHistory';
// import CustomerIn from './sellers/singleSellerChartHistory/customerIn';
// import CustomerFlow from './sellers/singleSellerChartHistory/customerFlow';
// import Radar from './sellers/singleSellerChartHistory/radar';
// import StayBar from './sellers/singleSellerChartHistory/stayBar';
// import OldOrNew from './sellers/singleSellerChartHistory/oldOrNew';
// import TimeSection from './sellers/singleSellerChartHistory/timeSection';
// import DeepVisit from './sellers/singleSellerChartHistory/deepVisit';
// import Cycle from './sellers/singleSellerChartHistory/cycle';
// import Active from './sellers/singleSellerChartHistory/active';

/* ---------singleSeller结束*/

/* ---------statistics开始*/
const Statistics = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/statistics').default);
  }, 'statistics');
};
const StatCustomerNum = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/customerNum').default);
  }, 'total');
};
const StatCustomerPeak = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/customerPeak').default);
  }, 'peak');
};
const StatCustomerAvg = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/customerAvg').default);
  }, 'avg');
};
const StatOldOrNew = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/oldOrNew').default);
  }, 'oldOrNew');
};
const StatDeep = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/deep').default);
  }, 'deep');
};
const StatOut = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/out').default);
  }, 'out');
};
const StatStay = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/stay').default);
  }, 'stay');
};
const StatTimeSection = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/timeSection').default);
  }, 'timeSection');
};
const StatCycle = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/cycle').default);
  }, 'cycle');
};
const StatActive = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./statistics/active').default);
  }, 'active');
};
// import Statistics from './statistics/statistics';
// import StatCustomerNum from './statistics/customerNum';
// import StatCustomerPeak from './statistics/customerPeak';
// import StatOldOrNew from './statistics/oldOrNew';
// import StatTimeSection from './statistics/timeSection';
// import StatCycle from './statistics/cycle';
// import StatActive from './statistics/active';
/* ---------statistics结束*/

/* ---------compare开始*/
const Compare = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/compare').default);
  }, 'compare');
};
const WholeCustomerAvg = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/customerAvg').default);
  }, 'wholeCustomerAvg');
};
const WholeCustomerNum = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/customerNum').default);
  }, 'wholeCustomerNum');
};
const WholeCustomerIn = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/customerIn').default);
  }, 'wholeCustomerIn');
};
const WholeActive = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/active').default);
  }, 'wholeActive');
};
const WholeCycle = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/cycle').default);
  }, 'wholeCycle');
};
const WholeOldOrNew = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/oldOrNew').default);
  }, 'wholeOldOrNew');
};
const WholeStay = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/stay').default);
  }, 'wholeStay');
};
const WholeDeepVisit = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/deepVisit').default);
  }, 'wholeDeep');
};
const WholeOut = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/whole/out').default);
  }, 'wholeOut');
};

const SellersRoute = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./compare/sellers/sellersRoute').default);
  }, 'sellerCustomerNum');
};
// const SellersCustomerIn = (location, callback) => {
//     require.ensure([], require => {
//         callback(null, require('./compare/sellers/customerNum').default)
//     },'sellerCustomerIn')
// }
// const SellersCustomerNum = (location, callback) => {
//     require.ensure([], require => {
//         callback(null, require('./compare/sellers/customerIn').default)
//     },'sellerOldOrNew')
// }
// const SellersCustomerNum = (location, callback) => {
//     require.ensure([], require => {
//         callback(null, require('./compare/sellers/customerIn').default)
//     },'sellerDeep')
// }
// import Compare from './compare/compare';
// import WholeCustomerNum from './compare/whole/customerNum';
// import WholeCustomerIn from './compare/whole/customerIn';
// import WholeActive from './compare/whole/active';
// import WholeCycle from './compare/whole/cycle';
/* import WholeDeepVisit from './compare/whole/deepVisit';
   import WholeOut from './compare/whole/out';*/
// import WholeOldOrNew from './compare/whole/oldOrNew';
// import SellersRoute from './compare/sellers/sellersRoute';
import SellersCustomerAvg from './compare/sellers/customerAvg';
import SellersCustomerNum from './compare/sellers/customerNum';
import SellersCustomerIn from './compare/sellers/customerIn';
import SellersOldOrNew from './compare/sellers/oldOrNew';
import SellersOut from './compare/sellers/out';
import SellersDeep from './compare/sellers/deep';
import SellersStay from './compare/sellers/stay';
import SellersActive from './compare/sellers/active';
import SellersTimeSection from './compare/sellers/timeSection';
import SellersCycle from './compare/sellers/cycle';

/* ---------compare结束*/


ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory}>

      <Route path="/" component={General}>
        <IndexRedirect to="/firstPage/total" />
        <Redirect from="firstPage" to="/firstPage/total" />
        <Route path="firstPage" component={FirstPage}>
          <IndexRoute component={FirstPageChart} />
          <Route path="total" component={FirstPageChart} />
          <Route path="allSellers" component={FirstPageSellers} />
          {/* <Route path="firstFloor" component={FirstFloorChart}/>
          <Route path="secondFloor" component={SecondFloorChart}/>
          <Route path="thirdFloor" component={ThirdFloorChart}/>*/}
        </Route>
        <Redirect from="sellers" to="/sellers/allsellers" />
        <Route path="sellers" getComponent={Sellers}>
          <IndexRoute getComponent={Allsellers} />
          <Route path="allsellers" getComponent={Allsellers} />
          <Redirect from=":id" to=":id/now" />
          <Route path=":id" getComponent={SingleSellerRoute}>
            <IndexRoute getComponent={SingleSellerChartCurrent} />
            <Route path="now" getComponent={SingleSellerChartCurrent} />
            <Redirect from="history" to="history/customerAvg" />
            <Route path="history" getComponent={SingleSellerChartHistory}>
              <IndexRoute getComponent={CustomerAvg} />
              <Route path="customerIn" getComponent={CustomerIn} />
              <Route path="customerAvg" getComponent={CustomerAvg} />
              <Route path="customerFlow" getComponent={CustomerFlow} />
              <Route path="radar" getComponent={Radar} />
              <Route path="stayBar" getComponent={StayBar} />
              <Route path="OldOrNew" getComponent={OldOrNew} />
              <Route path="timeSection" getComponent={TimeSection} />
              <Route path="deepVisit" getComponent={DeepVisit} />
              <Route path="cycle" getComponent={Cycle} />
              <Route path="active" getComponent={Active} />
            </Route>
          </Route>
        </Route>
        <Redirect from="statistics" to="/statistics/total" />
        <Route path="statistics" getComponent={Statistics}>
          <IndexRoute getComponent={StatCustomerNum} />
          <Route path="total" getComponent={StatCustomerNum} />
          <Route path="peak" getComponent={StatCustomerPeak} />
          <Route path="avg" getComponent={StatCustomerAvg} />
          <Route path="oldOrNew" getComponent={StatOldOrNew} />
          <Route path="deep" getComponent={StatDeep} />
          <Route path="out" getComponent={StatOut} />
          <Route path="stay" getComponent={StatStay} />
          <Route path="timeSection" getComponent={StatTimeSection} />
          <Route path="cycle" getComponent={StatCycle} />
          <Route path="active" getComponent={StatActive} />
        </Route>
        <Redirect from="compare" to="/compare/wholeCustomerAvg" />
        <Route path="compare" getComponent={Compare}>
          <Route path="wholeCustomerAvg" getComponent={WholeCustomerAvg} />
          <Route path="wholeCustomerNum" getComponent={WholeCustomerNum} />
          <Route path="wholeCustomerIn" getComponent={WholeCustomerIn} />
          <Route path="wholeOldOrNew" getComponent={WholeOldOrNew} />
          <Route path="wholeStay" getComponent={WholeStay} />
          <Route path="wholeDeep" getComponent={WholeDeepVisit} />
          <Route path="wholeOut" getComponent={WholeOut} />
          <Route path="wholeCycle" getComponent={WholeCycle} />
          <Route path="wholeActive" getComponent={WholeActive} />
          {/* <Route path='seller*' getComponent={SellersRoute}>
              <Route path='' getComponent={}/>

            </Route>*/}
          <Route path="sellerCustomerAvg" getComponent={SellersRoute}>
            <IndexRoute component={SellersCustomerAvg} />
          </Route>
          <Route path="sellerCustomerNum" getComponent={SellersRoute}>
            <IndexRoute component={SellersCustomerNum} />
          </Route>
          <Route path="sellerCustomerIn" getComponent={SellersRoute}>
            <IndexRoute component={SellersCustomerIn} />
          </Route>
          <Route path="sellerOldOrNew" getComponent={SellersRoute}>
            <IndexRoute component={SellersOldOrNew} />
          </Route>
          <Route path="sellerDeep" getComponent={SellersRoute}>
            <IndexRoute component={SellersDeep} />
          </Route>
          <Route path="sellerOut" getComponent={SellersRoute}>
            <IndexRoute component={SellersOut} />
          </Route>
          <Route path="sellerStay" getComponent={SellersRoute}>
            <IndexRoute component={SellersStay} />
          </Route>
          <Route path="sellerActive" getComponent={SellersRoute}>
            <IndexRoute component={SellersActive} />
          </Route>
          {/* <Route path='sellerTimeSection' getComponent={SellersRoute}>
              <IndexRoute component={SellersTimeSection} />
            </Route>*/}
          <Route path="sellerCycle" getComponent={SellersRoute}>
            <IndexRoute component={SellersCycle} />
          </Route>
        </Route>
        <Route path="*" component={NotFindPage} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app')
  );

