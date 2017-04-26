import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import Calendar from '../calendar';
import { Router, Route, IndexRoute, hashHistory, Link ,Redirect} from 'react-router';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';

import CustomerFlow from './singleSellerChartHistory/customerFlow';


import sellersAction from '../../actions/sellersAction';

class _singleHistory extends React.Component {

    static propTypes = {
        params: React.PropTypes.object.isRequired   //商店id，这里为数字
    };
    constructor(props){
        super(props);
        // this.adjusting=this.adjusting.bind(this);
        this.state={
					// singleSellerCustomerFlowChart:'',    //顾客流动图表
        	time:'day',
          selectTime:'day'
          // id:'',   //商家id
          // name:'',   //商家名
          // resizeHandler:null
        }

    }
    componentWillMount(){
      console.log('componentWillMount  '+new Date().getTime());
    }
    componentDidMount(){
      console.log('componentDidMount  '+new Date().getTime());
    	// this.state.id = this.props.params.id  //获取该商店id

    }
		componentDidUpdate(){
      // debugger


		}
    componentWillUpdate(nextProps,nextState){
      //对应的名字写入
      // this.state.name=nextProps.customerFlow.get('name');
      // this.state.id=nextProps.params.id;
    }
    componentWillReceiveProps(nextProps,nextState){
      //对应的名字写入
      // this.setState({
      //   name:nextProps.customerFlow.name,
      //   id:nextProps.params.id
      // })
    }
		componentWillUnmount(){

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
    changeTime=(e)=>{
      if(e.target.className === 'active'){
               return;
      }
      switch(e.target.innerText){
        case '时':
          this.setState({
            time:'hour',
            selectTime:'hour'
          })
          return;
        case '最近一日':
          this.setState({
            time:'day',
            selectTime:'day'
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
      }
    }
    render(){
        console.log('render----------time')

      let baseUrl=`sellers/${this.props.params.id}/history/`;
    	return <div className="panelWrapper">
              {/*<p>{this.state.name}</p>*/}
              <div className='selectOption inline'>
              时间选择： 
                <div className='quickSelect'>
                  <ul>
                  {/*<li><a className={this.state.selectTime=='hour'?'active':''} onClick={this.changeTime}>今天</a></li>*/}
                  <li><a className={this.state.selectTime=='day'?'active':''} onClick={this.changeTime}>最近一日</a></li>
                  <li><a className={this.state.selectTime=='week'?'active':''} onClick={this.changeTime}>最近一周</a></li>
                  <li><a className={this.state.selectTime=='month'?'active':''} onClick={this.changeTime}>最近一月</a></li>
                  </ul>
                </div>
              </div>
              <div className='selectOption inline'>
                自定义时间：
                <div className='selectTime1' ref='selectTime1'><Calendar/></div>
                &nbsp;至&nbsp;
                <div className='selectTime2' ref='selectTime2'><Calendar/></div>
                {/*<div className='sellersSelect2'>
                  <select>
                    <option value ="yesterday">昨日</option>
                    <option value ="lastWeek">近一周</option>
                    <option value="lastMonth">近一月</option>
                    <option value="all">全部</option>
                  </select>
                </div>*/}
                  <div className='selectClick'>
                    <input type='button' value='查询' onClick={this.search}/>
                  </div>
              </div>
              
                <div className='selectOption'>
                指标选择：
                <div className='quickSelect'>
                  <ul>
                      <li><Link to={baseUrl+'customerFlow'} activeClassName="active" draggable="false">客流量</Link></li>
                      <li><Link to={baseUrl+'radar'} activeClassName="active" draggable="false">总体评价</Link></li>
                      <li><Link to={baseUrl+'stayBar'} activeClassName="active" draggable="false">驻店时长</Link></li>
                      <li><Link to={baseUrl+'OldOrNew'} activeClassName="active" draggable="false">新老顾客</Link></li>
                      <li><Link to={baseUrl+'timeSection'} activeClassName="active" draggable="false">各时间段峰值</Link></li>
                      <li><Link to={baseUrl+'deepVisit'} activeClassName="active" draggable="false">深访率</Link></li>
                      <li><Link to={baseUrl+'cycle'} activeClassName="active" draggable="false">来访周期</Link></li>
                      <li><Link to={baseUrl+'Active'} activeClassName="active" draggable="false">活跃度</Link></li>
                    </ul>
                </div>
                    {/*快速选择：
                    <ul>
                      <li><a href='javascript:'>时</a></li>
                      <li><a href='javascript:'>日</a></li>
                      <li><a href='javascript:'>周</a></li>
                      <li><a href='javascript:'>月</a></li>
                      <li><a href='javascript:'>全部</a></li>
                    </ul>*/}
                </div>
    					{/*
              <ul ref="adjustingBar" className="adjustingBar">
                   <span>时间参数&nbsp;&nbsp;&nbsp;&nbsp;</span>
                   <li className={this.state.time=='hour'?'active':''} onClick={this.adjusting}><a>时</a></li>
                   <li className={this.state.time=='day'?'active':''} onClick={this.adjusting}><a>日</a></li>
                   <li className={this.state.time=='week'?'active':''} onClick={this.adjusting}><a>周</a></li>
                   <li className={this.state.time=='month'?'active':''} onClick={this.adjusting}><a>月</a></li>
                   <div className='chartMessage'>
                   </div>
               </ul>
              */}

    	
            {this.props.children && React.cloneElement(this.props.children, {time:this.state.time})}
        
{/*<div className="panel halfPanel_1">
          <div className="panelHead">总体评价(雷达图)</div>
          <div className="panelBody">
            <div className="singleSellerRadarChart" ref="singleSellerRadarChart"></div>
          </div>
        </div>
        <div className="panel halfPanel_2">
          <div className="panelHead">驻店时长(柱状图)</div>
          <div className="panelBody">
            <div className="singleSellerStayBarChart" ref="singleSellerStayBarChart"></div>
          </div>
        </div>
        <div className="panel halfPanel_3">
          <div className="panelHead">新老顾客量+率(层叠柱状图？饼图)</div>
          <div className="panelBody">
            <div className="singleSellerOldOrNewChart" ref="singleSellerOldOrNewChart"></div>
          </div>
        </div>
        <div className="panel halfPanel_4">
          <div className="panelHead">各时间段占比(柱状图)</div>
          <div className="panelBody">
            <div className="singleSellerTimeSectionChart" ref="singleSellerTimeSectionChart"></div>
          </div>
        </div>
        <div className="panel halfPanel_3">
          <div className="panelHead">深访率(柱状图)or--</div>
          <div className="panelBody">
            <div className="singleSellerDeepVisitChart" ref="singleSellerDeepVisitChart"></div>
          </div>
        </div>
        <div className="panel halfPanel_4">
          <div className="panelHead">来访周期(竖向 柱状图)+活跃度(饼图)</div>
          <div className="panelBody">
            <div className="singleSellerCycleAndActiveChart" ref="singleSellerCycleAndActiveChart"></div>
          </div>
        </div>*/}
        
    	</div>
    }
}

// const mapStateToProps = (state)=>{
//   // debugger;
//   // let fdd=state.getIn(['b','deepVisit'])
//   // let d=state.getIn(['b','deepVisit']).toJS()
//   return {
//     customerFlow:state.getIn(['b','customerFlow']),
//     radar:state.getIn(['b','radar']),
//     stayBar:state.getIn(['b','stayBar']),
//     OldOrNew:state.getIn(['b','OldOrNew']),
//     timeSection:state.getIn(['b','timeSection']),
//     deepVisit:state.getIn(['b','deepVisit']),
//     cycleAndActive:state.getIn(['b','cycleAndActive'])
//     }
// }
/*
   
    
    cycleAndActive:state.getIn(['b','cycleAndActive']).toJS()*/

// let singleHistory=connect(mapStateToProps,sellersAction)(_singleHistory);

export default _singleHistory;