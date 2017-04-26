import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';

class _radar extends React.Component {
	static propTypes = {
		singleSellerRadar:React.PropTypes.func.isRequired,
		radar:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerRadarChart:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		// debugger
		this.state.time=this.props.time;
    this.props.singleSellerRadar(this.props.params.id,this.state.time);
   
    let singleSellerRadarChart = ReactDOM.findDOMNode(this.refs.singleSellerRadarChart);
	  this.state.singleSellerRadarChart = echarts.init(singleSellerRadarChart);
    this.state.singleSellerRadarChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerRadarChart.resize();
    }, 100)
	}
	componentWillReceiveProps(){
		// debugger
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.singleSellerRadar(this.props.params.id,this.state.time);
		}
	}
	componentDidUpdate(){
		// debugger
		this.state.singleSellerRadarChart.setOption(this.props.radar.toJS());
		this.state.singleSellerRadarChart.hideLoading();
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerRadarChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return <div>
					<div className="panel">
		          <div className="panelHead">总体评价</div>
		         	 <div className="panelBody">
								<div className='singleSellerRadarChart' ref='singleSellerRadarChart'></div>
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
  // debugger;
  // let ad=state.toJS()
  // let fdd=state.getIn(['b','customerFlow'])
  // let d=state.getIn(['b','customerFlow']).toJS()
  return {
    // customerFlow:state.getIn(['b','customerFlow'])
    radar:state.getIn(['b','radar'])
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_radar)