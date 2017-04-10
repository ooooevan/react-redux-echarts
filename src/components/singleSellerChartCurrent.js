import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';

import sellersAction from '../actions/sellersAction';

class _Chart extends React.Component {
	static propTypes = {
        params: React.PropTypes.object.isRequired,   //商店id，这里为数字
        singleSellerCustomerNumInit: React.PropTypes.func.isRequired,
        b: React.PropTypes.object.isRequired       //包含lineAndBar和table的数据
    };

    constructor(props){
        super(props);
        this.state={
				singleSellerCustomerNumChart:'',  //商家图表
      	time:'hour',   //时间参数
      	param:'',   //路由参数
      	name:'',  //商家名
      	timer:'',    //定时器
      	timerTime:1000*5       //时间间隔
        }

    }

    componentDidMount(){
    	// debugger
    	let id=this.props.params.id  //获取该商店id
    	this.props.singleSellerCustomerNumInit(id,this.state.time);
    	let domLine = ReactDOM.findDOMNode(this.refs.singleSellerCustomerNumChart);
    	this.state.singleSellerCustomerNumChart = echarts.init(domLine);

    	//定时刷新
			this.state.timer = setInterval(this.fetchData,this.state.timerTime)

    }
		componentWillReceiveProps(){
			// debugger;
			// console.log('---看state和params')
			// console.log(this.state.param)
			// this.state.param=this.props.params.id;
			// console.log(this.props.params.id)

			/*用上次存的路由和这次比较，不为空且不同的话表示在不同商家间跳转*/
			if(this.state.param && this.state.param !== this.props.params.id){
				clearInterval(this.state.timer);
				this.props.singleSellerCustomerNumInit(this.props.params.id,this.state.time);
				this.state.timer = setInterval(this.fetchData,this.state.timerTime);
			}
			this.state.param=this.props.params.id;


			// this.state.singleSellerLineOption=this.props.b.lineAndLine;
			this.state.singleSellerCustomerNumChart.setOption(this.props.b.customerNum);
			this.state.name = this.props.b.customerNum.name
		}
		componentWillUnmount(){
			console.log('componentWillUnmount...')
			clearInterval(this.state.timer);
			this.state.singleSellerCustomerNumChart.dispose()

		}
		fetchData = ()=>{
			// debugger
		
			this.props.singleSellerCustomerNumFetch(this.props.params.id)
		}
    render(){

    	return <div className="panelWrapper">
             <p>{this.state.name}</p>
    		<div className="panel">
    			<div className="panelHead">门前客流量</div>
    			<div className="panelBody">
    				<div className="singleSellerCustomerNumChart" ref="singleSellerCustomerNumChart"></div>
    			</div>
    		</div>

    	</div>
    }
}
let Chart=connect(state=>state,sellersAction)(_Chart);

export default Chart;