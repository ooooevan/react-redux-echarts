import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
// import {Table } from 'react-bootstrap';
import thunk from 'redux-thunk';
import Calendar from '../calendar';
import Tools from '../tools';
// import lineAction from '../actions/lineAction';
// import FirstPageLineReducer from '../reducers/firstPageLineReducer';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const FaAngleDoubleRight = require('react-icons/lib/fa/angle-double-right');
// var echarts = require('echarts/lib/echarts'); //必须
// require('echarts/lib/chart/pie'); //图表类型
// require('echarts/lib/component/title'); //标题插件


class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div id="sidebar_nav">
      <ul>
        <li><Link to="statistics/total" activeClassName="active" draggable="false">入店量 <FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/avg" activeClassName="active" draggable="false">客流量 <FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/peak" activeClassName="active" draggable="false">客流峰值 <FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/oldOrNew" activeClassName="active" draggable="false">新老顾客<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/stay" activeClassName="active" draggable="false">停留时长<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/deep" activeClassName="active" draggable="false">深访率<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/out" activeClassName="active" draggable="false">跳出率<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/active" activeClassName="active" draggable="false">顾客活跃度<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/timeSection" activeClassName="active" draggable="false">各时间段人数<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
        <li><Link to="statistics/cycle" activeClassName="active" draggable="false">来访周期<FaAngleDoubleRight className="fa-angle-double-right" /></Link></li>
      </ul>
    </div>);
  }
}

class _statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTime: 'day',
      time: 'day'
    };
  }
  stateDefault=() => {
    this.setState({
      selectTime: 'day',
      time: 'day'
    });
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps !== this.props) {
        // 选择时间去掉红色框ClassName
      const time1 = ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
      const time2 = ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
      ReactDOM.findDOMNode(this.refs.selectTime1).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
      ReactDOM.findDOMNode(this.refs.selectTime2).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
    }
  }
  componentDidMount() {
    scrollTo(0, 0);
  }
  changeTime=(e) => {
      // 选择时间去掉红色框ClassName
    const time1 = ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
    const time2 = ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
    ReactDOM.findDOMNode(this.refs.selectTime1).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
    ReactDOM.findDOMNode(this.refs.selectTime2).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');

    if (e.target.className === 'active') {
      return;
    }
    switch (e.target.innerText) {
      case '昨天':
        this.setState({
          time: 'day',
          selectTime: 'day'
        });
        return;
      case '最近一周':
        this.setState({
          time: 'week',
          selectTime: 'week'
        });
        return;
      case '最近一月':
        this.setState({
          time: 'month',
          selectTime: 'month'
        });
        return;
      case '最近一年':
        this.setState({
          time: 'year',
          selectTime: 'year'
        });
        return;
      case '全部':
        this.setState({
          time: 'more',
          selectTime: 'more'
        });

    }
  }
  search=() => {
    let time1 = ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
    let time2 = ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
    time1 = Tools.changeTime(time1);
    time2 = Tools.changeTime(time2);
        // 去除红色警示框ClassName
    ReactDOM.findDOMNode(this.refs.selectTime1).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
    ReactDOM.findDOMNode(this.refs.selectTime2).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
    const ms1 = new Date(time1).getTime();
    const ms2 = new Date(time2).getTime();
    const now = Date.now();
    let error = false;
    if (ms1 > now) {  // 选择时间超过当前时间，若选择的是今日，也不会超过当前时间
      ReactDOM.findDOMNode(this.refs.selectTime1).className += ' selectTimeError';// 添加红色警示框ClassName
      error = true;
    }
    if (ms1 >= ms2) { // 时间1大于时间2，错误
      ReactDOM.findDOMNode(this.refs.selectTime2).className += ' selectTimeError';
      error = true;
    }
    if (ms2 > now) {  // 选择时间超过当前时间，若选择的是今日，也不会超过当前时间
      ReactDOM.findDOMNode(this.refs.selectTime2).className += ' selectTimeError';// 添加红色警示框ClassName
      error = true;
    }
    if (error) {
      return false;
    }

    this.setState({
      time: `${time1},${time2}`,
      selectTime: ''
    });
  }
  render() {
    return (<div id="container">
      <SidebarNav />
      <div className="chartWrapper">
        <div className="selectOption inline">
                    快速选择：
                    <div className="quickSelect">
                      <ul>
                        <li><a className={this.state.selectTime == 'day' ? 'active' : ''} onClick={this.changeTime}>昨天</a></li>
                        <li><a className={this.state.selectTime == 'week' ? 'active' : ''} onClick={this.changeTime}>最近一周</a></li>
                        <li><a className={this.state.selectTime == 'month' ? 'active' : ''} onClick={this.changeTime}>最近一月</a></li>
                        <li><a className={this.state.selectTime == 'year' ? 'active' : ''} onClick={this.changeTime}>最近一年</a></li>
                        <li><a className={this.state.selectTime == 'more' ? 'active' : ''} onClick={this.changeTime}>全部</a></li>
                      </ul>
                    </div>
        </div>
        <div className="selectOption inline">

                自定义时间选择：
                <div className="selectTime1" ref="selectTime1"><Calendar /></div>
                &nbsp;至&nbsp;
                <div className="selectTime1" ref="selectTime2"><Calendar /></div>

          <div className="selectClick">
            <input type="button" value="查询" onClick={this.search} />
          </div>
        </div>

        {this.props.children && React.cloneElement(this.props.children, {time: this.state.time, stateDefault: this.stateDefault})}
      </div>

    </div>);
  }
}
// let Statistics=connect(state=>state.toJS(),null)(_statistics);

export default _statistics;
