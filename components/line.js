/**
 * Created by HH on 2017/3/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
const  redux =require('redux');
import {connect,Provider} from 'react-redux';
import {Table } from 'react-bootstrap';
import thunk from 'redux-thunk';
import echarts from 'echarts';  
import lineAction from '../actions/lineAction';
import lineReducer from '../reducers/lineReducer';
// var echarts = require('echarts/lib/echarts'); //必须
// require('echarts/lib/chart/pie'); //图表类型
// require('echarts/lib/component/title'); //标题插件



// const store=redux.createStore(lineReducer,options,redux.applyMiddleware(thunk));

let _Chart = React.createClass({
    getInitialState(){
        return{
            myChartLine:"",       //chart实例对象line
            myChartPie:"",       //chart实例对象pie
            timer:"",           //定时器
            param:'hour',       //不同时间阀值参数
            optionLine:'',          //得到的chart实例的option参数
            chartNum:'',     //显示当前人数
            chartTime:'',     //显示当前时间
            chartTitle:''    //显示当前标题
        }
    },
    componentWillMount(){
        console.log('componentWillMount')

    },
    componentDidMount(){
        console.log('componentDidMount')
        this.props.init(this.state.param);
        let domLine = ReactDOM.findDOMNode(this.refs.chartLine);
        let domPie = ReactDOM.findDOMNode(this.refs.chartPie);
        // this.state.myChart = echarts.init(dom);
        // this.props.init(this.state.myChart,this.state.param);
        // this.state.timer = setInterval(this.start,2000);
        this.state.myChartLine = echarts.init(domLine);
        this.state.myChartPie = echarts.init(domPie);

        // console.log(this.state.myChart)


    },
    componentWillUnmount(){
        console.log('componentWillUnmount')
        this.state.myChartLine.dispose()   //销毁实例
        this.state.myChartPie.dispose()   //销毁实例
        // clearInterval(this.state.timer);
    },
    componentDidUpdate(){
        // debugger;
        console.log('componentDidUpdate')
        // console.log(this.props)


    },
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
        // let Props =this.props;
        // let option=Props.data;
        // console.log(this.props)
        this.state.optionLine=this.props.line;
        this.state.optionPie=this.props.pie;
        // console.log(this.state.option)
        console.log(this.props.pie);
        this.state.myChartLine.setOption(this.state.optionLine);
        this.state.myChartPie.setOption(this.state.optionPie);
        this.state.chartNum = this.state.optionLine.series.data[this.state.optionLine.series.data.length - 1];
        this.state.chartTime = this.state.optionLine.xAxis.data[this.state.optionLine.xAxis.data.length - 1];
        this.state.chartTitle = this.state.optionLine.title.text;

    },
    // start(){
    //     this.props.change(this.state.myChart)
    // },
    adjusting(e){
        //点击当前项返回
        if(e.target.className == 'active'){
            return;
        }
        switch(e.target.innerText){
            case "时":
                this.state.param='hour';
                this.props.init(this.state.param);
                break;
            case "日":
                this.state.param='day';
                this.props.init(this.state.param);
                break;
            case "周":
                this.state.param='week';
                this.props.init(this.state.param);
                break;
            case "月":
                this.state.param='month';
                this.props.init(this.state.param);
                break;
        
        }
    },
    
    render(){
        // let msg=this.state.option.series.data;
        // let length=this.state.option.series.data.length;
        return <div className='chartWapper'>
            <div className='panel'>
                <div className='panelHead'>{this.state.chartTitle}</div>
                <div className='panelBody'>
                    <div ref="chartLine" style={{height:"100%",width:"100%"}}></div>
                </div>
            </div>
            <ul ref="adjustingBar" className="adjustingBar">
                <span>时间参数&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <li className={this.state.param=='hour'?'active':''} onClick={this.adjusting}>时</li>
                <li className={this.state.param=='day'?'active':''} onClick={this.adjusting}>日</li>
                <li className={this.state.param=='week'?'active':''} onClick={this.adjusting}>周</li>
                <li className={this.state.param=='month'?'active':''} onClick={this.adjusting}>月</li>
                <div className='chartMessage'>
                    <p>最近人数：{this.state.chartNum}</p>
                    <p>最近时间：{this.state.chartTime}</p>
                </div>
            </ul>
            <div className="panel">
                <div ref="chartPie" style={{height:"300%",width:"100%"}}></div>
            </div>
        </div>
    }

})

let Line=connect(state=>state,lineAction)(_Chart);

export default Line;
