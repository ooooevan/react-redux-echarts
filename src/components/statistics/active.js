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


class _active extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsActiveInit: '',
      resizeHandler: '',
      statisticsActiveChart: '',
      time: '',
      timeList: '',
      numList: '',
      tableSpace: 1
    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.statisticsActiveInit(this.state.time);

    const statisticsActiveChart = ReactDOM.findDOMNode(this.refs.statisticsActiveChart);
	  this.state.statisticsActiveChart = echarts.init(statisticsActiveChart);
    this.state.statisticsActiveChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.statisticsActiveChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.statisticsActiveInit(nextProps.time);
      return;
    }
    const active = nextProps.active.toJS();
    if (active.series && active.series[0] && active.series[0].data && active.series[0].data[0]) {
      const timeList = active.xAxis[0].data;
      const numList = active.series[0].data;
      this.setState({timeList, numList});
      this.state.statisticsActiveChart.setOption(active);
      this.state.statisticsActiveChart.hideLoading();
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
    this.state.statisticsActiveChart.dispose();
    this.props.stateDefault();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    let {timeList, numList, time} = this.state;
    const rows = [];
    switch (time) {
    	case 'day':time = '最近一天'; break;
    	case 'week':time = '最近一周'; break;
    	case 'month':time = '最近一月'; break;
    	case 'year':time = '最近一年'; break;
    	case 'more':time = '开店以来'; break;
    	default:const arr = time.split(',');
    		time = arr.join(' 至 ');
    }
    if (timeList) {
      timeList.forEach((item, i) => {
        rows.push(<tr key={i}><td>{time}</td><td>{timeList[i]}</td><td>{numList[i]}</td></tr>);
      });
    }
    return	(<div>
      <div className="panel">
        <div className="panelHead">活跃度&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在一定时间内顾客的活跃程度<br /><strong>高活跃度</strong>：<strong>中活跃度</strong>：<strong>低活跃度</strong>：<strong>沉睡活跃度</strong>：</p></div></div>
        <div className="panelBody">
          <div className="statisticsActiveChart" ref="statisticsActiveChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">活跃度明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间范围</th><th>活跃度</th><th>人数</th></tr>
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
  active: state.getIn(['c', 'active']),
});

export default connect(mapStateToProps, statisticsAction)(_active);
