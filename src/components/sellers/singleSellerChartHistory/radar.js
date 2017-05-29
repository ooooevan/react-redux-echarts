import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _radar extends React.Component {
  static propTypes = {
    singleSellerRadar: React.PropTypes.func.isRequired,
    radar: React.PropTypes.instanceOf(Immutable.Map)
  }
  constructor(props) {
    super(props);
    this.state = {
      singleSellerRadarChart: '',
      resizeHandler: '',
      time: '',
      nameList: '',
      numList: ''
    };
  }
  componentDidMount() {
		// debugger
    this.state.time = this.props.time;
    this.props.singleSellerRadar(this.props.params.id);

    const singleSellerRadarChart = ReactDOM.findDOMNode(this.refs.singleSellerRadarChart);
	  this.state.singleSellerRadarChart = echarts.init(singleSellerRadarChart);
    this.state.singleSellerRadarChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.singleSellerRadarChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
		// debugger
    const radar = nextProps.radar.toJS();
    if (radar.series.data && radar.series.data[0] && radar.series.data[0][0]) {
      const nameList = [];
      const numList = radar.series.data[0];
      radar.radar.indicator.forEach((item) => {
        nameList.push(item.name);
      });
      this.setState({numList, nameList});
    }

		// if(this.state.time!=nextProps.time){
			// 不支持自定义时间，返回结果是开店以来的结果
			// this.setState({time:nextProps.time});
			// this.props.singleSellerRadar(nextProps.params.id);
		// }
    this.state.singleSellerRadarChart.setOption(radar);
    this.state.singleSellerRadarChart.hideLoading();
  }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')

	// }
	// componentDidUpdate(){
		// debugger

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.singleSellerRadarChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    const {numList, nameList} = this.state;
    const rows = [];
    if (numList) {
      numList.forEach((item, i) => {
        rows.push(<tr key={i}><td>开店以来</td><td>{nameList[i]}</td><td>{numList[i]}</td></tr>);
      });
    }
    return (<div>
      <div className="panel">
        <div className="panelHead">总体评价&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商家开店以来的总体评价<br /><strong>评价标准</strong>：100分为满分，根据各项指标在全部商家的排名，再乘以相关系数得出<br /></p></div></div>
        <div className="panelBody">
          <div className="singleSellerRadarChart" ref="singleSellerRadarChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">总体评价明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间范围</th><th>指标</th><th>评价(百分制)</th></tr>
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
  radar: state.getIn(['b', 'radar'])
});


export default connect(mapStateToProps, sellersAction)(_radar);
