import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import Calendar from '../calendar';
import statisticsAction from '../../actions/statisticsAction';
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
const FaQuestion = require('react-icons/lib/fa/question');


class _customerPeak extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsPeakInit: '',
      resizeHandler: '',
      statisticsPeakChart: '',
      time: '',
      time: '',
      timeList: '',
      numList: '',
      tableSpace: 1
    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.statisticsPeakInit(this.state.time);
    const statisticsPeakChart = ReactDOM.findDOMNode(this.refs.statisticsPeakChart);
	  this.state.statisticsPeakChart = echarts.init(statisticsPeakChart);
    this.state.statisticsPeakChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.statisticsPeakChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.statisticsPeakInit(nextProps.time);
      return;
    }
    const customerPeak = nextProps.customerPeak.toJS();
    if (customerPeak.series[0] && customerPeak.series[0].data && customerPeak.series[0].data[0]) {
      const timeList = customerPeak.xAxis[0].data;
      const numList = customerPeak.series[0].data;
      this.setState({timeList, numList});
      this.state.statisticsPeakChart.setOption(customerPeak);
      this.state.statisticsPeakChart.hideLoading();
    }
  }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')

	// }
	// componentDidUpdate(){
		// console.log('-=componentDidUpdate')

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.statisticsPeakChart.dispose();
    this.props.stateDefault();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    const {timeList, numList, tableSpace} = this.state;
    const rows = [];
    if (timeList) {
      timeList.forEach((item, i) => {
        if (!(i % tableSpace)) {
          rows.push(<tr key={i}><td>{timeList[i]}</td><td>{numList[i]}</td></tr>);
        }
      });
    }
    return	(<div>
      <div className="panel">
        <div className="panelHead">客流量峰值&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在一定时间内的客流峰值<br /></p></div></div>
        <div className="panelBody">
          <div className="statisticsPeakChart" ref="statisticsPeakChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">客流量峰值明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>峰值人数</th></tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>);
  }
}


const mapStateToProps = state => ({
  customerPeak: state.getIn(['c', 'customerPeak'])
});

export default connect(mapStateToProps, statisticsAction)(_customerPeak);
