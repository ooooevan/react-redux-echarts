
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
const FaAngleDoubleRight = require('react-icons/lib/fa/angle-double-right');
const FaAreaChart = require('react-icons/lib/fa/area-chart');
const FaExchange = require('react-icons/lib/fa/exchange');

// var echarts = require('echarts/lib/echarts'); //必须
// require('echarts/lib/chart/pie'); //图表类型
// require('echarts/lib/component/title'); //标题插件



/*class SidebarNav extends React.Component {
    constructor(props){
        super(props);
        this.changeActive=this.changeActive.bind(this);
        this.removeSubActive=this.removeSubActive.bind(this);
        this.changeActiveRoute=this.changeActiveRoute.bind(this);
    }
    changeActive(e){
        let dom=e.target;
        let domClass=e.target.className;
        let domTag=e.target.tagName;
         //点击的不是父li，要转换到父li
        if(domClass !== 'split'){  
            //点击的目标是a或i，取父级的父级:ul
            if(domTag === 'A'||domTag === 'I'){
                dom=e.target.parentNode.parentNode.parentNode;
            }else if(domTag === 'LI'){
                dom=e.target.parentNode.parentNode;
            }
        }
        let subDom=dom.getElementsByTagName('ul')[0];
        //目标li已激活，返回
        if(subDom.className.indexOf('active') !== -1){
            return;
        }
        const split1=ReactDOM.findDOMNode(this.refs.split1);
        const split2=ReactDOM.findDOMNode(this.refs.split2);
        this.removeSubActive(split1);
        this.removeSubActive(split2);

        subDom.className = subDom.className +' active';
    }
    changeActiveRoute(){
        let split1=ReactDOM.findDOMNode(this.refs.split1);
        let split2=ReactDOM.findDOMNode(this.refs.split2);
        this.removeSubActive(split1);
        this.removeSubActive(split2);
        let dom2=split2.getElementsByClassName('sidebar_subNav');
        dom2.className=dom2.className + ' active';
    }
    removeSubActive(Dom){
        const subDom=Dom.getElementsByTagName('ul')[0];
        subDom.className=subDom.className.replace(' active','');
    }

    render(){
        return <div id='sidebar_nav'>
            <ul>
                <li className='split' ref='split1' onClick={this.changeActive}>&nbsp;<i className="fa fa-exchange" aria-hidden="true"></i>&nbsp;整体对比
                    <ul className='sidebar_subNav active'>
                        <li><Link to='compare/wholeCustomerNum' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>客流量对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeOldOrNew' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>新顾客率对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeDeep' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>深访率<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeOut' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>跳出率<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeCycle' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>来访周期对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeActive' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>顾客活跃度对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                    </ul>
                </li>
                <li className='split' ref='split2' onClick={this.changeActive}>&nbsp;<i className="fa fa-exchange" aria-hidden="true"></i>&nbsp;商家对比
                    <ul className='sidebar_subNav' ref='sidebar_subNav'>
                        <li><Link to='compare/sellerCustomerNum' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>客流量对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerCustomerIn' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>入店量对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerOldOrNew' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>新老顾客对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerDeep' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>深访率<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerOut' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>跳出率<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerStay' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>驻店时长<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerActive' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>顾客活跃度对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerTimeSection' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>各时间段对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/sellerCycle' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>来访周期对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    }
}*/

