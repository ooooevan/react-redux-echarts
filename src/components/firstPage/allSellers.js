

import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import FrstPageAction from '../../actions/firstPageAction';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';

class _Chart extends React.Component {

  static propTypes = {
    sellersInit: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstPageSellers: '',       // chart实例对象line
      myChartPie: '',       // chart实例对象pie
      timer: '',           // 定时器
      param: 'hour',       // 不同时间阀值参数
      chartNum: '',     // 显示当前人数
      chartTime: '',     // 显示当前时间
      chartTitle: '',    // 显示当前标题
      yesterday: Immutable.fromJS({}),     // 昨天的信息
      test: 1,
      resizeHandler: null,
      timerTime: 1000 * 5
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
        // debugger;

    this.props.sellersInit();
  }
  componentDidMount() {
    const domLine = ReactDOM.findDOMNode(this.refs.firstPageSellers);
        // let domPie = ReactDOM.findDOMNode(this.refs.chartPie);
        // this.state.myChart = echarts.init(dom);
        // this.props.init(this.state.myChart,this.state.param);
        // this.state.timer = setInterval(this.start,2000);
    this.state.firstPageSellers = echarts.init(domLine);
    this.state.firstPageSellers.showLoading();   // 显是遮罩

        // 定时刷新
    this.state.timer = setInterval(this.fetchData, this.state.timerTime);
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun =() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    if (this.state.firstPageSellers) {
      this.state.resizeHandler = setTimeout(() => {
        this.state.firstPageSellers.resize();
                   // this.state.myChartPie.resize();
      }, 100);
    }
  }
  fetchData = () => {
    this.props.sellersInit();
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.state.firstPageSellers.dispose();   // 销毁实例
    clearInterval(this.state.timer);
    window.removeEventListener('resize', this.resizeFun);
  }

  componentDidUpdate() {
    const sellers = this.props.sellers.toJS();
    if (sellers.series[0].data) {
      this.state.firstPageSellers.setOption(sellers);
      this.state.firstPageSellers.hideLoading();
            // debugger
            // this.state.myChartPie.setOption(this.props.pie.toJS());
            // this.state.myChartPie.hideLoading();
    }
    console.log('componentDidUpdate');
        // console.log(this.props)
  }
    // shouldComponentUpdate(){
    //     return true;
    // }
  componentWillUpdate(nextProps, nextState) {
        // if(nextProps.sellers.getIn(['series',0,'data'])){
            // let sa=nextProps.sellers.getIn(['series',0,'data']);
        // }
  }
  componentWillReceiveProps(nextProps, nextState) {
        // debugger;


    console.log(`componentWillReceiveProps ${new Date().getTime()}`);
  }

  render() {
        // console.log('firstPageChart:'+this.state.test++ +',render,'+new Date().getTime())

        // let rows=
        // debugger

    return (<div className="chartWrapper">
      <div className="panel">
        <div className="panelHead">
          {/* {this.state.chartTitle}*/}</div>
        <div className="panelBody">
          <div ref="firstPageSellers" className="firstPageSellers" />
          <p>
                        当前实时客流数据
                    </p>
          <table className="firstTable">
            <thead>
              <tr><th>时间</th><th>8:00</th><th>9:00</th><th>10:00</th><th>11:00</th><th>12:00</th><th>13:00</th><th>14:00</th><th>15:00</th><th>16:00</th></tr>
            </thead>
            <tbody>
              <tr><td>客流量</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td></tr>
              <tr><td>其他实时数据</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td></tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>);
  }

}


const mapStateToProps = state => ({
  sellers: state.getIn(['a', 'sellers'])
});

const Chart = connect(mapStateToProps, FrstPageAction)(_Chart);

// connect(state => ({
//   stuff: state.get('stuff'),
//   otherStuff: state.get('otherStuff')
// })


export default Chart;
