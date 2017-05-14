import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

import sellersAction from '../../../actions/sellersAction';

class _deepVisit extends React.Component {
	static propTypes = {
		singleSellerDeepVisit:React.PropTypes.func.isRequired,
		deepVisit:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerDeepVisitChart:'',
			resizeHandler:'',
			time:'',
			timeList:'',
			deepList:'',
			deepPercentList:'',
			outList:'',
			outPercentList:''
		}
	}
	componentDidMount(){
		// debugger
		this.state.time=this.props.time;
    this.props.singleSellerDeepVisit(this.props.params.id,this.state.time);
   
    let singleSellerDeepVisitChart = ReactDOM.findDOMNode(this.refs.singleSellerDeepVisitChart);
	  this.state.singleSellerDeepVisitChart = echarts.init(singleSellerDeepVisitChart);
    this.state.singleSellerDeepVisitChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerDeepVisitChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		let deep=nextProps.deepVisit.toJS()
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.singleSellerDeepVisit(nextProps.params.id,nextState.time);
		}
		// if(deep.series[0].data){
			let timeList=deep.xAxis.data;
			let deepList=deep.xAxis.deepNum;
			let deepPercentList=deep.series[0].data;
			let outList=deep.xAxis.outNum;
			let outPercentList=deep.series[1].data;
			this.setState({timeList,deepList,deepPercentList,outList,outPercentList});
			this.state.singleSellerDeepVisitChart.setOption(deep);
			this.state.singleSellerDeepVisitChart.hideLoading();
		// }

	}
	componentDidUpdate(){
		
		
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		// debugger
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerDeepVisitChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		let {timeList,deepList,deepPercentList,outList,outPercentList} = this.state;
    let rows=[];
    if(timeList){
        timeList.forEach((item,i)=>{
          rows.push(<tr key={i}><td>{timeList[i]}</td><td>{deepList[i]}</td><td>{deepPercentList[i]}%</td><td>{outList[i]}</td><td>{outPercentList[i]}%</td></tr>)
        })
    }
		return <div>
		<div className="panel">
			          <div className="panelHead">深访率</div>
				          <div className="panelBody">
										<div className='singleSellerDeepVisitChart' ref='singleSellerDeepVisitChart'></div>
									</div>
									</div>
				        <div className='panel'>
  		    				<div className="panelHead">顾客客流量</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>深访人数</th><th>深访率</th><th>跳出人数</th><th>深访率</th></tr>
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
  // debugger;
  // let ad=state.toJS()
  // let fdd=state.getIn(['b','customerFlow'])
  // let d=state.getIn(['b','customerFlow']).toJS()
  // return {
    // customerFlow:state.getIn(['b','customerFlow'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar'])
    // OldOrNew:state.getIn(['b','OldOrNew'])
    // timeSection:state.getIn(['b','timeSection'])
    deepVisit:state.getIn(['b','deepVisit'])
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    // }
})


export default connect(mapStateToProps,sellersAction)(_deepVisit)