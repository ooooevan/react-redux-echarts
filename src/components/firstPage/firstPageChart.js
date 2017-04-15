/**
 * Created by HH on 2017/3/15.
 */
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
import 'echarts/lib/component/dataZoom';

class _Chart extends React.Component {

    static propTypes = {
        firstPageChartInit: React.PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state={
            myChartLine:"",       //chart实例对象line
            myChartPie:"",       //chart实例对象pie
            timer:"",           //定时器
            param:'hour',       //不同时间阀值参数
            chartNum:'',     //显示当前人数
            chartTime:'',     //显示当前时间
            chartTitle:'',    //显示当前标题
            yesterday:Immutable.fromJS({}),     //昨天的信息
            test:1
        }
    }
    
    componentWillMount(){
        console.log('componentWillMount');
        // debugger;
        
        this.props.firstPageChartInit();

    }
    componentDidMount(){
        let domLine = ReactDOM.findDOMNode(this.refs.chartLine);
        let domPie = ReactDOM.findDOMNode(this.refs.chartPie);
        // this.state.myChart = echarts.init(dom);
        // this.props.init(this.state.myChart,this.state.param);
        // this.state.timer = setInterval(this.start,2000);
        this.state.myChartLine = echarts.init(domLine);
        this.state.myChartLine.showLoading();   //显是遮罩
        this.state.myChartPie = echarts.init(domPie);
        this.state.myChartPie.showLoading();//显是遮罩



    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        this.state.myChartLine.dispose()   //销毁实例
        this.state.myChartPie.dispose()   //销毁实例
        // clearInterval(this.state.timer);
    }

    componentDidUpdate(){
        // debugger;
        if(this.props.line.getIn(['xAxis','data'])){
            this.state.myChartLine.setOption(this.props.line.toJS());
            this.state.myChartLine.hideLoading();
            //debugger
            this.state.myChartPie.setOption(this.props.pie.toJS());
            this.state.myChartPie.hideLoading();
        }
        console.log('componentDidUpdate')
        // console.log(this.props)
    }
    // shouldComponentUpdate(){
    //     return true;
    // }
    componentWillUpdate(nextProps,nextState){
        if(nextProps.line.getIn(['series','data'])){
            this.state.chartNum=nextProps.line.getIn(['series','data'])[nextProps.line.getIn(['series','data']).length - 1];
            this.state.chartTime=nextProps.line.getIn(['xAxis','data'])[nextProps.line.getIn(['xAxis','data']).length - 1];
            this.state.chartTitle=nextProps.line.getIn(['title','text']);
            this.state.yesterday=nextProps.line.getIn(['xAxis','yesterday']);
        }
    }
    componentWillReceiveProps(nextProps,nextState){
        // debugger;
        // let aadf=nextProps.get('line');
        // let nextP=nextProps.toJS();
        // console.log(nextProps.line.toJS());
        // console.log(nextProps.line.get('series'));
        // console.log(nextProps.line.getIn(['series','data']));
        // console.log(nextProps.line.getIn(['series','data']).length);
        // if(nextProps.line.getIn(['series','data'])){
            // this.setState({
                // this.state.chartNum=nextProps.line.getIn(['series','data'])[nextProps.line.getIn(['series','data']).length - 1],
                // this.state.chartTime=nextProps.line.getIn(['xAxis','data'])[nextProps.line.getIn(['xAxis','data']).length - 1],
                // this.state.chartTitle=nextProps.line.getIn(['title','text']),
                // this.state.yesterday=nextProps.line.getIn(['xAxis','yesterday'])
            // })

            // console.log(nextProps.line.getIn['series','data'])
        // }
        // if(nextProps.line.series.data){
        //     this.state.chartNum = nextProps.line.series.data[nextProps.line.series.data.length - 1];
        //     this.state.chartTime = nextProps.line.xAxis.data[nextProps.line.xAxis.data.length - 1];
        //     this.state.chartTitle = nextProps.line.title.text;
        //     this.setState({
        //         chartNum:nextProps.line.series.data[nextProps.line.series.data.length - 1],
        //         chartTime:nextProps.line.xAxis.data[nextProps.line.xAxis.data.length - 1],
        //         chartTitle:nextProps.line.title.text,
        //         yesterday:nextProps.line.xAxis.yesterday
        //     })
        // }
        
        console.log('componentWillReceiveProps '+new Date().getTime())

        
        //-------------------------
        // let Props =this.props;
        // let option=Props.data;
        // console.log(this.props)
        
        // console.log(this.props.a.pie);
        //有值才执行
        // debugger
        // if(this.props.a.line.xAxis.data){
        //     this.state.myChartLine.setOption(this.props.a.line);
        //     this.state.myChartLine.hideLoading();
        //     //debugger
        //     this.state.myChartPie.setOption(this.props.a.pie);
        //     this.state.myChartPie.hideLoading();
        //     this.state.chartNum = this.props.a.line.series.data[this.props.a.line.series.data.length - 1];
        //     this.state.chartTime = this.props.a.line.xAxis.data[this.props.a.line.xAxis.data.length - 1];
        //     this.state.chartTitle = this.props.a.line.title.text;
        // }

    }

    render(){
        console.log('firstPageChart:'+this.state.test++ +',render,'+new Date().getTime())
        return <div className='chartWrapper'>
            {/*<div className='chartMessage'>
                <p>当前人数：{this.state.chartNum}</p><p>昨日平均客流：2132</p><p>昨日高峰时段：16:30-21:00</p>
            </div>*/}
            <div className='topMessage'>
                <div className='message message1'><div>
                    <p>当前人数：{this.state.chartNum}  { this.state.yesterday.get('increase')+''=='true'?<span className='up'>&nbsp;↑</span> :<span className='down'>&nbsp;↓</span>} </p>
                    <p>昨日此时人数：{this.state.yesterday.get('num')}</p>
                </div></div>
                <div className='message message2'><div>
                    <p>昨日高峰客流：{this.state.yesterday.get('most')}</p>
                    <p>昨日平均客流：{this.state.yesterday.get('avg')}</p>
                </div></div>
                <div className='message message3'><div>
                    <p>昨日高峰时段：{this.state.yesterday.get('timeSection')}</p>
                </div></div>
            </div>


            <div className='panel'>
                <div className='panelHead'>
                    {this.state.chartTitle}</div>
                <div className='panelBody'>
                    <div ref="chartLine" className="chartLine" ></div>
                </div>
            </div>

            <div className="panel">
                <div className='panelHead'>适宜度</div>
                <div className='panelBody'>
                <div ref="chartPie" className="chartPie"></div>
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
const mapStateToProps = state => {
    return {
        line:state.getIn(['a','line']),
        pie:state.getIn(['a','pie'])
    }
}
let Chart = connect(mapStateToProps,FrstPageAction)(_Chart);

// connect(state => ({
//   stuff: state.get('stuff'),
//   otherStuff: state.get('otherStuff')
// })


export default Chart;