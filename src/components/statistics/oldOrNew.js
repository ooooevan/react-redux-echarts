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


class _oldOrNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsOldOrNewChart: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      newNumList: '',
      oldNumList: '',
      percentList: '',
      tableSpace: 1

    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.statisticsOldOrNewInit(this.state.time);

    const statisticsOldOrNewChart = ReactDOM.findDOMNode(this.refs.statisticsOldOrNewChart);
	  this.state.statisticsOldOrNewChart = echarts.init(statisticsOldOrNewChart);
    this.state.statisticsOldOrNewChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.statisticsOldOrNewChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.statisticsOldOrNewInit(nextProps.time);
    }
    const oldOrNew = nextProps.oldOrNew.toJS();
    if (oldOrNew.series && oldOrNew.series[0] && oldOrNew.series[0].data && oldOrNew.series[0].data[0]) {
      const timeList = oldOrNew.xAxis[0].data;
      const newNumList = oldOrNew.series[0].data;
      const oldNumList = oldOrNew.series[1].data;
      this.setState({timeList, newNumList, oldNumList});
      this.state.statisticsOldOrNewChart.setOption(oldOrNew);
      this.state.statisticsOldOrNewChart.hideLoading();
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
    this.state.statisticsOldOrNewChart.dispose();
    this.props.stateDefault();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    const {timeList, newNumList, oldNumList, percentList, tableSpace} = this.state;
    const rows = [];
    let percent = '';
    let total = 0;
    if (timeList) {
      timeList.forEach((item, i) => {
        	total = parseInt(newNumList[i]) + parseInt(oldNumList[i]);
        	if (!total) {
        		percent = 0;
        	} else {
        		percent = parseInt(parseInt(newNumList[i]) / total * 100);
        	}
        if (!(i % tableSpace)) {
          rows.push(<tr key={i}><td>{timeList[i]}</td><td>{newNumList[i]}</td><td>{oldNumList[i]}</td><td>{percent}%</td></tr>);
        }
      });
    }
    return	(<div>
      <div className="panel">
        <div className="panelHead">新老顾客&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在一定时间内的新老顾客的数量<br /><strong>新顾客</strong>：第一次进入店铺的顾客<strong>新顾客</strong>：不是第一次进入店铺的顾客</p></div></div>
        <div className="panelBody">
          <div className="statisticsOldOrNewChart" ref="statisticsOldOrNewChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">新老顾客明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>新顾客数量</th><th>老顾客数量</th><th>新顾客率</th></tr>
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
  oldOrNew: state.getIn(['c', 'oldOrNew']),
});

export default  connect(mapStateToProps, statisticsAction)(_oldOrNew);
