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


class _cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsCustomerNumInit: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      numList: '',
      totalNum: ''
    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.statisticsCycleInit(this.state.time);

    const statisticsCycleChart = ReactDOM.findDOMNode(this.refs.statisticsCycleChart);
	  this.state.statisticsCycleChart = echarts.init(statisticsCycleChart);
    this.state.statisticsCycleChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.statisticsCycleChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.statisticsCycleInit(nextProps.time);
      return;
    }
    const cycle = nextProps.cycle.toJS();
    if (cycle.series && cycle.series[0] && cycle.series[0].data && cycle.series[0].data[0]) {
      const timeList = cycle.xAxis[0].data;
      const numList = cycle.series[0].data;
      const totalNum = numList.reduce((x, y) => (parseInt(x) + parseInt(y)));
      this.setState({timeList, numList, totalNum});
      this.state.statisticsCycleChart.setOption(cycle);
      this.state.statisticsCycleChart.hideLoading();
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
    this.state.statisticsCycleChart.dispose();
    this.props.stateDefault();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    let {timeList, numList, time, totalNum} = this.state;
    const rows = [];
    let percent = '';
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
        if (!totalNum) {
        	percent = 0;
        } else {
    			percent = parseInt((parseInt(numList[i]) / parseInt(totalNum)) * 100);
        }
        rows.push(<tr key={i}><td>{time}</td><td>{timeList[i]}</td><td>{numList[i]}</td><td>{percent}%</td></tr>);
      });
    }
    return	(<div>
      <div className="panel">
        <div className="panelHead">来访周期&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在一定时间内顾客距离上次来访的时间<br /></p></div></div>
        <div className="panelBody">
          <div className="statisticsCycleChart" ref="statisticsCycleChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">来访周期明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间范围</th><th>来访周期</th><th>人数</th><th>所占比例</th></tr>
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
  cycle: state.getIn(['c', 'cycle']),
});

export default connect(mapStateToProps, statisticsAction)(_cycle);
