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


class _out extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsOutInit: '',
      resizeHandler: '',
      statisticsOutChart: '',
      time: '',
      time: '',
      timeList: '',
      numList: '',
      percentList: '',
      tableSpace: 1
    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.statisticsOutInit(this.state.time);
    const statisticsOutChart = ReactDOM.findDOMNode(this.refs.statisticsOutChart);
	  this.state.statisticsOutChart = echarts.init(statisticsOutChart);
    this.state.statisticsOutChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.statisticsOutChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.statisticsOutInit(nextProps.time);
      return;
    }
    const out = nextProps.out.toJS();
    if (out.series && out.series[0] && out.series[0].data && out.series[0].data[0]) {
      const timeList = out.xAxis[0].data;
      const percentList = out.series[0].data;
      const numList = out.xAxis[0].num;
      this.setState({timeList, numList, percentList});
      this.state.statisticsOutChart.setOption(out);
      this.state.statisticsOutChart.hideLoading();
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
    this.state.statisticsOutChart.dispose();
    this.props.stateDefault();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    const {timeList, numList, percentList, tableSpace} = this.state;
    const rows = [];
    if (timeList) {
      timeList.forEach((item, i) => {
        if (!(i % tableSpace)) {
          rows.push(<tr key={i}><td>{timeList[i]}</td><td>{numList[i]}</td><td>{percentList[i]}%</td></tr>);
        }
      });
    }
    return	(<div>
      <div className="panel">
        <div className="panelHead">跳出率&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在一定时间内的跳出的数量及比例<br /><strong>跳出</strong>：停留时长低于2分钟的顾客</p></div></div>
        <div className="panelBody">
          <div className="statisticsOutChart" ref="statisticsOutChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">跳出率明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>跳出量</th><th>跳出率</th></tr>
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
  out: state.getIn(['c', 'out'])
});

export default  connect(mapStateToProps, statisticsAction)(_out);
