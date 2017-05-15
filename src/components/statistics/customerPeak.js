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





class _customerPeak extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsPeakInit:'',
			resizeHandler:'',
			statisticsPeakChart:'',
			time:'',
			time:'',
			timeList:'',
      numList:'',
      tableSpace:1
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.statisticsPeakInit(this.state.time);
    let statisticsPeakChart = ReactDOM.findDOMNode(this.refs.statisticsPeakChart);
	  this.state.statisticsPeakChart = echarts.init(statisticsPeakChart);
    this.state.statisticsPeakChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsPeakChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.statisticsPeakInit(nextProps.time);
			return;
		}
		let customerPeak=nextProps.customerPeak.toJS();
		let timeList=customerPeak.xAxis[0].data;
		let numList=customerPeak.series[0].data;
		this.setState({timeList,numList});
		this.state.statisticsPeakChart.setOption(customerPeak);
		this.state.statisticsPeakChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.statisticsPeakChart.dispose();
      this.props.stateDefault();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		let {timeList,numList,tableSpace} = this.state;
    let rows=[];
    if(timeList){
        timeList.forEach((item,i)=>{
            if(!(i%tableSpace)){
                rows.push(<tr key={i}><td>{timeList[i]}</td><td>{numList[i]}</td></tr>)
            }
        })
    }
		return	<div>
			<div className="panel">
			    			<div className="panelHead">客流量峰值&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城在一定时间内的客流峰值<br /></p></div></div>
			    			<div className="panelBody">
			    				<div className="statisticsPeakChart" ref="statisticsPeakChart"></div>
			          </div>
	  				</div>
	  				<div className='panel'>
  		    				<div className="panelHead">客流量峰值明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>峰值人数</th></tr>
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
    customerPeak:state.getIn(['c','customerPeak'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
})

let customerPeak=connect(mapStateToProps,statisticsAction)(_customerPeak);

export default customerPeak;