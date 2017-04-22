import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';

import sellersAction from '../../actions/sellersAction';

class _Chart extends React.Component {
	static propTypes = {
        params: React.PropTypes.object.isRequired,   //商店id，这里为数字
        singleSellerCustomerNumInit: React.PropTypes.func.isRequired,
        singleSellerCustomerNumFetch:React.PropTypes.func.isRequired,
        customerNum:React.PropTypes.instanceOf(Immutable.Map)
    };

    constructor(props){
        super(props);
        this.state={
		singleSellerCustomerNumChart:'',  //商家图表
      	time:'hour',   //时间参数
      	param:'',   //路由参数
      	name:'',  //商家名
      	timer:'',    //定时器
      	timerTime:1000*5,       //时间间隔
        resizeHandler:null
        }

    }

    componentDidMount(){
    	// debugger
    	let id=this.props.params.id  //获取该商店id
    	this.props.singleSellerCustomerNumInit(id,this.state.time);

    	let domLine = ReactDOM.findDOMNode(this.refs.singleSellerCustomerNumChart);
    	this.state.singleSellerCustomerNumChart = echarts.init(domLine);
        this.state.singleSellerCustomerNumChart.showLoading();

    	//定时刷新
		this.state.timer = setInterval(this.fetchData,this.state.timerTime)

        window.addEventListener('resize',this.resizeFun);
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.singleSellerCustomerNumChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.singleSellerCustomerNumChart.resize();
                   this.state.singleSellerCustomerNumChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUpdate(nextProps,nextState){
          // 判断请求回来时是否刚好换了商家，也就是防止上一个fetch数据合并到下一个商家里。这里处理还是ShouldComponentUpdate？
        if(this.props.params !== nextProps.params){
            return;
        }else{
            // this.setState({
                //改变商家名字
                this.props.changeSellerName(nextProps.customerNum.get('name'));
                // this.state.name=nextProps.customerNum.get('name');
            // })
        }
    }
	componentDidUpdate(){
        // debugger;
        let par=this.props.params;
        
		/*用上次存的路由和这次比较，不为空且不同的话表示在不同商家间跳转*/
		if(this.state.param && this.state.param !== this.props.params.id){
			clearInterval(this.state.timer);
			this.props.singleSellerCustomerNumInit(this.props.params.id,this.state.time);
			this.state.timer = setInterval(this.fetchData,this.state.timerTime);
        }
		this.state.param=this.props.params.id;


		this.state.singleSellerCustomerNumChart.setOption(this.props.customerNum.toJS());
        this.state.singleSellerCustomerNumChart.hideLoading();
        
	}
    componentWillReceiveProps(nextProps,nextState){
      
        
    }
	componentWillUnmount(){
		console.log('componentWillUnmount...')
		clearInterval(this.state.timer);
		this.state.singleSellerCustomerNumChart.dispose()
        window.removeEventListener('resize',this.resizeFun);

	}
	fetchData = ()=>{
		// debugger
	
		this.props.singleSellerCustomerNumFetch(this.props.params.id)
	}
    render(){
    	return <div className="panelWrapper">
             {/*<p>{this.state.name}</p>*/}
             <div className='topMessage'>
                <div className='message message1'><div>
                    <p>当前人数：  {+''=='true'?<span className='up'>&nbsp;↑</span> :<span className='down'>&nbsp;↓</span>} </p>
                    <p>昨日此时人数：</p>
                </div></div>
                <div className='message message2'><div>
                    <p>昨日高峰客流：</p>
                    <p>昨日平均客流：</p>
                </div></div>
                <div className='message message3'><div>
                    <p>店铺地址：5F-542a</p>
                    <p>店铺类型：服装类</p>
                </div></div>
            </div>
    		<div className="panel">
    			<div className="panelHead">门前客流量</div>
    			<div className="panelBody">
    				<div className="singleSellerCustomerNumChart" ref="singleSellerCustomerNumChart"></div>
			         <p>
                        当前实时客流数据
                     </p>
                     <table className="firstTable">
                        <thead>
                            <tr><th>时间</th><th>8:00</th><th>9:00</th><th>10:00</th><th>11:00</th><th>12:00</th><th>13:00</th><th>14:00</th><th>15:00</th><th>16:00</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>门前客流量</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td></tr>
                            <tr><td>入店量</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td></tr>
                            <tr><td>入店率</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td><td>654</td><td>754</td><td>654</td></tr>
                        </tbody>
                    </table>
                </div>
    		</div>
            {/*
            <div className="panel">
                <div className="panelHead">商家简介</div>
                <div className="panelBody">
                    <div className="singleSellerIntroduction" ref="singleSellerIntroduction"></div>
                </div>
            </div>
            */}
    	</div>
    }
}
const mapStateToProps = (state)=>{
    return {
        customerNum:state.getIn(['b','customerNum'])
    }
}

let Chart=connect(mapStateToProps,sellersAction)(_Chart);
export default Chart;