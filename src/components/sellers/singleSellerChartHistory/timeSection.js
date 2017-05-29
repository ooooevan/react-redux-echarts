import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _stayBar extends React.Component {
  static propTypes = {
    singleSellerTimeSection: React.PropTypes.func.isRequired,
    timeSection: React.PropTypes.instanceOf(Immutable.Map)
  }
  constructor(props) {
    super(props);
    this.state = {
      singleSellerTimeSectionChart: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      numList: ''
    };
  }
  componentDidMount() {
		// debugger
    this.state.time = this.props.time;
    this.props.singleSellerTimeSection(this.props.params.id, this.state.time);

    const singleSellerTimeSectionChart = ReactDOM.findDOMNode(this.refs.singleSellerTimeSectionChart);
	  this.state.singleSellerTimeSectionChart = echarts.init(singleSellerTimeSectionChart);
    this.state.singleSellerTimeSectionChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.singleSellerTimeSectionChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.singleSellerTimeSection(nextProps.params.id, nextProps.time);
      return;
    }
    const timeSection = nextProps.timeSection.toJS();
    if (timeSection.series[0] && timeSection.series[0].data && timeSection.series[0].data[0]) {
      const timeList = timeSection.xAxis[0].data;
      const numList = timeSection.series[0].data;
      this.setState({timeList, numList});
      this.state.singleSellerTimeSectionChart.setOption(timeSection);
      this.state.singleSellerTimeSectionChart.hideLoading();
    }
  }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')

	// }
	// componentDidUpdate(){
		// debugger

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.singleSellerTimeSectionChart.dispose();
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
    return (<div>
      <div className="panel">
        <div className="panelHead">各时间段人数&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示在一定时间段中，一天某时间段内的人数的平均数</p></div></div>
        <div className="panelBody">
          <div className="singleSellerTimeSectionChart" ref="singleSellerTimeSectionChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">各时间段人数明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间范围</th><th>时间段</th><th>人数</th></tr>
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
  timeSection: state.getIn(['b', 'timeSection'])
});


export default connect(mapStateToProps, sellersAction)(_stayBar);
