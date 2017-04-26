
import React from 'react';
import ReactDOM from 'react-dom';
const  redux =require('redux');
import {connect,Provider} from 'react-redux';
// import {Table } from 'react-bootstrap';
import thunk from 'redux-thunk';
import Calendar from '../calendar';
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
                <li><Link to='statistics/active' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>顾客活跃度<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='statistics/timeSection' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>各时间段峰值<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='statistics/cycle' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>来访周期<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
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

class _statistics extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectTime:'yesterday',
            time:'yesterday'
        }
    }
    stateDefault=()=>{
      this.setState({
        selectTime:'yesterday',
        time:'yesterday'
      })
    }
    changeTime=(e)=>{
      if(e.target.className === 'active'){
         return;
      }
      switch(e.target.innerText){
        case '昨天':
          this.setState({
            time:'yesterday',
            selectTime:'yesterday'
          })
          return;
        case '最近一周':
          this.setState({
            time:'week',
            selectTime:'week'
          })
          return;
        case '最近一月':
          this.setState({
            time:'month',
            selectTime:'month'
          })
          return;
        case '全部':
          this.setState({
            time:'all',
            selectTime:'all'
          })
          return;
      }
    }
    search=()=>{
        let time1=ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
        let time2=ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
        //去除红色警示框ClassName
        ReactDOM.findDOMNode(this.refs.selectTime1).className=ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError','');
        ReactDOM.findDOMNode(this.refs.selectTime2).className=ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError','');
        let ms1=new Date(time1).getTime();
        let ms2=new Date(time2).getTime();
        let now=Date.now();
        let error=false;
        if(ms1>now){  //选择时间超过当前时间，若选择的是今日，也不会超过当前时间
          ReactDOM.findDOMNode(this.refs.selectTime1).className+=' selectTimeError'//添加红色警示框ClassName
          error=true;
        }
        if(ms1>ms2){ //时间1大于时间2，错误
          ReactDOM.findDOMNode(this.refs.selectTime2).className+=' selectTimeError'
          error=true;
        }
        if(ms2>now){  //选择时间超过当前时间，若选择的是今日，也不会超过当前时间
          ReactDOM.findDOMNode(this.refs.selectTime2).className+=' selectTimeError'//添加红色警示框ClassName
          error=true;
        }
        if(error){
          return false;
        }
        
        this.setState({
          time:time1+'|'+time2,
          selectTime:''
        })
    }
    render(){
        return <div id="container">
                <SidebarNav />
                <div className="chartWrapper">
                <div className='selectOption inline'>
                    时间选择：
                    <div className='quickSelect'>
                      <ul>
                            <li><a className={this.state.selectTime=='yesterday'?'active':''} onClick={this.changeTime}>昨天</a></li>
                            <li><a className={this.state.selectTime=='week'?'active':''} onClick={this.changeTime}>最近一周</a></li>
                            <li><a className={this.state.selectTime=='month'?'active':''} onClick={this.changeTime}>最近一月</a></li>
                            <li><a className={this.state.selectTime=='all'?'active':''} onClick={this.changeTime}>全部</a></li>
                        </ul>
                    </div>
                </div>
                <div className='selectOption inline'>
              
                自定义时间选择：
                <div className='selectTime1' ref='selectTime1'><Calendar/></div>
                &nbsp;至&nbsp;
                <div className='selectTime1' ref='selectTime2'><Calendar/></div>
                
                    <div className='selectClick'>
                      <input type='button' value='查询' onClick={this.search} />
                    </div>
              </div>
                                  
                {this.props.children && React.cloneElement(this.props.children, {time:this.state.time,stateDefault:this.stateDefault})}
        </div>
            
        </div>;
    }
}
// let Statistics=connect(state=>state.toJS(),null)(_statistics);

export default _statistics;