class _compare extends React.Component {
    constructor(props){
        super(props);
        this.changeActive=this.changeActive.bind(this);
        this.removeSubActive=this.removeSubActive.bind(this);
        this.changeActiveRoute=this.changeActiveRoute.bind(this);
    }
    componentDidMount(){
        scrollTo(0,0);
    }
    changeActive(e){
        let dom=e.target;
        let domClass=e.target.className;
        let domTag=e.target.tagName;
         //点击的不是父li，要转换到父li
        if(domClass !== 'split'){  
            //点击的目标是a或i，取父级的父级:ul
            if(domTag === 'A'||domTag === 'I'){
                dom=e.target.parentNode.parentNode.parentNode;
            }else if(domTag === 'LI'){
                dom=e.target.parentNode.parentNode;
            }
        }
        
        let subDom=dom.getElementsByTagName('ul')[0];
        //子组件还没渲染出来，直接返回，防止子ul的active类被移除。
        if(!subDom){return;}
        //目标li已激活，返回
        if( subDom && subDom.className.indexOf('active') !== -1 ){
            return;
        }
        const split1=ReactDOM.findDOMNode(this.refs.split1);
        const split2=ReactDOM.findDOMNode(this.refs.split2);
        this.removeSubActive(split1);
        this.removeSubActive(split2);
        // console.log(subDom)
        subDom.className = subDom.className +' active';
        
    }
    changeActiveRoute(){
        let split1=ReactDOM.findDOMNode(this.refs.split1);
        let split2=ReactDOM.findDOMNode(this.refs.split2);
        this.removeSubActive(split1);
        this.removeSubActive(split2);
        let dom2=split2.getElementsByClassName('sidebar_subNav')[0];
        dom2.className=dom2.className + ' active';
    }
    removeSubActive(Dom){
        const subDom=Dom.getElementsByTagName('ul')[0];
        subDom.className=subDom.className.replace(' active','');
    }
    render(){
        return <div id="container">
            <div id='sidebar_nav'>
            <ul>
                <li className='split' ref='split1' onClick={this.changeActive}>&nbsp;<FaExchange />&nbsp;整体对比
                    <ul className='sidebar_subNav active'>
                        <li><Link to='compare/wholeCustomerAvg' activeClassName="active" draggable="false">客流量对比</Link></li>
                        <li><Link to='compare/wholeCustomerNum' activeClassName="active" draggable="false">客流量峰值对比</Link></li>
                        <li><Link to='compare/wholeCustomerIn' activeClassName="active" draggable="false">入店量对比</Link></li>
                        <li><Link to='compare/wholeOldOrNew' activeClassName="active" draggable="false">新老顾客对比</Link></li>
                        <li><Link to='compare/wholeStay' activeClassName="active" draggable="false">停留时长对比</Link></li>
                        <li><Link to='compare/wholeDeep' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>深访率对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeOut' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>跳出率对比<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                        <li><Link to='compare/wholeCycle' activeClassName="active" draggable="false">来访周期对比</Link></li>
                        <li><Link to='compare/wholeActive' activeClassName="active" draggable="false">活跃度对比</Link></li>
                    </ul>
                </li>
                <li className='split' ref='split2' onClick={this.changeActive}>&nbsp;<FaExchange />&nbsp;商家对比
                    <ul className='sidebar_subNav' ref='sidebar_subNav'>
                        <li><Link to='compare/sellerCustomerAvg' activeClassName="active" draggable="false">客流量对比</Link></li>
                        <li><Link to='compare/sellerCustomerNum' activeClassName="active" draggable="false">客流量峰值对比</Link></li>
                        <li><Link to='compare/sellerCustomerIn' activeClassName="active" draggable="false">入店量对比</Link></li>
                        <li><Link to='compare/sellerOldOrNew' activeClassName="active" draggable="false">新老顾客对比</Link></li>
                        <li><Link to='compare/sellerDeep' activeClassName="active" draggable="false">深访率对比</Link></li>
                        <li><Link to='compare/sellerOut' activeClassName="active" draggable="false">跳出率对比</Link></li>
                        <li><Link to='compare/sellerStay' activeClassName="active" draggable="false">驻店时长对比</Link></li>
                        <li><Link to='compare/sellerActive' activeClassName="active" draggable="false">活跃度对比</Link></li>
                        {/*<li><Link to='compare/sellerTimeSection' activeClassName="active" draggable="false">各时间段人数对比</Link></li>*/}
                        <li><Link to='compare/sellerCycle' activeClassName="active" draggable="false">来访周期对比</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
            {this.props.children && React.cloneElement(this.props.children, {changeActiveRoute:this.changeActiveRoute})}
        </div>;
    }
}
// let Compare=connect(state=>state.toJS(),null)(_compare);

export default _compare;
