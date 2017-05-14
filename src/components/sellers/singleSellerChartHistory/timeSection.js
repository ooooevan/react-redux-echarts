import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';

class _stayBar extends React.Component {
	static propTypes = {
		singleSellerTimeSection:React.PropTypes.func.isRequired,
		timeSection:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerTimeSectionChart:'',
			resizeHandler:'',
			time:'',
			timeList:'',
      numList:''
		}
	}
	componentDidMount(){
		// debugger
		this.state.time=this.props.time;
    this.props.singleSellerTimeSection(this.props.params.id,this.state.time);
   
    let singleSellerTimeSectionChart = ReactDOM.findDOMNode(this.refs.singleSellerTimeSectionChart);
	  this.state.singleSellerTimeSectionChart = echarts.init(singleSellerTimeSectionChart);
    this.state.singleSellerTimeSectionChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerTimeSectionChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		let timeSection=nextProps.timeSection.toJS()
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.singleSellerTimeSection(nextProps.params.id,nextState.time);
		}
		let timeList=timeSection.xAxis[0].data;
		let numList=timeSection.series[0].data;
		this.setState({timeList,numList});
		this.state.singleSellerTimeSectionChart.setOption(timeSection);
		this.state.singleSellerTimeSectionChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentDidUpdate(){
		// debugger
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerTimeSectionChart.dispose();
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
				          <div className="panelHead">各时间段人数峰值</div>
					          <div className="panelBody">
											<div className='singleSellerTimeSectionChart' ref='singleSellerTimeSectionChart'></div>
									</div>
				        </div>
				        <div className='panel'>
	  		    				<div className="panelHead">顾客客流量</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间范围</th><th>时间段</th><th>人数</th></tr>
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
  // debugger;
  // let ad=state.toJS()
  // let fdd=state.getIn(['b','customerFlow'])
  // let d=state.getIn(['b','customerFlow']).toJS()
  return {
    // customerFlow:state.getIn(['b','customerFlow'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar'])
    // OldOrNew:state.getIn(['b','OldOrNew'])
    timeSection:state.getIn(['b','timeSection'])
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_stayBar)