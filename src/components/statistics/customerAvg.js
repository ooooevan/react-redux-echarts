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





class _customerAvg extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsAvgInit:'',
			resizeHandler:'',
			statisticsAvgChart:'',
			time:'',
			time:'',
			timeList:'',
      numList:'',
      tableSpace:1
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.statisticsAvgInit(this.state.time);
    let statisticsAvgChart = ReactDOM.findDOMNode(this.refs.statisticsAvgChart);
	  this.state.statisticsAvgChart = echarts.init(statisticsAvgChart);
    this.state.statisticsAvgChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsAvgChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.statisticsAvgInit(nextProps.time);
			return;
		}
		let customerAvg=nextProps.customerAvg.toJS();
		if( customerAvg.series[0] && customerAvg.series[0].data && customerAvg.series[0].data[0]){
			let timeList=customerAvg.xAxis[0].data;
			let numList=customerAvg.series[0].data;
			this.setState({timeList,numList});
			this.state.statisticsAvgChart.setOption(customerAvg);
			this.state.statisticsAvgChart.hideLoading();
		}
	}
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')
		
	// }
	// componentDidUpdate(){
		// console.log('-=componentDidUpdate')
		
	// }
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.statisticsAvgChart.dispose();
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
			    			<div className="panelHead">客流量&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城在一定时间内的客流平均值<br /></p></div></div>
			    			<div className="panelBody">
			    				<div className="statisticsAvgChart" ref="statisticsAvgChart"></div>
			          </div>
	  				</div>
	  				<div className='panel'>
  		    				<div className="panelHead">客流量明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>人数</th></tr>
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
    customerAvg:state.getIn(['c','customerAvg'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
})

let customerAvg=connect(mapStateToProps,statisticsAction)(_customerAvg);

export default customerAvg;