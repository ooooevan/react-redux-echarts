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
    singleSellerStayBar: React.PropTypes.func.isRequired,
    stayBar: React.PropTypes.instanceOf(Immutable.Map)
  }
  constructor(props) {
    super(props);
    this.state = {
      singleSellerStayBarChart: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      numList: '',
      tableSpace: 1
    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.singleSellerStayBar(this.props.params.id, this.state.time);

    const singleSellerStayBarChart = ReactDOM.findDOMNode(this.refs.singleSellerStayBarChart);
	  this.state.singleSellerStayBarChart = echarts.init(singleSellerStayBarChart);
    this.state.singleSellerStayBarChart.showLoading();

    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.singleSellerStayBarChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.singleSellerStayBar(nextProps.params.id, nextProps.time);
      return;
    }
    const stayBar = nextProps.stayBar.toJS();
    if (stayBar.series && stayBar.series[0] && stayBar.series[0].data && stayBar.series[0].data[0]) {
      const timeList = stayBar.xAxis[0].data;
      const numList = stayBar.series[0].data;
      this.setState({timeList, numList});
      this.state.singleSellerStayBarChart.setOption(stayBar);
      this.state.singleSellerStayBarChart.hideLoading();
    }
  }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')

	// }
	// componentDidUpdate(){

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.singleSellerStayBarChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    let {timeList, numList, tableSpace, time} = this.state;
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
        <div className="panelHead">驻店时长&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示在一定时间内顾客在店铺的停留时长<br /></p></div></div>
        <div className="panelBody">
          <div className="singleSellerStayBarChart" ref="singleSellerStayBarChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">驻店时长明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间范围</th><th>驻店时长</th><th>人数</th></tr>
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
  stayBar: state.getIn(['b', 'stayBar'])
});


export default connect(mapStateToProps, sellersAction)(_stayBar);
