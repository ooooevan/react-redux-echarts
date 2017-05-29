import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import Calendar from '../../calendar';
import Tools from '../../tools';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
const FaQuestion = require('react-icons/lib/fa/question');

import compareAction from '../../../actions/compareAction';

class _cycle extends React.Component {

  static propTypes = {
        // customerNum: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
  };

  constructor(props) {
    super(props);
    this.state = {
      compareCycleChart: '',
      resizeHandler: null,
      Data: [],
      selectTime: 'day',
      time: '',          // 要请求的time参数，有多个
      time1: '',           // 时间1，用于显示图表的legend
      time2: '',              // 时间2,用于显示图表的legend
      timeList: '',
      num1List: '',
      num2List: '',
      total1List: '',
      total2List: ''
    };
  }


    // componentWillMount(){
        // console.log('componentWillMount')

 //        this.props.compareCustomerNumInit(this.state.time,this.state.chartPage);

    // }

  componentDidMount() {
        // console.log('componentDidMount');
    //  //this.props.allSellersTableInit();
    const getTime = Tools.getTime();
    this.state.time = getTime;
    this.state.time1 = getTime.split(',')[0];
    this.state.time2 = getTime.split(',')[1];
    this.props.cycleInit(Tools.changeTime(this.state.time), this.state.selectTime);   // 默认无参，可选

    const input1 = ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0];
    input1.value = this.state.time.split(',')[0];
    const dom = ReactDOM.findDOMNode(this.refs.compareCycleChart);

    this.state.compareCycleChart = echarts.init(dom);
    this.state.compareCycleChart.showLoading();

    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun = () => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    if (this.state.compareCycleChart) {
      this.state.resizeHandler = setTimeout(() => {
        this.state.compareCycleChart.resize();
      }, 100);
    }
  }
  componentWillUnmount() {
        // console.log('componentWillUnmount');
    this.state.compareCycleChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
    // }
 //
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.props !== nextProps) {
      const cycle = nextProps.cycle.toJS();
      if (cycle.series[0].data && cycle.series[0].data && cycle.series[0].data[0]) {
        const timeList = cycle.xAxis[0].data;
        const num1List = cycle.series[0].data;
        const num2List = cycle.series[1].data;
        const total1List = num1List.reduce((x, y) => (parseInt(x) + parseInt(y)));
        const total2List = num2List.reduce((x, y) => (parseInt(x) + parseInt(y)));
        this.setState({timeList, num1List, num2List, total1List, total2List});
                // cycle.legend.data.push(this.state.time1,this.state.time2);
                // cycle.series[0].name = this.state.time1;
                // cycle.series[1].name = this.state.time2;
        cycle.legend.data.push('时间一', '时间二');
        cycle.series[0].name = '时间一';
        cycle.series[1].name = '时间二';
        this.state.compareCycleChart.setOption(cycle);
        this.state.compareCycleChart.hideLoading();
      }
    }
  }
    // componentWillUpdate(nextProps){
        // console.log('-=componentWillUpdate')
    // }
    // componentDidUpdate(){
        // console.log('..componentDidUpdate')


 //
    // }
    // componentWillReceiveProps(){
    // }
  changeTime=(e) => {
    if (e.target.className === 'active') {
      return;
    }
    switch (e.target.innerText) {
        // case '时':
        //   this.setState({
        //     time:'hour',
        //     selectTime:'hour'
        //   })
        //   return;
      case '日':
        this.setState({
          time: 'day',
          selectTime: 'day'
        });
        return;
      case '周':
        this.setState({
          time: 'week',
          selectTime: 'week'
        });
        return;
      case '月':
        this.setState({
          time: 'month',
          selectTime: 'month'
        });

    }
  }
  search=() => {
    let time1 = ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
    let time2 = ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
    time1 = Tools.changeTime(time1);
    time2 = Tools.changeTime(time2);
        // 去除红色警示框ClassName
    ReactDOM.findDOMNode(this.refs.selectTime1).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
    ReactDOM.findDOMNode(this.refs.selectTime2).className = ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError', '');
    const ms1 = new Date(time1).getTime();
    const ms2 = new Date(time2).getTime();
    const now = Date.now();
    let error = false;
    if (ms1 > now) {  // 选择时间超过当前时间，若选择的是今日，也不会超过当前时间
      ReactDOM.findDOMNode(this.refs.selectTime1).className += ' selectTimeError';// 添加红色警示框ClassName
      error = true;
    }
    if (ms1 >= ms2) { // 时间1大于时间2，错误
      ReactDOM.findDOMNode(this.refs.selectTime2).className += ' selectTimeError';
      error = true;
    }
    if (ms2 > now) {  // 选择时间超过当前时间，若选择的是今日，也不会超过当前时间
      ReactDOM.findDOMNode(this.refs.selectTime2).className += ' selectTimeError';// 添加红色警示框ClassName
      error = true;
    }
    if (error) {
      return false;
    }
        // 日历选择没有错误，得到时间范围,发请求,并保存时间，放入图表legend
    this.props.cycleInit(`${time1},${time2}`, this.state.selectTime);
    this.state.time1 = time1;
    this.state.time2 = time2;
  }

  render() {
    const {timeList, num1List, num2List, total1List, total2List} = this.state;
    const rows = [];
    let percent1,
      percent2;
    if (timeList) {
      timeList.forEach((item, i) => {
        percent1 = parseInt((parseInt(num1List[i]) / total1List) * 100);
        percent2 = parseInt((parseInt(num2List[i]) / total2List) * 100);
        rows.push(<tr key={i}><td>{timeList[i]}</td><td>{num1List[i]}</td><td>{percent1}%</td><td>{num2List[i]}</td><td>{percent2}%</td></tr>);
      });
    }

    return (<div className="chartWrapper">


      <div className="selectOption inline">
                    时间：
                    <div className="selectTime1" ref="selectTime1"><Calendar /></div>
                    &nbsp;&nbsp;&nbsp;对比时间：&nbsp;
                    <div className="selectTime1" ref="selectTime2"><Calendar /></div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对比时间范围：
                    <div className="quickSelect defaultCursor">
                      <ul>
                        {/* <li><a className={this.state.selectTime=='hour'?'active':''} onClick={this.changeTime}>时</a></li>*/}
                        <li><a className={this.state.selectTime == 'day' ? 'active' : ''} onClick={this.changeTime}>日</a></li>
                        <li><a className={this.state.selectTime == 'week' ? 'active' : ''} onClick={this.changeTime}>周</a></li>
                        <li><a className={this.state.selectTime == 'month' ? 'active' : ''} onClick={this.changeTime}>月</a></li>
                      </ul>
                    </div>
        <div className="selectClick">
          <input type="button" value="查询" onClick={this.search} />
        </div>
      </div>

      <div className="panel">
        <div className="panelHead">来访周期对比&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在两个时间段内来访周期的对比<br /></p></div></div>
        <div className="panelBody">
          <div ref="compareCycleChart" className="compareCycleChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">来访周期对比明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>来访周期</th><th>时间一人数</th><th>所占比例</th><th>时间二人数</th><th>所占比例</th></tr>
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
  cycle: state.getIn(['d', 'cycle'])
});
export default connect(mapStateToProps, compareAction)(_cycle);

