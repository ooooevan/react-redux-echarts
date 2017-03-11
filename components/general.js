import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
// import Line from './line';
require('../lib/css/font-awesome.min.css');
require('../styles/nav.scss');
import DevTool from './devTool';


class Nav extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return <nav className='nav'>
		<div className='brand'><a href='#'><i className="fa fa-reddit-alien fa-x" aria-hidden="true"></i>Old Pie</a></div>
		<ul className='navMenu'>
			<li><Link to='/' className='active' draggable="false">概况</Link></li>
			<li><Link to='/test' draggable="false">商家</Link></li>
			<li><Link to='/statistics' draggable="false">统计分析</Link></li>
		</ul>
		</nav>
	}

}

class SidebarNav extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div id='sidebar_nav'>
			<ul>
				<li ><Link to='/line ' activeClassName="active" draggable="false"><i className='fa fa-area-chart' aria-hidden="true"></i>当前客流 <i className='fa fa-angle-double-right' aria-hidden='true'></i></Link>
					<ul className='sidebar_subNav'>
						<li><Link to='/a' className='subNav_li' draggable="false">一层客流量</Link></li>
						<li><Link to='/b' className='subNav_li' draggable="false">二层客流量</Link></li>
						<li><Link to='/c' className='subNav_li' draggable="false">三层客流量</Link></li>
					</ul>
				</li>
				<li><Link href='javascript:' draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>客量预警<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
				<li><Link href='javascript:' draggable="false"><i className='fa fa-bar-chart' aria-hidden="true"></i>商场排名<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
				<li><Link href='javascript:' draggable="false"><i className='fa fa-adjust' aria-hidden="true"></i>新老顾客<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
				<li><Link href='javascript:' draggable="false"><i className='fa fa-adjust' aria-hidden="true"></i>顾客活跃度<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>

			</ul>
		</div>
	}
}

class General extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div style={{height:'100%',position:'relative'}}>
		<Nav />
		<SidebarNav />
		<div id="container">{this.props.children}</div>
		
		</div>
	}
}
		// <DevTool/>





export default General


































