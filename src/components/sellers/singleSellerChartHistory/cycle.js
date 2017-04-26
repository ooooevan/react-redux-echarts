import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';





class _cycle extends React.Component {
	constructor(props){
		super(props);
		this.state={
			singleSellerCycleChart:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.singleSellerCycleInit(this.props.params.id,this.state.time);
   
    let singleSellerCycleChart = ReactDOM.findDOMNode(this.refs.singleSellerCycleChart);
	  this.state.singleSellerCycleChart = echarts.init(singleSellerCycleChart);
    this.state.singleSellerCycleChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerCycleChart.resize();
    }, 100)
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.singleSellerCycleInit(this.props.params.id,this.state.time);
		}
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		this.state.singleSellerCycleChart.setOption(this.props.cycle.toJS());
		this.state.singleSellerCycleChart.hideLoading();
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCycleChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return <div>
							<div className="panel">
			    			<div className="panelHead">来访周期</div>
			    			<div className="panelBody">
			    				<div className="singleSellerCycleChart" ref="singleSellerCycleChart"></div>
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
    cycle:state.getIn(['b','cycle'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}

let cycle=connect(mapStateToProps,sellersAction)(_cycle);

export default cycle;