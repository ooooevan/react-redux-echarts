
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link ,Redirect,browserHistory} from 'react-router';
import General from './general';
import Sellers from './sellers';
import FirstPage from './firstPage';
import store from '../store/store';
import FirstPageChart from './firstPageChart';
import FirstFloorChart from './firstFloorChart';
import SecondFloorChart from './secondFloorChart';
import ThirdFloorChart from './thirdFloorChart';
import Allsellers from './allSellers';
import SingleSellerRoute from './singleSellerRoute';
import SingleSellerChartCurrent from './singleSellerChartCurrent';
import SingleSellerChartHistory from './singleSellerChartHistory';
import Statistics from './statistics';




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


ReactDOM.render(
	<Provider store={store} >
		<Router history={hashHistory}>
			<Redirect from="/" to="/firstPage"/>
			<Route path='/' component={General}>
				<Route path='firstPage' component={FirstPage}>
					<IndexRoute path='total' component={FirstPageChart} />
					<Route path="total" component={FirstPageChart}/>
					<Route path="firstFloor" component={FirstFloorChart}/>
					<Route path="secondFloor" component={SecondFloorChart}/>
					<Route path="thirdFloor" component={ThirdFloorChart}/>
				</Route>
				<Route path='sellers' component={Sellers}>
					<IndexRoute path='total' component={Allsellers} />
					<Route path="total" component={Allsellers}/>
					<Route path=":id" component={SingleSellerRoute}>
						<IndexRoute path='now' component={SingleSellerChartCurrent} />
						<Route path='now' component={SingleSellerChartCurrent}/>
						<Route path='history' component={SingleSellerChartHistory}/>
					</Route>
				</Route>
				<Route path='statistics' component={Statistics}>
						<IndexRoute path='total' component={Test} />
						<Route path='total' component={Test}/>
						<Route path='firstFloor' component={Test}/>
						<Route path='secondFloor' component={Test}/>
						<Route path='thirdFloor' component={Test}/>
				</Route>
				<Route path="*" component={NotFindPage} />
			</Route>
			</Router>
		</Provider>
	,document.getElementById('app')
	)

/*
				<Route path='statistics' component={Statistics}>
					<IndexRoute path="total" component={Allsellers} />
					<Route path="total" component={Allsellers}/>
				</Route>
*/
