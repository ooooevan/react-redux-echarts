import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';





class _cycle extends React.Component {
	constructor(props){
		super(props);
		this.state={
			singleSellerCycleChart:'',
			resizeHandler:'',
			time:'',
			timeList:'',
			numList:''
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.singleSellerCycleInit(this.props.params.id,this.state.time);
   
    let singleSellerCycleChart = ReactDOM.findDOMNode(this.refs.singleSellerCycleChart);
	  this.state.singleSellerCycleChart = echarts.init(singleSellerCycleChart);
    this.state.singleSellerCycleChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerCycleChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		let cycle=nextProps.cycle.toJS()
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time})
			this.props.singleSellerCycleInit(nextProps.params.id,nextState.time);
		}
		let timeList=cycle.xAxis[0].data;
		let numList=cycle.series[0].data;
		this.setState({timeList,numList});
		this.state.singleSellerCycleChart.setOption(cycle);
		this.state.singleSellerCycleChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCycleChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		let {timeList,numList,time} = this.state;
    let rows=[];
    switch(time){
    	case 'day':time='最近一天';break;
    	case 'week':time='最近一周';break;
    	case 'month':time='最近一月';break;
    	case 'year':time='最近一年';break;
    	case 'more':time='开店以来';break;
    	default:let arr=time.split(',');
    		time=arr.join(' 至 ');
    }
    if(timeList){
        timeList.forEach((item,i)=>{
            rows.push(<tr key={i}><td>{time}</td><td>{timeList[i]}</td><td>{numList[i]}</td></tr>)
        })
    }
		return <div>
							<div className="panel">
			    			<div className="panelHead">来访周期</div>
			    			<div className="panelBody">
			    				<div className="singleSellerCycleChart" ref="singleSellerCycleChart"></div>
			          </div>
			  				</div>
			  				<div className='panel'>
			    				<div className="panelHead">顾客客流量</div>
						    			<div className="panelBody">
						    				<table className="Table">
	            				<thead>
	            					<tr><th>时间范围</th><th>来访周期</th><th>人数</th></tr>
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




const mapStateToProps = (state)=>{
  return {
    cycle:state.getIn(['b','cycle'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}

let cycle=connect(mapStateToProps,sellersAction)(_cycle);

export default cycle;