import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
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

// import CustomerFlow from './singleSellerChartHistory/customerFlow';


import sellersAction from '../../actions/sellersAction';

class _singleHistory extends React.Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired,   // 商店id，这里为数字
        // singleSellerLineChartInit: React.PropTypes.func.isRequired,
    singleSellerCustomerFlowInit: React.PropTypes.func.isRequired,
    singleSellerRadar: React.PropTypes.func.isRequired,
    singleSellerStayBar: React.PropTypes.func.isRequired,
    singleSellerOldOrNew: React.PropTypes.func.isRequired,
    singleSellerTimeSection: React.PropTypes.func.isRequired,
    singleSellerDeepVisit: React.PropTypes.func.isRequired,
    singleSellerCycleAndActive: React.PropTypes.func.isRequired,
    customerFlow: React.PropTypes.instanceOf(Immutable.Map),
    radar: React.PropTypes.instanceOf(Immutable.Map),
    stayBar: React.PropTypes.instanceOf(Immutable.Map),
    OldOrNew: React.PropTypes.instanceOf(Immutable.Map),
    timeSection: React.PropTypes.instanceOf(Immutable.Map),
    deepVisit: React.PropTypes.instanceOf(Immutable.Map),
    cycleAndActive: React.PropTypes.instanceOf(Immutable.Map)
  };
  constructor(props) {
    super(props);
    this.adjusting = this.adjusting.bind(this);
    this.state = {
      singleSellerCustomerFlowChart: '',    // 顾客流动图表
      singleSellerRadarChart: '',      // 总体评价图表
      singleSellerStayBarChart: '',    // 驻店时长图表
      singleSellerOldOrNewChart: '',   // 新老顾客图表
      singleSellerTimeSectionChart: '',  // 各时间段占比图表
      singleSellerDeepVisitChart: '',    // 深访率图表
      singleSellerCycleAndActiveChart: '',  // 来访周期和活跃度图表
        	time: 'day',
      id: '',   // 商家id
      name: '',   // 商家名
      resizeHandler: null
    };
  }
  componentWillMount() {
    console.log(`componentWillMount  ${new Date().getTime()}`);
  }
  componentDidMount() {
    console.log(`componentDidMount  ${new Date().getTime()}`);
    	this.state.id = this.props.params.id;  // 获取该商店id
    this.props.singleSellerCustomerFlowInit(this.state.id, this.state.time);
    this.props.singleSellerRadar(this.state.id, this.state.time); // 总评价雷达图
    this.props.singleSellerStayBar(this.state.id, this.state.time); // 总评价雷达图
    this.props.singleSellerOldOrNew(this.state.id, this.state.time); // 总评价雷达图
    this.props.singleSellerTimeSection(this.state.id, this.state.time); // 总评价雷达图
    this.props.singleSellerDeepVisit(this.state.id, this.state.time); // 总评价雷达图
    this.props.singleSellerCycleAndActive(this.state.id, this.state.time); // 总评价雷达图


      // 获取dom
    const singleSellerCustomerFlowChart = ReactDOM.findDOMNode(this.refs.singleSellerCustomerFlowChart);
    const singleSellerRadarChart = ReactDOM.findDOMNode(this.refs.singleSellerRadarChart);
    const singleSellerStayBarChart = ReactDOM.findDOMNode(this.refs.singleSellerStayBarChart);
    const singleSellerOldOrNewChart = ReactDOM.findDOMNode(this.refs.singleSellerOldOrNewChart);
    const singleSellerTimeSectionChart = ReactDOM.findDOMNode(this.refs.singleSellerTimeSectionChart);
    const singleSellerDeepVisitChart = ReactDOM.findDOMNode(this.refs.singleSellerDeepVisitChart);
    const singleSellerCycleAndActiveChart = ReactDOM.findDOMNode(this.refs.singleSellerCycleAndActiveChart);


      // 初始化echarts 存入state
    this.state.singleSellerCustomerFlowChart = echarts.init(singleSellerCustomerFlowChart);
    this.state.singleSellerRadarChart = echarts.init(singleSellerRadarChart);
    this.state.singleSellerStayBarChart = echarts.init(singleSellerStayBarChart);
    this.state.singleSellerOldOrNewChart = echarts.init(singleSellerOldOrNewChart);
    this.state.singleSellerTimeSectionChart = echarts.init(singleSellerTimeSectionChart);
    this.state.singleSellerDeepVisitChart = echarts.init(singleSellerDeepVisitChart);
    this.state.singleSellerCycleAndActiveChart = echarts.init(singleSellerCycleAndActiveChart);

      // 显示遮罩
    this.state.singleSellerCustomerFlowChart.showLoading();
    this.state.singleSellerRadarChart.showLoading();
    this.state.singleSellerStayBarChart.showLoading();
    this.state.singleSellerOldOrNewChart.showLoading();
    this.state.singleSellerTimeSectionChart.showLoading();
    this.state.singleSellerDeepVisitChart.showLoading();
    this.state.singleSellerCycleAndActiveChart.showLoading();


        // 改变窗口，改变canvas大小
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    if (this.state.singleSellerCustomerFlowChart) {
      this.state.resizeHandler = setTimeout(() => {
        this.state.singleSellerCustomerFlowChart.resize();
        this.state.singleSellerRadarChart.resize();
        this.state.singleSellerStayBarChart.resize();
        this.state.singleSellerOldOrNewChart.resize();
        this.state.singleSellerTimeSectionChart.resize();
        this.state.singleSellerDeepVisitChart.resize();
        this.state.singleSellerCycleAndActiveChart.resize();
      }, 100);
    }
  }
  componentDidUpdate() {
      // debugger
      // echarts渲染数据    setOption

    this.state.singleSellerCustomerFlowChart.setOption(this.props.customerFlow.toJS());
    this.state.singleSellerCustomerFlowChart.hideLoading();
    this.state.singleSellerRadarChart.setOption(this.props.radar.toJS());
    this.state.singleSellerRadarChart.hideLoading();
    setTimeout(() => {
      this.state.singleSellerStayBarChart.setOption(this.props.stayBar.toJS());
      this.state.singleSellerOldOrNewChart.setOption(this.props.OldOrNew.toJS());
      this.state.singleSellerTimeSectionChart.setOption(this.props.timeSection.toJS());
      this.state.singleSellerDeepVisitChart.setOption(this.props.deepVisit.toJS());
      this.state.singleSellerCycleAndActiveChart.setOption(this.props.cycleAndActive.toJS());
        // this.state.singleSellerTimeSectionChart.setOption(this.props.timeSection.toJS());
        // this.state.singleSellerDeepVisitChart.setOption(this.props.deepVisit.toJS());
        // this.state.singleSellerCycleAndActiveChart.setOption(this.props.cycleAndActive.toJS());
        // this.state.singleSellerTimeSectionChart.hideLoading();
        // this.state.singleSellerDeepVisitChart.hideLoading();
        // this.state.singleSellerCycleAndActiveChart.hideLoading();

      // console.log(this.props.OldOrNew.toJS());
      // console.log(this.props.deepVisit.toJS());
        // 隐藏遮罩
      this.state.singleSellerStayBarChart.hideLoading();
      this.state.singleSellerOldOrNewChart.hideLoading();
      this.state.singleSellerTimeSectionChart.hideLoading();
      this.state.singleSellerDeepVisitChart.hideLoading();
      this.state.singleSellerCycleAndActiveChart.hideLoading();
    }, 0);
  }
  componentWillUpdate(nextProps, nextState) {
      // 对应的名字写入
      // debugger;
    this.state.name = nextProps.customerFlow.get('name');
    this.state.id = nextProps.params.id;
  }
  componentWillReceiveProps(nextProps, nextState) {
      // 对应的名字写入
      // this.setState({
      //   name:nextProps.customerFlow.name,
      //   id:nextProps.params.id
      // })
  }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.singleSellerCustomerFlowChart.dispose();
    this.state.singleSellerRadarChart.dispose();
    this.state.singleSellerStayBarChart.dispose();
    this.state.singleSellerOldOrNewChart.dispose();
    this.state.singleSellerTimeSectionChart.dispose();
    this.state.singleSellerDeepVisitChart.dispose();
    this.state.singleSellerCycleAndActiveChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
  }
    // 更改时间参数，存入state
  adjusting = (e) => {
					 // 点击当前项返回   点击到的可能是a或li
    let node = e.target;
    if (node.tagName == 'A') {
      node = ReactDOM.findDOMNode(e.target).parentNode;
    }
    if (node.className === 'active') {
      return;
    }
    switch (e.target.innerText) {
      case '时':
        this.state.time = 'hour';
        this.props.singleSellerCustomerFlowInit(this.state.id, this.state.time);
        this.props.singleSellerRadar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerStayBar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerOldOrNew(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerTimeSection(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerDeepVisit(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerCycleAndActive(this.state.id, this.state.time); // 总评价雷达图
        break;
      case '日':
        this.state.time = 'day';
        this.props.singleSellerCustomerFlowInit(this.state.id, this.state.time);
        this.props.singleSellerRadar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerStayBar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerOldOrNew(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerTimeSection(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerDeepVisit(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerCycleAndActive(this.state.id, this.state.time); // 总评价雷达图
        break;
      case '周':
        this.state.time = 'week';
        this.props.singleSellerCustomerFlowInit(this.state.id, this.state.time);
        this.props.singleSellerRadar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerStayBar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerOldOrNew(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerTimeSection(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerDeepVisit(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerCycleAndActive(this.state.id, this.state.time); // 总评价雷达图
        break;
      case '月':
        this.state.time = 'month';
        this.props.singleSellerCustomerFlowInit(this.state.id, this.state.time);
        this.props.singleSellerRadar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerStayBar(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerOldOrNew(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerTimeSection(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerDeepVisit(this.state.id, this.state.time); // 总评价雷达图
        this.props.singleSellerCycleAndActive(this.state.id, this.state.time); // 总评价雷达图
        break;
    }
  }
  render() {
    	return (<div className="panelWrapper">
      <p>{this.state.name}</p>

      <ul ref="adjustingBar" className="adjustingBar">
        <span>时间参数&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <li className={this.state.time == 'hour' ? 'active' : ''} onClick={this.adjusting}><a>时</a></li>
        <li className={this.state.time == 'day' ? 'active' : ''} onClick={this.adjusting}><a>日</a></li>
        <li className={this.state.time == 'week' ? 'active' : ''} onClick={this.adjusting}><a>周</a></li>
        <li className={this.state.time == 'month' ? 'active' : ''} onClick={this.adjusting}><a>月</a></li>
        <div className="chartMessage" />
      </ul>

      <div className="panel">
        <div className="panelHead">顾客流动</div>
        <div className="panelBody">
          <div className="singleSellerCustomerFlowChart" ref="singleSellerCustomerFlowChart" />
          {/* <CustomerFlow id={this.state.id}/>*/}
        </div>
      </div>

      <div className="panel halfPanel_1">
        <div className="panelHead">商家介绍</div>
        <div className="panelBody">
          <div className="sellerIntroduce" ref="sellerIntroduce">
            <p>商家名称：xxx<br />
              具体位置：2F-213D<br />
             商家类别：服装<br />
             介绍：xx</p>


          </div>
        </div>
      </div>
      <div className="panel halfPanel_2">
        <div className="panelHead">总体评价(雷达图)</div>
        <div className="panelBody">
          <div className="singleSellerRadarChart" ref="singleSellerRadarChart" />
        </div>
      </div>
      <div className="panel panel_table">{/* halfPanel_3*/}
        <div className="panelHead">新老顾客量+率(层叠柱状图？饼图)</div>
        <div className="panelBody">
          <div className="singleSellerOldOrNewChart" ref="singleSellerOldOrNewChart" />
          <table>
            <thead><tr><th>日期</th><th>新顾客占比</th><th>环比增幅</th></tr></thead>
            <tbody>
              <tr><th>2017-04-18</th><td>20%</td><td>5</td></tr>
              <tr><th>2017-04-17</th><td>30%</td><td>5</td></tr>
              <tr><th>2017-04-16</th><td>23%</td><td>5</td></tr>
              <tr><th>2017-04-15</th><td>14%</td><td>5</td></tr>
              <tr><th>2017-04-14</th><td>14%</td><td>5</td></tr>
              <tr><th>2017-04-13</th><td>14%</td><td>5</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel halfPanel_3">
        <div className="panelHead">各时间段占比(柱状图)</div>
        <div className="panelBody">
          <div className="singleSellerTimeSectionChart" ref="singleSellerTimeSectionChart" />
        </div>
      </div>
      <div className="panel halfPanel_4">
        <div className="panelHead">深访率(柱状图)or--</div>
        <div className="panelBody">
          <div className="singleSellerDeepVisitChart" ref="singleSellerDeepVisitChart" />
        </div>
      </div>
      <div className="panel halfPanel_3">
        <div className="panelHead">来访周期(竖向 柱状图)+活跃度(饼图)</div>
        <div className="panelBody">
          <div className="singleSellerCycleAndActiveChart" ref="singleSellerCycleAndActiveChart" />
        </div>
      </div>
      <div className="panel halfPanel_4">
        <div className="panelHead">驻店时长(柱状图)</div>
        <div className="panelBody">
          <div className="singleSellerStayBarChart" ref="singleSellerStayBarChart" />
        </div>
      </div>
    	</div>);
  }
}
/*
        <div className="panel ">
          <div className="panelHead">存留分析(跳出率和新增率)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>

*/
const mapStateToProps = state =>
  // debugger;
  // let fdd=state.getIn(['b','deepVisit'])
  // let d=state.getIn(['b','deepVisit']).toJS()
   ({
     customerFlow: state.getIn(['b', 'customerFlow']),
     radar: state.getIn(['b', 'radar']),
     stayBar: state.getIn(['b', 'stayBar']),
     OldOrNew: state.getIn(['b', 'OldOrNew']),
     timeSection: state.getIn(['b', 'timeSection']),
     deepVisit: state.getIn(['b', 'deepVisit']),
     cycleAndActive: state.getIn(['b', 'cycleAndActive'])
   });
/*


    cycleAndActive:state.getIn(['b','cycleAndActive']).toJS()*/

const singleHistory = connect(mapStateToProps, sellersAction)(_singleHistory);

export default singleHistory;
