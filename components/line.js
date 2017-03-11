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

// var dataX,dataY;
//   var options={
//         title: { 
//             text: 'xx商场客流量',
//             textAlign:'center',
//             left:'50%',
//             top:'5%',
//             textStyle:{
//                 fontSize:'23'
//             }
//         },
//         // legend:{
//         //     left:'10%'
//         // },
//         // gird:{
//         //     right:'10%',
//         //     padding:'0'
//         // },
//         tooltip: {
//             trigger: 'axis'
//         },
//         xAxis: {
//             data: dataX,
//             type: 'category',
//             name:'时间',
//             boundaryGap: false,
//             onZero:'true',
//             axisTick:{
//                 alignWithLabel:'true'
//             }

//         },
//         // toolbox: {
//         //     left: 'center',
//         //     feature: {
//         //         dataZoom: {
//         //             yAxisIndex: 'none'
//         //         },
//         //         restore: {},
//         //         saveAsImage: {}
//         //     }
//         // },
//         yAxis: {
//             splitLine: {
//                 show: false
//             }
//         },
//         dataZoom: [{
//             startValue: '16:32:024'
//         }, {
//             type: 'inside'
//         }
//         ],
//         series: {
//             name: '人流量',
//             type: 'line',
//             data: dataY,
//             smooth:true,
//             color:['rgba(150,187,223,1)'],
//             // backgroundColor:'rgb(228, 228, 228)',
//             // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,false),
//             // symbol: 'none',
//             // stack: 'a',
//             areaStyle: {
//                 normal: {}
//             },
//             markLine: {
//                 silent: true,
//                 data: [{
//                     yAxis: 100
//                 }, {
//                     yAxis: 200
//                 }, {
//                     yAxis: 300
//                 }, {
//                     yAxis: 400
//                 }]
//             }
//         }
//         }

// const store=redux.createStore(lineReducer,options,redux.applyMiddleware(thunk));

let _Chart = React.createClass({
    getInitialState(){
        return{
            myChart:"",
            timer:"",
            param:'hour'
        }
    },
    componentWillMount(){
    },
    componentDidMount(){
        const data =this.props;
        console.log(data);
        var dom = ReactDOM.findDOMNode(this.refs.chart);
        this.state.myChart = echarts.init(dom);
        this.props.init(this.state.myChart,this.state.param);
        this.state.timer = setInterval(this.start,2000);

    },
    componentWillUnmount(){
        clearInterval(this.state.timer);
    },
    componentDidUpdate(){
    },
    componentWillReceiveProps(){
    },
    start(){
        this.props.change(this.state.myChart)
    },
    adjusting(e){
        console.log(this.props.series.data)
        //点击当前项返回
        if(e.target.className == 'active'){
            return;
        }
        switch(e.target.innerText){
            case "时":
                this.state.param='hour';
                this.props.init(this.state.myChart,this.state.param);
                break;
            case "日":
                this.state.param='day';
                this.props.init(this.state.myChart,this.state.param);
                break;
            case "周":
                this.state.param='week';
                this.props.init(this.state.myChart,this.state.param);
                break;
            case "月":
                this.state.param='month';
                this.props.init(this.state.myChart,this.state.param);
                break;
        
        }
    },
    
    render(){
        return <div className='chartWapper'>
            <div ref="chart" style={{height:"100%",width:"100%"}}></div>
            <ul ref="adjustingBar" className="adjustingBar">
                <span>时间参数&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <li ref="adjustingBar1" className='active' onClick={this.adjusting}>时</li>
                <li ref="adjustingBar2" onClick={this.adjusting}>日</li>
                <li ref="adjustingBar3" onClick={this.adjusting}>周</li>
                <li ref="adjustingBar4" onClick={this.adjusting}>月</li>
                <div className='chartMessage'>
                </div>
            </ul>

        </div>
    }

})

let Line=connect(state=>state,lineAction)(_Chart);

export default Line;
