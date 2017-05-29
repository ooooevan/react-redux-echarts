import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import Calendar from '../../calendar';
// import '../../styles/calendar.scss';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
const FaQuestion = require('react-icons/lib/fa/question');

import compareAction from '../../../actions/compareAction';

class _sellersDeep extends React.Component {

  static propTypes = {
        // deep: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
  };

  constructor(props) {
    super(props);
    this.state = {
      compareSellerDeepChart: '',
      resizeHandler: null,
      Data: [],
      selectTime: 'day',
            // time:'',          //要请求的time参数，有多个
      seller1: '',           // 商家1，用于显示图表的legend
      seller2: '',              // 商家2,用于显示图表的legend
      num1List: '',
      num2List: '',
      percent1List: '',
      percent2List: ''
    };
  }


    // componentWillMount(){
        // console.log('componentWillMount')


    // }
  componentDidMount() {
        // console.log('1componentDidMount');
        //  //this.props.allSellersTableInit();
    		// if(this.props.sellersAndTime){
    		// 	let dom = ReactDOM.findDOMNode(this.refs.compareSellerDeepChart);
	     //    this.state.compareSellerDeepChart = echarts.init(dom);
	     //    this.state.compareSellerDeepChart.showLoading();
    		// }
    if (this.props.sellersAndTime.length > 1) {
      const sellers = this.props.sellersAndTime.split('/')[0].split(',');

      this.state.seller1 = sellers[0];
      this.state.seller2 = sellers[1];

      this.props.sellersDeepInit(this.props.sellersAndTime);
      const dom = ReactDOM.findDOMNode(this.refs.compareSellerDeepChart);
      this.state.compareSellerDeepChart = echarts.init(dom);
      this.state.compareSellerDeepChart.showLoading();
    }

    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun = () => {
    if (this.state.resizeHandler) {
      setTimeout(this.state.resizeHandler);
    }
    if (this.state.compareSellerDeepChart) {
      this.state.resizeHandler = setTimeout(() => {
        this.state.compareSellerDeepChart.resize();
      }, 100);
    }
  }
  componentWillUnmount() {
        // console.log('1componentWillUnmount');
    this.state.compareSellerDeepChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
  }
  componentWillReceiveProps(nextProps, nextState) {
    	if (nextProps.sellersAndTime && nextProps.sellersAndTime !== this.props.sellersAndTime) {
            // 获取商家名存入state
      const arr = nextProps.sellersAndTime.split('/');
      const sellers = arr[0].split(',');

      this.setState({seller1: sellers[0], seller2: sellers[1]});
      this.props.sellersDeepInit(nextProps.sellersAndTime);
      const dom = ReactDOM.findDOMNode(this.refs.compareSellerDeepChart);
      this.state.compareSellerDeepChart = echarts.init(dom);
      this.state.compareSellerDeepChart.showLoading();
      return;
    }
    const deep = nextProps.deep.toJS();
    if (deep.series[0].data && deep.series[0].data && deep.series[0].data[0]) {
      const timeList = deep.xAxis[0].data;
      const num1List = deep.xAxis[0].deepNum1;
      const num2List = deep.xAxis[0].deepNum2;
      const percent1List = deep.series[0].data;
      const percent2List = deep.series[1].data;
      this.setState({timeList, num1List, num2List, percent1List, percent2List});
      deep.legend.data.push(this.state.seller1, this.state.seller2);
      deep.series[0].name = this.state.seller1;
      deep.series[1].name = this.state.seller2;
      this.state.compareSellerDeepChart.setOption(deep);
      this.state.compareSellerDeepChart.hideLoading();
    }
  }
    // componentWillUpdate(nextProps,nextState){
        // console.log('1-=componentWillUpdate')
        // 有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发

    // }
    // componentDidUpdate(){
        // console.log('1..componentDidUpdate')


    // }

  render() {
    const {timeList, num1List, num2List, percent1List, percent2List, seller1, seller2} = this.state;
    const rows = [];
    if (timeList) {
      timeList.forEach((item, i) => {
        rows.push(<tr key={i}><td>{timeList[i]}</td><td>{num1List[i]}</td><td>{parseInt(percent1List[i])}%</td><td>{num2List[i]}</td><td>{parseInt(percent2List[i])}%</td></tr>);
      });
    }

    return (<div>
      <div className="panel">
        <div className="panelHead">顾客深访率对比&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示两个商家在同一时间段内的深访率对比<br /></p></div></div>
        <div className="panelBody">
          <div ref="compareSellerDeepChart" className="compareSellerDeepChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">顾客深访率对明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>{seller1}深访人数</th><th>深访率</th><th>{seller2}深访人数</th><th>深访率</th></tr>
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
//     // console.log(state);
//     // debugger
//     // console.log(state.toJS());
  deep: state.getIn(['d', 'sellersDeep'])
//         // table:state.getIn(['b','table'])
});
export default connect(mapStateToProps, compareAction)(_sellersDeep);

