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
import compareAction from '../../../actions/compareAction';

class _sellersRoute extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired       //
  };
  constructor(props) {
    super(props);
        // this.changeSellerName=this.changeSellerName.bind(this);
    this.state = {
            // compareCustomerOldOrNewChart:'',
            // resizeHandler:null,
            // Data:[],
      sellersAndTime: '',   // 传给子组件的商家和时间参数
      selectTime: 'day',
      time: '',          // 要请求的time参数，有多个
      time1: '',           // 时间1，用于显示图表的legend
      time2: '',              // 时间2,用于显示图表的legend
      seller1: '',
      seller2: ''
    };
  }
    // changeSellerName(name){
        // this.setState({
        //     sellerName:name
        // })
    // }
  getTodayTime=() => {
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    month = month >= 10 ? month : `0${month}`;
    let day = new Date().getDate();
    day = day >= 10 ? day : `0${day}`;
    this.state.time2 = `${year}-${month}-${day}`;
    return this.state.time2;
  }
  componentWillMount() {
      // console.log('componentWillMount')
        // 获取商家list
    this.props.sellersListInit();
  }
  componentDidMount() {
         // console.log('componentDidMount');
     // console.log('this.props::::')
    this.props.changeActiveRoute();
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.sellersList) {
      const seller1 = ReactDOM.findDOMNode(this.refs.selectSeller1).getElementsByTagName('input')[0];
      const seller2 = ReactDOM.findDOMNode(this.refs.selectSeller2).getElementsByTagName('input')[0];
      const time1 = this.getTodayTime();
            // 没有选择商家才默认选择第1、2个
      if (!this.state.sellersAndTime) {
        seller1.value = nextProps.sellersList.get(0);
        seller2.value = nextProps.sellersList.get(1);
        this.state.sellersAndTime = `${seller1.value},${seller2.value}/${time1},${time1}`;
      }
    }
  }
    // componentWillUnmount(){
        // console.log('componentWillUnmount');
    // }
    // componentWillReceiveProps(){
    // }

  changeTime=(e) => {
    if (e.target.className === 'active') {
      return;
    }
    switch (e.target.innerText) {
        /* case '时':
          this.setState({
            time:'hour',
            selectTime:'hour'
          })
          return;*/
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
    ReactDOM.findDOMNode(this.refs.selectSeller1).getElementsByTagName('input')[0].className = ReactDOM.findDOMNode(this.refs.selectSeller1).getElementsByTagName('input')[0].className.replace(' selectTimeError', '');
    ReactDOM.findDOMNode(this.refs.selectSeller2).getElementsByTagName('input')[0].className = ReactDOM.findDOMNode(this.refs.selectSeller2).getElementsByTagName('input')[0].className.replace(' selectTimeError', '');
        // 确定商家名有没有为空
    const seller1 = ReactDOM.findDOMNode(this.refs.selectSeller1).getElementsByTagName('input')[0];
    const seller2 = ReactDOM.findDOMNode(this.refs.selectSeller2).getElementsByTagName('input')[0];
    if (!seller1.value.trim().length) {
      seller1.className += ' selectTimeError';
      return;
    }
    if (!seller2.value.trim().length) {
      seller2.className += ' selectTimeError';
      return;
    }
    if (seller2.value.trim() === seller1.value.trim()) { // 对比的商家是同一家
      seller2.className += ' selectTimeError';
      return;
    }
        // 时间有没有错
    const ms1 = new Date(time1).getTime();
    const ms2 = new Date(time2).getTime();
    const now = Date.now();
    let error = false;
    if (ms1 > now) {  // 选择时间超过当前时间，若选择的是今日，也不会超过当前时间
      ReactDOM.findDOMNode(this.refs.selectTime1).className += ' selectTimeError';// 添加红色警示框ClassName
      error = true;
    }
    if (ms1 > ms2) { // 时间1大于时间2，错误
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
        // 向子组件发送参数
    this.setState({
      sellersAndTime: `${seller1.value},${seller2.value}/${time1},${time2}`/* +'|'+this.state.selectTime*/
    });
        // console.log('参数：'+seller1.value+'   '+seller2.value+'   '+time1+'   '+time2)
        // this.props.customerOldOrNewInit(time1+'|'+time2+'|'+this.state.selectTime);
        // this.state.time1=time1;
        // this.state.time2=time2;
  }

  render() {
        // sellersList插入dataList
    const dataList = [];
    if (this.props.sellersList) {
      this.props.sellersList.forEach((item, index) => {
        dataList.push(<option key={index}>{item}</option>);
      });
    }
    return (<div className="chartWrapper">

      <div className="selectOption inline">
                    商家一：
                    <div className="selectSeller1 selectTime1" ref="selectSeller1">
                      <input list="selectSeller1" className="selectSeller1" />
                      <datalist id="selectSeller1">
                        {dataList}
                      </datalist>
                    </div>
                    &nbsp;&nbsp;&nbsp;商家二：&nbsp;
                    <div className="selectSeller2 selectTime2" ref="selectSeller2">
                      <input list="selectSeller2" className="selectSeller2" />
                      <datalist id="selectSeller2">
                        {dataList}
                      </datalist>
                    </div>
      </div>

      <div className="selectOption inline">
                    时间：&nbsp;&nbsp;&nbsp;
                    <div className="selectTime1" ref="selectTime1"><Calendar /></div>
                    &nbsp;&nbsp;至&nbsp;&nbsp;
                    <div className="selectTime1" ref="selectTime2"><Calendar /></div>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对比时间范围：
                    <div className='quickSelect defaultCursor'>
                      <ul>
                            <li><a className={this.state.selectTime=='hour'?'active':''} onClick={this.changeTime}>时</a></li>
                            <li><a className={this.state.selectTime=='day'?'active':''} onClick={this.changeTime}>日</a></li>
                            <li><a className={this.state.selectTime=='week'?'active':''} onClick={this.changeTime}>周</a></li>
                            <li><a className={this.state.selectTime=='month'?'active':''} onClick={this.changeTime}>月</a></li>
                        </ul>
                    </div>*/}
        <div className="selectClick">
          <input type="button" value="查询" onClick={this.search} />
        </div>
      </div>

      {/* {this.props.children && React.cloneElement(this.props.children, {changeSellerName:this.changeSellerName})}*/}
      {this.props.children && React.cloneElement(this.props.children, {sellersAndTime: this.state.sellersAndTime})}
    </div>);
  }

}
/* && React.cloneElement(this.props.children, {changeSellerName:this.changeSellerName})*/
const mapStateToProps = state => ({
  sellersList: state.getIn(['d', 'sellersList'])
});
export default connect(mapStateToProps, compareAction)(_sellersRoute);
