import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import { Link } from 'react-router';
import Calendar from '../calendar';
import Tools from '../tools';
import '../../styles/calendar.scss';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
const FaAngleRight = require('react-icons/lib/fa/angle-right');
const FaAngleLeft = require('react-icons/lib/fa/angle-left');
import sellersAction from '../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _Chart extends React.Component {

    static propTypes = {
        allSellersLineChartInit: React.PropTypes.func.isRequired,
        // allSellersTableInit: React.PropTypes.func.isRequired,
        lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            allSellersLineChart:'',  //全部商家图表
            chartPage:1,       //按页分开商家数据，第一页
            lastPage:false,
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            time:'day'
        }
    }


    componentWillMount(){
      // console.log('componentWillMount')
        // this.props.allSellersTableInit(this.state.time);
        this.props.allSellersLineChartInit(this.state.time,this.state.chartPage);

    }
    componentDidMount(){
        // console.log('componentDidMount');
        //this.props.allSellersTableInit();
        let domLine = ReactDOM.findDOMNode(this.refs.allSellersLineChart);

        this.state.allSellersLineChart = echarts.init(domLine);
        this.state.allSellersLineChart.showLoading();

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.allSellersLineChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.allSellersLineChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        // console.log('componentWillUnmount');
        this.state.allSellersLineChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    }
    componentWillUpdate(nextProps,nextState){
        // console.log('..componentWillUpdate');
        //点击day、week、month等请求，或点击查询
        if(this.state.time!==nextState.time){
            this.props.allSellersLineChartInit(nextState.time,nextState.chartPage);
        }
        this.state.Data = nextProps.lineAndBar.toJS();
        this.state.allSellersLineChart.setOption(this.state.Data);
        this.state.allSellersLineChart.hideLoading()
        /*判断商家排名的下一页，是否到了最后一页，是则将按钮设置为disabled*/
        let rightBtn=ReactDOM.findDOMNode(this.refs.rightBtn);
        // debugger
        if(this.state.Data.xAxis[0].lastPage){
            // debugger
            this.state.lastPage =  true;
            rightBtn.style.backgroundColor='#fff';   //可改变按钮颜色，还没写
            // rightBtn.disabled=true;
            // this.state.chartPage-=1;
        }else{
            // rightBtn.disabled=false;background-color:#eee;
            rightBtn.style.backgroundColor='#eee';
            this.state.lastPage =  false;
        }
    }
    // componentDidUpdate(){
        // console.log('..componentDidUpdate')
        // debugger
        /*let lineAndBarObj = this.props.lineAndBar.toJS();
        this.state.allSellersLineChart.setOption(lineAndBarObj);
        this.state.allSellersLineChart.hideLoading()*/

        /*判断商家排名的下一页，是否到了最后一页，是则将按钮设置为disabled*/
        /*let rightBtn=ReactDOM.findDOMNode(this.refs.rightBtn);
        if(lineAndBarObj.xAxis[0].lastPage){
            this.state.lastPage =  true;
            // rightBtn.style.backgroundColor='black';   //可改变按钮颜色，还没写
            // rightBtn.disabled=true;
            // this.state.chartPage-=1;
        }else{
            // rightBtn.disabled=false;
            this.state.lastPage =  false;
        }*/
    // }
    // componentWillReceiveProps(){
    // }
    changeTime=(e)=>{
        if(e.target.className === 'active'){
         return;
      }
      switch(e.target.innerText){
        case '昨天':
          this.setState({
            time:'day',
            selectTime:'day',
            chartPage:1
          })
          return;
        case '最近一周':
          this.setState({
            time:'week',
            selectTime:'week',
            chartPage:1
          })
          return;
        case '最近一月':
          this.setState({
            time:'month',
            selectTime:'month',
            chartPage:1
          })
          return;
        case '最近一年':
          this.setState({
            time:'year',
            selectTime:'year',
            chartPage:1
          })
          return;
        case '全部':
          this.setState({
            time:'more',
            selectTime:'more',
            chartPage:1
          })
          return;
      }
    }
    search=()=>{
        let time1=ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
        let time2=ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
        time1=Tools.changeTime(time1);
        time2=Tools.changeTime(time2);
        //去除红色警示框ClassName
        ReactDOM.findDOMNode(this.refs.selectTime1).className=ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError','');
        ReactDOM.findDOMNode(this.refs.selectTime2).className=ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError','');
        let ms1=new Date(time1).getTime();
        let ms2=new Date(time2).getTime();
        let now=Date.now();
        let error=false;
        if(ms1>now){  //选择时间超过当前时间，若选择的是今日，也不会超过当前时间
          ReactDOM.findDOMNode(this.refs.selectTime1).className+=' selectTimeError'//添加红色警示框ClassName
          error=true;
        }
        if(ms1>=ms2){ //时间1大于时间2，错误
          ReactDOM.findDOMNode(this.refs.selectTime2).className+=' selectTimeError'
          error=true;
        }
        if(ms2>now){  //选择时间超过当前时间，若选择的是今日，也不会超过当前时间
          ReactDOM.findDOMNode(this.refs.selectTime2).className+=' selectTimeError'//添加红色警示框ClassName
          error=true;
        }
        if(error){
          return false;
        }
        
        this.setState({
          time:time1+','+time2,
          selectTime:'',
          chartPage:1
        })
        return;
    }
    turnLeft = ()=>{
        if(this.state.chartPage<=1){
            return;
        }
        this.state.chartPage -= 1;
        this.props.allSellersLineChartInit(this.state.time,this.state.chartPage);
    }
    turnRight = ()=>{
        if(this.state.lastPage){
            return;
        }
        this.state.chartPage +=1;
        //获取下一页商家数据
        this.props.allSellersLineChartInit(this.state.time,this.state.chartPage);
    }

    render(){
        let rows = [];
        //跳转到商家实时页面，不需要接口传递
        let sellersUrl = 'sellers/'
        if(this.state.Data.series && this.state.Data.series[0].data){
            let sellerName=this.state.Data.xAxis[0].data;
            let sellerNum=this.state.Data.series[0].data;
            let sellerPer=this.state.Data.series[1].data;
            sellerName.forEach(function(item,index){ 
                rows.push(<tr key={index}><th>{index+1}</th><td><Link to={sellersUrl+item}>{item}</Link></td><td>{sellerNum[index]}{sellerPer[index] > 0 ? <span className="up">&nbsp;↑</span>:<span className="down">&nbsp;↓</span>}</td><td className={sellerPer[index] > 0 ? 'up':'down'}>{sellerPer[index]}%</td></tr>);

            })
        }

        return <div className="chartWrapper">
              <div className='selectOption inline'>
                    快速选择：
                    <div className='quickSelect'>
                      <ul>
                            <li><a className={this.state.selectTime=='day'?'active':''} onClick={this.changeTime}>昨天</a></li>
                            <li><a className={this.state.selectTime=='week'?'active':''} onClick={this.changeTime}>最近一周</a></li>
                            <li><a className={this.state.selectTime=='month'?'active':''} onClick={this.changeTime}>最近一月</a></li>
                            <li><a className={this.state.selectTime=='year'?'active':''} onClick={this.changeTime}>最近一年</a></li>
                            <li><a className={this.state.selectTime=='more'?'active':''} onClick={this.changeTime}>全部</a></li>
                        </ul>
                    </div>
                </div>
                <div className='selectOption inline'>
                    自定义时间选择：
                    <div className='selectTime1' ref='selectTime1'><Calendar/></div>
                    &nbsp;至&nbsp;
                    <div className='selectTime1' ref='selectTime2'><Calendar/></div>
                    <div className='selectClick'>
                      <input type='button' value='查询' onClick={this.search} />
                    </div>
                </div>
              
                <div className="panel">
                    <div className="panelHead">各商家客流&nbsp;
                    <FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城各商家一定时间的入店量及环比增幅<br /><strong>入店量</strong>：一定时间内进入商城的人数<br /><strong>环比增幅</strong>：指与历史同时期比较。环比增长速度=（本期数－上期数）/上期数*100% 反映本期比上期增长了多少 环比发展速度=本期数/上期数*100% 反映本期比上期增长多少</p></div></div>
                    <div className="panelBody">
                    <div className="allSellersLineChartBtn">
                        <button onClick={this.turnLeft}><FaAngleLeft /></button>
                        <button onClick={this.turnRight} ref='rightBtn'><FaAngleRight /></button>
                    </div>
                    <div ref="allSellersLineChart" className="allSellersLineChart"></div>
                    </div>
                </div>
                <div className="panel">
                    <div className="panelHead">商家排名明细</div>
                        <div className="panelBody">
                        <table className="Table">
                            <thead>
                                <tr><th>排名</th><th>商店名称</th><th>平均客流</th><th>环比增幅</th></tr>
                            </thead>
                            <tbody>
                            {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    }
}
const mapStateToProps = (state)=>({
    // console.log(state);
    // debugger
    // console.log(state.toJS());
        lineAndBar:state.getIn(['b','lineAndBar'])
        // table:state.getIn(['b','table'])
})
let Chart=connect(mapStateToProps,sellersAction)(_Chart);
export default Chart;

