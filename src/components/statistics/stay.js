import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import Calendar from '../calendar';
import statisticsAction from '../../actions/statisticsAction';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
const FaQuestion = require('react-icons/lib/fa/question');





class _stay extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsStayChart:'',
			resizeHandler:'',
			time:'',
			timeList:'',
      numList:'',
      tableSpace:1
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.statisticsStayInit(this.state.time);
   
    let statisticsStayChart = ReactDOM.findDOMNode(this.refs.statisticsStayChart);
	  this.state.statisticsStayChart = echarts.init(statisticsStayChart);
    this.state.statisticsStayChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsStayChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.statisticsStayInit(nextProps.time);
			return;
		}
		let stay=nextProps.stay.toJS();
		let timeList=stay.xAxis[0].data;
		let numList=stay.series[0].data;
		this.setState({timeList,numList});
		this.state.statisticsStayChart.setOption(stay);
		this.state.statisticsStayChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.statisticsStayChart.dispose();
      this.props.stateDefault();
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
		return	<div>
			<div className="panel">
			    			<div className="panelHead">停留时长&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城在一定时间内的顾客的停留时长<br /></p></div></div>
			    			<div className="panelBody">
			    				<div className="statisticsStayChart" ref="statisticsStayChart"></div>
			          </div>
	  				</div>
	  				<div className='panel'>
  		    				<div className="panelHead">停留时长明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间范围</th><th>活跃度</th><th>人数</th></tr>
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




const mapStateToProps = (state)=>({
    stay:state.getIn(['c','stay']),
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
})

let stay=connect(mapStateToProps,statisticsAction)(_stay);

export default stay;