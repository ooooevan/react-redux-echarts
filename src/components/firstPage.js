/**
 * Created by HH on 2017/3/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
const  redux =require('redux');
import {connect,Provider} from 'react-redux';
// import {Table } from 'react-bootstrap';
import thunk from 'redux-thunk';
// import echarts from 'echarts';  
//import lineAction from '../actions/lineAction';
import lineReducer from '../reducers/lineReducer';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

// var echarts = require('echarts/lib/echarts'); //必须
// require('echarts/lib/chart/pie'); //图表类型
// require('echarts/lib/component/title'); //标题插件



class SidebarNav extends React.Component {
    constructor(props){
        super(props);
    }


/*<ul className='sidebar_subNav'>
 <li><Link to='firstPage/chart' className='subNav_li' draggable="false">一层客流量</Link></li>
 <li><Link to='firstPage/b' className='subNav_li' draggable="false">二层客流量</Link></li>
 <li><Link to='firstPage/c' className='subNav_li' draggable="false">三层客流量</Link></li>
 </ul>*/
    render(){
        return <div id='sidebar_nav'>
            <ul>
                <li><Link to='firstPage/total' activeClassName="active" draggable="false"><i className='fa fa-area-chart' aria-hidden="true"></i>当前总客流 <i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='firstPage/firstFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>各商家客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='firstPage/firstFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>一层客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='firstPage/secondFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>二层客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
                <li><Link to='firstPage/thirdFloor' activeClassName="active" draggable="false"><i className='fa fa-tachometer' aria-hidden="true"></i>三层客流<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
            </ul>
        </div>
    }
}

/*

    <li><Link href='javascript:' activeClassName="active" draggable="false"><i className='fa fa-bar-chart' aria-hidden="true"></i>商场排名<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
    <li><Link href='javascript:' activeClassName="active" draggable="false"><i className='fa fa-adjust' aria-hidden="true"></i>新老顾客<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>
    <li><Link href='javascript:' activeClassName="active" draggable="false"><i className='fa fa-adjust' aria-hidden="true"></i>顾客活跃度<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>

*/


//let _Chart = React.createClass({
//    getInitialState(){
//        return{
//            myChartLine:"",       //chart实例对象line
//            myChartPie:"",       //chart实例对象pie
//            timer:"",           //定时器
//            param:'hour',       //不同时间阀值参数
//            optionLine:'',          //得到的chart实例的option参数
//            chartNum:'',     //显示当前人数
//            chartTime:'',     //显示当前时间
//            chartTitle:''    //显示当前标题
//        }
//    },
//    componentWillMount(){
//        console.log('componentWillMount')
//
//    },
//    componentDidMount(){
//        console.log('componentDidMount')
//        this.props.init(this.state.param);
//        let domLine = ReactDOM.findDOMNode(this.refs.chartLine);
//        let domPie = ReactDOM.findDOMNode(this.refs.chartPie);
//        // this.state.myChart = echarts.init(dom);
//        // this.props.init(this.state.myChart,this.state.param);
//        // this.state.timer = setInterval(this.start,2000);
//        this.state.myChartLine = echarts.init(domLine);
//        this.state.myChartPie = echarts.init(domPie);
//
//        // console.log(this.state.myChart)
//
//
//    },
//    componentWillUnmount(){
//        console.log('componentWillUnmount')
//        this.state.myChartLine.dispose()   //销毁实例
//        this.state.myChartPie.dispose()   //销毁实例
//        // clearInterval(this.state.timer);
//    },
//    componentDidUpdate(){
//        // debugger;
//        console.log('componentDidUpdate')
//        // console.log(this.props)
//
//
//    },
//    componentWillReceiveProps(){
//        console.log('componentWillReceiveProps')
//        // let Props =this.props;
//        // let option=Props.data;
//        // console.log(this.props)
//        this.state.optionLine=this.props.line;
//        this.state.optionPie=this.props.pie;
//        // console.log(this.state.option)
//        console.log(this.props.pie);
//        this.state.myChartLine.setOption(this.state.optionLine);
//        this.state.myChartPie.setOption(this.state.optionPie);
//        this.state.chartNum = this.state.optionLine.series.data[this.state.optionLine.series.data.length - 1];
//        this.state.chartTime = this.state.optionLine.xAxis.data[this.state.optionLine.xAxis.data.length - 1];
//        this.state.chartTitle = this.state.optionLine.title.text;
//
//    },
//    // start(){
//    //     this.props.change(this.state.myChart)
//    // },
//    adjusting(e){
//        //点击当前项返回
//        if(e.target.className == 'active'){
//            return;
//        }
//        switch(e.target.innerText){
//            case "时":
//                this.state.param='hour';
//                this.props.init(this.state.param);
//                break;
//            case "日":
//                this.state.param='day';
//                this.props.init(this.state.param);
//                break;
//            case "周":
//                this.state.param='week';
//                this.props.init(this.state.param);
//                break;
//            case "月":
//                this.state.param='month';
//                this.props.init(this.state.param);
//                break;
//
//        }
//    },
//
//    render(){
//        // let msg=this.state.option.series.data;
//        // let length=this.state.option.series.data.length;
//        return <div className='chartWrapper'>
//            <div className='panel'>
//                <div className='panelHead'>{this.state.chartTitle}</div>
//                <div className='panelBody'>
//                    <div ref="chartLine" style={{height:"100%",width:"100%"}}></div>
//                </div>
//            </div>
//            <ul ref="adjustingBar" className="adjustingBar">
//                <span>时间参数&nbsp;&nbsp;&nbsp;&nbsp;</span>
//                <li className={this.state.param=='hour'?'active':''} onClick={this.adjusting}>时</li>
//                <li className={this.state.param=='day'?'active':''} onClick={this.adjusting}>日</li>
//                <li className={this.state.param=='week'?'active':''} onClick={this.adjusting}>周</li>
//                <li className={this.state.param=='month'?'active':''} onClick={this.adjusting}>月</li>
//                <div className='chartMessage'>
//                    <p>最近人数：{this.state.chartNum}</p>
//                    <p>最近时间：{this.state.chartTime}</p>
//                </div>
//            </ul>
//            <div className="panel">
//                <div ref="chartPie" style={{height:"300%",width:"100%"}}></div>
//            </div>
//        </div>
//    }
//
//})
//let Chart = connect(state=>state,lineAction)(_Chart);
let _FirstPage=React.createClass({
    render(){
        return <div id="container">
            <SidebarNav />
            {this.props.children}
        </div>;
    }
})
let FirstPage=connect(state=>state,null)(_FirstPage);

export default FirstPage;
