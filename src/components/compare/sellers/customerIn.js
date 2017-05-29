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

class _sellersIn extends React.Component {

  static propTypes = {
        // sellersIn: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
  };

  constructor(props) {
    super(props);
    this.state = {
      compareSellerInChart: '',
      resizeHandler: null,
      Data: [],
      selectTime: 'day',
            // time:'',          //要请求的time参数，有多个
      seller1: '',           // 商家1，用于显示图表的legend
      seller2: ''              // 商家2,用于显示图表的legend
    };
  }


    // componentWillMount(){
        // console.log('componentWillMount')
        // this.props.changeActiveRoute();


    // }
  componentDidMount() {
        // console.log('1componentDidMount');
         //    //this.props.allSellersTableInit();
    		// if(this.props.sellersAndTime){
    		// 	let dom = ReactDOM.findDOMNode(this.refs.compareSellerInChart);
	     //    this.state.compareSellerInChart = echarts.init(dom);
	     //    this.state.compareSellerInChart.showLoading();
    		// }
    if (this.props.sellersAndTime.length > 1) {
      const sellers = this.props.sellersAndTime.split('/')[0].split(',');

      this.state.seller1 = sellers[0];
      this.state.seller2 = sellers[1];

      this.props.sellersInInit(this.props.sellersAndTime);
      const dom = ReactDOM.findDOMNode(this.refs.compareSellerInChart);
      this.state.compareSellerInChart = echarts.init(dom);
      this.state.compareSellerInChart.showLoading();
    }

    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun = () => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    if (this.state.compareSellerInChart) {
      this.state.resizeHandler = setTimeout(() => {
        this.state.compareSellerInChart.resize();
      }, 100);
    }
  }
  componentWillUnmount() {
        // console.log('1componentWillUnmount');
    this.state.compareSellerInChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
    // }
 //
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.sellersAndTime && nextProps.sellersAndTime !== this.props.sellersAndTime) {
            // 获取商家名存入state
      const arr = nextProps.sellersAndTime.split('/');
      const sellers = arr[0].split(',');
      this.setState({seller1: sellers[0], seller2: sellers[1]});
      this.props.sellersInInit(nextProps.sellersAndTime);
      const dom = ReactDOM.findDOMNode(this.refs.compareSellerInChart);
      this.state.compareSellerInChart = echarts.init(dom);
      this.state.compareSellerInChart.showLoading();
      return;
    }
    const sellersIn = nextProps.sellersIn.toJS();
    if (sellersIn.series[0].data && sellersIn.series[0].data[0]) {
      const timeList = sellersIn.xAxis[0].data;
      const num1List = sellersIn.series[0].data;
      const num2List = sellersIn.series[1].data;
      this.setState({timeList, num1List, num2List});
      sellersIn.legend.data.push(this.state.seller1, this.state.seller2);
      sellersIn.series[0].name = this.state.seller1;
      sellersIn.series[1].name = this.state.seller2;
      this.state.compareSellerInChart.setOption(sellersIn);
      this.state.compareSellerInChart.hideLoading();
    }
  }
    // componentWillUpdate(nextProps,nextState){
        // console.log('1-=componentWillUpdate')
        // 有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发

    // }
    // componentDidUpdate(){
        // console.log('1..componentDidUpdate')


 //
    // }
    // componentWillReceiveProps(){
    // }


  render() {
    const {timeList, num1List, num2List, seller1, seller2} = this.state;
    const rows = [];
    if (timeList) {
      timeList.forEach((item, i) => {
        rows.push(<tr key={i}><td>{timeList[i]}</td><td>{num1List[i]}</td><td>{num2List[i]}</td></tr>);
      });
    }

    return (<div>
      <div className="panel">
        <div className="panelHead">顾客入店量对比&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示两个商家在同一时间段内的入店量对比<br /></p></div></div>
        <div className="panelBody">
          <div ref="compareSellerInChart" className="compareSellerInChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">顾客入店量对比明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>{seller1}人数</th><th>{seller2}人数</th></tr>
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
  sellersIn: state.getIn(['d', 'sellersIn'])
});
export default  connect(mapStateToProps, compareAction)(_sellersIn);

