import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
// import Line from './line';
import '../../lib/css/font-awesome.min.css';
import '../styles/firstPage.scss';
// import DevTool from './devTool';


class Nav extends React.Component {
	constructor(props){
		super(props);
		//this.changeActive=this.changeActive.bind(this);
		//this.state = {
		//	//active:'general'         //导航栏 general、seller、statistics
		//}
	}
	// getInitialState(){
	// 	return {
	// 		active:'general'           //导航栏 general、seller、statistics

	// 	}
	// }
	componentDidMount(){
	}
	//changeActive(e){
	//	if(e.target.className == 'active'){
	//		return;
	//	}
	//	switch(e.target.innerText){
	//		case '概况':
	//			this.setState({active:'general'})
	//			break;
	//		case '商家':
	//			this.setState({active:'seller'})
	//			break;
	//		default:
	//			this.setState({active:'statistics'})
	//			break;
    //
	//	}
	//}


	render(){
		return <nav className='nav'>
		<div className='brand'><a href='#'><i className="fa fa-reddit-alien fa-x" aria-hidden="true"></i>Old Pie</a></div>
		<ul className='navMenu'>
			<li><Link to='/firstPage' activeClassName="active" draggable="false">概况</Link></li>
			<li><Link to='/sellers'activeClassName="active" draggable="false">商家</Link></li>
			<li><Link to='/statistics'activeClassName="active" draggable="false">统计分析</Link></li>
		</ul>
		</nav>
	}

}


class General extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div style={{height:'100%',position:'relative'}}>
		<Nav />

		{this.props.children}
		
		</div>
	}
}
		// <DevTool/>





export default General


































