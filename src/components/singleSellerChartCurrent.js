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
        singleSellerLineChartInit: React.PropTypes.func.isRequired,
        b: React.PropTypes.object.isRequired       //包含lineAndBar和table的数据
    };

    constructor(props){
        super(props);
        this.state={
			singleSellerLineChart:'',  //商家图表
        	singleSellerLineOption:'',    //option参数
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
    	this.props.singleSellerLineChartInit(id,this.state.time);
    	let domLine = ReactDOM.findDOMNode(this.refs.singleSellerLineChart);
    	this.state.singleSellerLineChart = echarts.init(domLine);
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
				this.props.singleSellerLineChartInit(this.props.params.id,this.state.time);
				this.state.timer = setInterval(this.fetchData,this.state.timerTime);
			}
			this.state.param=this.props.params.id;


			this.state.singleSellerLineOption=this.props.b.lineAndLine;
			this.state.singleSellerLineChart.setOption(this.state.singleSellerLineOption);
			this.setState({
				name:this.props.b.lineAndLine.name
			})
		}
		componentWillUnmount(){
			console.log('componentWillUnmount...')
			clearInterval(this.state.timer);
			this.state.singleSellerLineChart.dispose()

		}
		fetchData = ()=>{
			// if(this.state.timer){
			// 	clearInterval(this.state.timer);
			// }
			this.props.singleSellerLineChartFetch(this.props.params.id)
		}
    render(){

    	return <div className="panelWrapper">
             <p>{this.state.name}</p>
    		<div className="panel">
    			<div className="panelHead">入店顾客</div>
    			<div className="panelBody">
    				<div className="singleSellerLineChart" ref="singleSellerLineChart"></div>
    			</div>
    		</div>

    	</div>
    }
}
let Chart=connect(state=>state,sellersAction)(_Chart);

export default Chart;