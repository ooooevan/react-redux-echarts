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





class _deep extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsDeepInit:'',
			resizeHandler:'',
			statisticsDeepChart:'',
			time:'',
			time:'',
			timeList:'',
      numList:'',
      percentList:'',
      tableSpace:1
		}
	}
	componentDidMount(){
		// console.log('componentDidMount')
		this.state.time=this.props.time;
    this.props.statisticsDeepInit(this.state.time);
    let statisticsDeepChart = ReactDOM.findDOMNode(this.refs.statisticsDeepChart);
	  this.state.statisticsDeepChart = echarts.init(statisticsDeepChart);
    this.state.statisticsDeepChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsDeepChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.statisticsDeepInit(nextProps.time);
			return;
		}
		let deep=nextProps.deep.toJS();
		// console.log(deep)
		if(deep.series && deep.series[0].data && deep.series[0].data && deep.series[0].data[0]){
			let timeList=deep.xAxis[0].data;
			let percentList=deep.series[0].data;
			let numList=deep.xAxis[0].num;
			this.setState({timeList,numList,percentList});
			this.state.statisticsDeepChart.setOption(deep);
			this.state.statisticsDeepChart.hideLoading();
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
      this.state.statisticsDeepChart.dispose();
      this.props.stateDefault();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		let {timeList,numList,percentList,tableSpace} = this.state;
    let rows=[];
    if(timeList){
        timeList.forEach((item,i)=>{
            if(!(i%tableSpace)){
                rows.push(<tr key={i}><td>{timeList[i]}</td><td>{numList[i]}</td><td>{percentList[i]}%</td></tr>)
            }
        })
    }
		return	<div>
			<div className="panel">
			    			<div className="panelHead">深访率&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示一定时间内深访商城的数量及比例<br /><strong>深访</strong>：停留时长超过{}分钟的顾客</p></div></div>
			    			<div className="panelBody">
			    				<div className="statisticsDeepChart" ref="statisticsDeepChart"></div>
			          </div>
	  				</div>
	  				<div className='panel'>
  		    				<div className="panelHead">深访率明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>深访量</th><th>深访率</th></tr>
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
    deep:state.getIn(['c','deep'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
})

let deep=connect(mapStateToProps,statisticsAction)(_deep);

export default deep;