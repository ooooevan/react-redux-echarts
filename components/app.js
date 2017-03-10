
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import General from './general';
import Line from './line';
import store from '../store/store';
class Test extends React.Component {
	constructor(props){
		super(props);
	}
 
	render(){
		return <div> test</div>

	}
}

// <Provider store={store} > 
// 	<Router history={hashHistory}>
// 			<Route path='/' component={General} >
// 				<Route path='line' component={Line} />

// 			</Route>
// 		</Router>
// 		</Provider>


ReactDOM.render(
	<Provider store={store} > 
		<Router history={hashHistory}>
				<Route path='/' component={General}>
					<IndexRoute component={Line} />
					<Route path='line' component={Line} />
					<Route path='test' component={Test} />
				</Route>
			</Router>
		</Provider>
	,document.getElementById('app')
	)


