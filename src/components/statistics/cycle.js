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





class _cycle extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsCustomerNumInit:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.statisticsCycleInit(this.state.time);
   
    let statisticsCycleChart = ReactDOM.findDOMNode(this.refs.statisticsCycleChart);
	  this.state.statisticsCycleChart = echarts.init(statisticsCycleChart);
    this.state.statisticsCycleChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsCycleChart.resize();
    }, 100)
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.statisticsCycleInit(this.state.time);
		}
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		this.state.statisticsCycleChart.setOption(this.props.cycle.toJS());
		this.state.statisticsCycleChart.hideLoading();
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.statisticsCycleChart.dispose();
      this.props.stateDefault();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return	<div>
				<div className="panel">
		    			<div className="panelHead">来访周期</div>
		    			<div className="panelBody">
		    				<div className="statisticsCycleChart" ref="statisticsCycleChart"></div>
		          </div>
  				</div>
  				<div className='panel'>
  		    				<div className="panelHead">顾客客流量</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>排名</th><th>商店名称</th><th>平均客流</th><th>环比增幅</th></tr>
              				</thead>
              				<tbody>
              				</tbody>
              			</table>
  								</div>
      			</div>
			</div>
	}
}




const mapStateToProps = (state)=>({
    cycle:state.getIn(['c','cycle']),
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
})

let cycle=connect(mapStateToProps,statisticsAction)(_cycle);

export default cycle;