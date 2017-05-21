import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');




class _active extends React.Component {
	constructor(props){
		super(props);
		this.state={
			singleSellerActiveChart:'',
			resizeHandler:'',
			time:'',
			timeList:'',
      numList:'',
      percentList:'',
      tableSpace:1
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.singleSellerActiveInit(this.props.params.id,this.state.time);
   
    let singleSellerActiveChart = ReactDOM.findDOMNode(this.refs.singleSellerActiveChart);
	  this.state.singleSellerActiveChart = echarts.init(singleSellerActiveChart);
    this.state.singleSellerActiveChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerActiveChart.resize();
    }, 100)
	}
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')
		
	// }
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.singleSellerActiveInit(nextProps.params.id,nextProps.time);
      return;
		}
    let active=nextProps.active.toJS();
    if(active.series && active.series[0] && active.series[0].data && active.series[0].data[0]){
      let timeList=active.xAxis[0].data.reverse();
      let numList=active.series[0].data.reverse();
      this.setState({timeList,numList});
      this.state.singleSellerActiveChart.setOption(active);
      this.state.singleSellerActiveChart.hideLoading();
    }
	}
	// componentDidUpdate(){
		// console.log('-=componentDidUpdate')
		
	// }
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerActiveChart.dispose();
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
		    			<div className="panelHead">活跃度&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示在一定时间内店铺的活跃度<br /><strong>高活跃度</strong>：<br /><strong>中活跃度</strong>：<br /><strong>低活跃度</strong>：<br /><strong>沉睡活跃度</strong>：<br /></p></div></div>
		    			<div className="panelBody">
		    				<div className="singleSellerActiveChart" ref="singleSellerActiveChart"></div>
		          </div>
	  				</div>	
	  				<div className='panel'>
  		    				<div className="panelHead">活跃度明细</div>
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




const mapStateToProps = (state)=>{
  return {
    active:state.getIn(['b','active'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}

let active=connect(mapStateToProps,sellersAction)(_active);

export default active;