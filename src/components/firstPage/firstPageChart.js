

import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import FrstPageAction from '../../actions/firstPageAction';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/dataZoom';
const FaQuestion = require('react-icons/lib/fa/question');

class _Chart extends React.Component {

    static propTypes = {
        numInit: React.PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state={
            myChartLine:"",       //chart实例对象line
            timer:"",           //定时器
            chartNum:'',     //显示当前人数
            chartTime:'',     //显示当前时间
            chartTitle:'',    //显示当前标题
            yesterday:'',     //昨天的信息
            resizeHandler:null,
            timeList:'',
            dataList:'',
            tableSpace:3,
            timerTime:1000*2
        }
    }
    
    componentWillMount(){
        console.log('componentWillMount');
        // debugger;
        
        this.props.numInit();

    }
    componentDidMount(){
        let domLine = ReactDOM.findDOMNode(this.refs.chartLine);
        this.state.myChartLine = echarts.init(domLine);
        this.state.myChartLine.showLoading();

        //定时刷新
        this.state.timer = setInterval(this.fetchData,this.state.timerTime)
        window.addEventListener('resize',this.resizeFun);

    }
    resizeFun =()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.myChartLine){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.myChartLine.resize();
                   // this.state.myChartPie.resize();
                }.bind(this), 100)
            }
    }
    fetchData = ()=>{
        this.props.fetch()
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        this.state.myChartLine.dispose();
        clearInterval(this.state.timer);
        window.removeEventListener('resize',this.resizeFun);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate')
        
    }
    componentWillReceiveProps(nextProps,nextState){
        let line=nextProps.line.toJS();
        if(line.xAxis.data){
            this.state.myChartLine.setOption(line);
            this.state.myChartLine.hideLoading();
        }
        if(line.series[0].data){
            this.setState({
                chartNum:line.series[0].data[line.series[0].data.length - 1],
                chartTime:line.xAxis.data[line.xAxis.data.length - 1],
                chartTitle:line.title.text,
                yesterday:line.xAxis.yesterday,
                timeList:line.xAxis.data.reverse(),
                dataList:line.series[0].data.reverse()
            })
        }

     

    }

    render(){
        let rows=[];
        let {yesterday,chartNum,chartTime,timeList,dataList,tableSpace} = this.state;
        if(timeList){
            timeList.forEach((item,i)=>{
                if(!(i%tableSpace)){
                    rows.push(<tr key={i}><td>{timeList[i]}</td><td>{dataList[i]}</td></tr>)
                }
            })
        }
        // console.log(yesterday);
        return <div className='chartWrapper'>
            {/*<div className='chartMessage'>
                <p>当前人数：{this.state.chartNum}</p><p>昨日平均客流：2132</p><p>昨日高峰时段：16:30-21:00</p>
            </div>*/}
            <div className='topMessage'>
                <div className='message message1'><div>
                    <p>当前人数：{chartNum}  {/* yesterday.get('increase')+''=='true'?<span className='up'>&nbsp;↑</span> :<span className='down'>&nbsp;↓</span>*/} </p>
                    <p>当前时间：{chartTime}</p>
                </div></div>
                <div className='message message2'><div>
                    <p>昨日高峰客流：{yesterday.num}</p>
                    <p>昨日平均客流：{}</p>
                </div></div>
                <div className='message message3'><div>
                    <p>昨日高峰时间：{yesterday.countDate}</p>
                </div></div>
            </div>


            <div className='panel'>
                <div className='panelHead'>当前实时客流&nbsp;
                <FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城实时客流量<br />实时信息将自动更新，更新间隔为：{}分钟</p></div>
                </div>
                <div className='panelBody'>
                    <div ref="chartLine" className="chartLine" ></div>
                </div>
            </div>
            <div className='panel'>
                <div className='panelHead'>实时客流明细</div>
                    <div className='panelBody'>
                    <table className=/*firstTable*/"Table">
                        <thead>
                            <tr><th>时间</th><th>客流量</th></tr>
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

/*const mapStateToProps = (state)=>{
    console.log(state);
    debugger
    console.log(state.get('line'));
    console.log(state.get('a'));
    var aadsaf = state.toJS();
    return state.toJS();
}*/

// const mapStateToProps = state => {
//     debugger
//     // let fdsa=state.get('a');
//     // let a=fdsa.toJS();
//     let ppppeee=state.toJS();
//     return ppppeee;
// };
const mapStateToProps = state => ({
        line:state.getIn(['a','line'])
        // pie:state.getIn(['a','pie'])
})
let Chart = connect(mapStateToProps,FrstPageAction)(_Chart);

// connect(state => ({
//   stuff: state.get('stuff'),
//   otherStuff: state.get('otherStuff')
// })


export default Chart;