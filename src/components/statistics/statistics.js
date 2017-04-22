
import React from 'react';
import ReactDOM from 'react-dom';
const  redux =require('redux');
import {connect,Provider} from 'react-redux';
// import {Table } from 'react-bootstrap';
import thunk from 'redux-thunk';
// import echarts from 'echarts';  
//import lineAction from '../actions/lineAction';
// import FirstPageLineReducer from '../reducers/firstPageLineReducer';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

// var echarts = require('echarts/lib/echarts'); //必须
// require('echarts/lib/chart/pie'); //图表类型
// require('echarts/lib/component/title'); //标题插件



class SidebarNav extends React.Component {
    constructor(props){
        super(props);
    }



    render(){
        return <div id='sidebar_nav'>
            <ul>
                <li><Link to='statistics/total' activeClassName="active" draggable="false"><i className='fa fa-area-chart' aria-hidden="true"></i>客流量 <i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='statistics/oldOrNew' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>新老顾客<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='statistics/firstFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>顾客活跃度<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='statistics/secondFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>各时间段<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='statistics/thirdFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>来访周期<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
            </ul>
        </div>
    }
}
/*
<ul className='sidebar_subNav'>
    <li><Link to='statistics/firstFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>一层客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
    <li><Link to='statistics/secondFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>二层客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
    <li><Link to='statistics/thirdFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>三层客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
</ul>
*/

let _statistics=React.createClass({
    render(){
        return <div id="container">
            <SidebarNav />
            {this.props.children}
        </div>;
    }
})
let Statistics=connect(state=>state.toJS(),null)(_statistics);

export default Statistics;
