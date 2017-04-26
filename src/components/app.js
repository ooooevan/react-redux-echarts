
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
import FirstFloorChart from './firstPage/firstFloorChart';
import SecondFloorChart from './firstPage/secondFloorChart';
import ThirdFloorChart from './firstPage/thirdFloorChart';
// import Allsellers from './allSellers';
// import SingleSellerRoute from './singleSellerRoute';
// import SingleSellerChartCurrent from './singleSellerChartCurrent';
// import SingleSellerChartHistory from './singleSellerChartHistory';
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

import Compare from './Compare/compare';

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
					<Route path="allSellers" component={FirstFloorChart}/>
					<Route path="firstFloor" component={FirstFloorChart}/>
					<Route path="secondFloor" component={SecondFloorChart}/>
					<Route path="thirdFloor" component={ThirdFloorChart}/>
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
							<IndexRoute component={CustomerFlow} />
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
						<Route path='wholeCustomerNum' component={Test}/>
						<Route path='wholeOldOrNew' component={Test}/>
						<Route path='wholeDeep' component={Test}/>
						<Route path='wholeOut' component={Test}/>
						<Route path='wholeCycle' component={Test}/>
						<Route path='wholeStay' component={Test}/>
						<Route path='wholeActive' component={Test}/>
						<Route path='sellerCustomerNum' component={Test}/>
						<Route path='sellerOldOrNew' component={Test}/>
						<Route path='sellerDeep' component={Test}/>
						<Route path='sellerOut' component={Test}/>
						<Route path='sellerStay' component={Test}/>
						<Route path='sellerActive' component={Test}/>
						<Route path='sellerTimeSection' component={Test}/>
						<Route path='sellerCycle' component={Test}/>
				</Route>
				<Route path="*" component={NotFindPage} />
			</Route>
			</Router>
		</Provider>
	,document.getElementById('app')
	)

