
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link ,Redirect,browserHistory} from 'react-router';
import General from './general';
// import Sellers from './sellers';
import FirstPage from './firstPage/firstPage';
import store from '../store/store';
import FirstPageChart from './firstPage/firstPageChart';
import FirstPageSellers from './firstPage/allSellers';

// import Allsellers from './allSellers';
// import SingleSellerRoute from './singleSellerRoute';
// import SingleSellerChartCurrent from './singleSellerChartCurrent';
// import SingleSellerChartHistory from './singleSellerChartHistory';
import CustomerIn from './sellers/singleSellerChartHistory/customerIn';
import CustomerFlow from './sellers/singleSellerChartHistory/customerFlow';
import Radar from './sellers/singleSellerChartHistory/radar';
import StayBar from './sellers/singleSellerChartHistory/stayBar';
import OldOrNew from './sellers/singleSellerChartHistory/oldOrNew';
import TimeSection from './sellers/singleSellerChartHistory/timeSection';
import DeepVisit from './sellers/singleSellerChartHistory/deepVisit';
import Cycle from './sellers/singleSellerChartHistory/cycle';
import Active from './sellers/singleSellerChartHistory/active';



import Statistics from './statistics/statistics';
import StatCustomerNum from './statistics/customerNum';
import StatOldOrNew from './statistics/oldOrNew';
import StatTimeSection from './statistics/timeSection';
import StatCycle from './statistics/cycle';
import StatActive from './statistics/active';

import Compare from './compare/compare';
import WholeCustomerNum from './compare/whole/customerNum';
import WholeActive from './compare/whole/active';
import WholeCycle from './compare/whole/cycle';
import WholeDeepVisit from './compare/whole/deepVisit';
import WholeOut from './compare/whole/out';
import WholeOldOrNew from './compare/whole/oldOrNew';
import SellersRoute from './compare/sellers/sellersRoute';
import SellersCustomerNum from './compare/sellers/customerNum';
import SellersCustomerIn from './compare/sellers/customerIn';
import SellersOldOrNew from './compare/sellers/oldOrNew';
import SellersOut from './compare/sellers/out';
import SellersDeep from './compare/sellers/deep';
import SellersStay from './compare/sellers/stay';
import SellersActive from './compare/sellers/active';
import SellersTimeSection from './compare/sellers/timeSection';
import SellersCycle from './compare/sellers/cycle';



import Calendar from './calendar';
import NotFindPage from './notFindPage';


class Test extends React.Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(this.props.params)
	}
	render(){
		return <div className="chartWrapper" style={{"paddingTop":"70px"}}> 404</div>
	}
}

const Sellers = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./sellers/sellers').default)
    },'sellers')
}

const Allsellers = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./sellers/allSellers').default)
    },'allsellers')
}
const SingleSellerRoute = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./sellers/singleSellerRoute').default)
    },'total')
}
const SingleSellerChartCurrent = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./sellers/singleSellerChartCurrent').default)
    },'now')
}
const SingleSellerChartHistory = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./sellers/singleSellerChartHistory').default)
    },'history')
}




ReactDOM.render(
	<Provider store={store} >
		<Router history={hashHistory}>
			<Redirect from="/" to="/firstPage/total"/>
			<Route path='/' component={General}>
			<Redirect from="firstPage" to="/firstPage/total"/>
				<Route path='firstPage' component={FirstPage}>
					<IndexRoute component={FirstPageChart} />
					<Route path="total" component={FirstPageChart}/>
					<Route path="allSellers" component={FirstPageSellers}/>
					{/*<Route path="firstFloor" component={FirstFloorChart}/>
					<Route path="secondFloor" component={SecondFloorChart}/>
					<Route path="thirdFloor" component={ThirdFloorChart}/>*/}
				</Route>
				<Redirect from="sellers" to="/sellers/allsellers"/>
				<Route path='sellers' getComponent={Sellers}>
					<IndexRoute getComponent={Allsellers} />
					<Route path="allsellers" getComponent={Allsellers}/>
					<Redirect from=":id" to=":id/now"/>
					<Route path=":id" getComponent={SingleSellerRoute}>
						<IndexRoute getComponent={SingleSellerChartCurrent} />
						<Route path='now' getComponent={SingleSellerChartCurrent}/>
						<Redirect from="history" to="history/customerFlow"/>
						<Route path='history' getComponent={SingleSellerChartHistory}>
							<IndexRoute component={CustomerIn} />
							<Route path="customerIn" component={CustomerIn}/>
							<Route path="customerFlow" component={CustomerFlow}/>
							<Route path="radar" component={Radar}/>
							<Route path="stayBar" component={StayBar}/>
							<Route path="OldOrNew" component={OldOrNew}/>
							<Route path="timeSection" component={TimeSection}/>
							<Route path="deepVisit" component={DeepVisit}/>
							<Route path="cycle" component={Cycle}/>
							<Route path="active" component={Active}/>
						</Route>
					</Route>
				</Route>
				<Redirect from="statistics" to="/statistics/total"/>
				<Route path='statistics' component={Statistics}>
						<IndexRoute component={StatCustomerNum} />
						<Route path='total' component={StatCustomerNum}/>
						<Route path='oldOrNew' component={StatOldOrNew}/>
						<Route path='timeSection' component={StatTimeSection}/>
						<Route path='cycle' component={StatCycle}/>
						<Route path='active' component={StatActive}/>
				</Route>
				<Redirect from="compare" to="/compare/wholeCustomerNum"/>
				<Route path='compare' component={Compare}>
						<Route path='wholeCustomerNum' component={WholeCustomerNum}/>
						<Route path='wholeOldOrNew' component={WholeOldOrNew}/>
						<Route path='wholeDeep' component={WholeDeepVisit}/>
						<Route path='wholeOut' component={WholeOut}/>
						<Route path='wholeCycle' component={WholeCycle}/>
						<Route path='wholeActive' component={WholeActive}/>
						{/*<Route path='seller*' component={SellersRoute}>
							<Route path='' component={}/>

						</Route>*/}
						<Route path='sellerCustomerNum' component={SellersRoute}>
							<IndexRoute component={SellersCustomerNum} />
						</Route>
						<Route path='sellerCustomerIn' component={SellersRoute}>
							<IndexRoute component={SellersCustomerIn} />
						</Route>
						<Route path='sellerOldOrNew' component={SellersRoute}>
							<IndexRoute component={SellersOldOrNew} />
						</Route>
						<Route path='sellerDeep' component={SellersRoute}>
							<IndexRoute component={SellersDeep} />
						</Route>
						<Route path='sellerOut' component={SellersRoute}>
							<IndexRoute component={SellersOut} />
						</Route>
						<Route path='sellerStay' component={SellersRoute}>
							<IndexRoute component={SellersStay} />
						</Route>
						<Route path='sellerActive' component={SellersRoute}>
							<IndexRoute component={SellersActive} />
						</Route>
						<Route path='sellerTimeSection' component={SellersRoute}>
							<IndexRoute component={SellersTimeSection} />
						</Route>
						<Route path='sellerCycle' component={SellersRoute}>
							<IndexRoute component={SellersCycle} />
						</Route>
				</Route>
				<Route path="*" component={NotFindPage} />
			</Route>
			</Router>
		</Provider>
	,document.getElementById('app')
	)

