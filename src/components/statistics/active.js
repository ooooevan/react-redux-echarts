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





class _active extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsActiveInit:'',
			resizeHandler:'',
			statisticsActiveChart:'',
			time:''
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.statisticsActiveInit(this.state.time);
   
    let statisticsActiveChart = ReactDOM.findDOMNode(this.refs.statisticsActiveChart);
	  this.state.statisticsActiveChart = echarts.init(statisticsActiveChart);
    this.state.statisticsActiveChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsActiveChart.resize();
    }, 100)
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.statisticsActiveInit(this.state.time);
		}
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		this.state.statisticsActiveChart.setOption(this.props.active.toJS());
		this.state.statisticsActiveChart.hideLoading();
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.statisticsActiveChart.dispose();
      this.props.stateDefault();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return	<div>
			<div className="panel">
			    			<div className="panelHead">活跃度</div>
			    			<div className="panelBody">
			    				<div className="statisticsActiveChart" ref="statisticsActiveChart"></div>
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




const mapStateToProps = (state)=>{
  return {
    active:state.getIn(['c','active']),
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}

let active=connect(mapStateToProps,statisticsAction)(_active);

export default active;