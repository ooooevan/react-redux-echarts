import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';

class _customerFlow extends React.Component {
	static propTypes = {
		singleSellerCustomerFlowInit:React.PropTypes.func.isRequired,
		customerFlow:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerCustomerFlowChart:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		console.log('--=componentDidMount')
		this.state.time=this.props.time;
    this.props.singleSellerCustomerFlowInit(this.props.params.id,this.state.time);
   
    let singleSellerCustomerFlowChart = ReactDOM.findDOMNode(this.refs.singleSellerCustomerFlowChart);
	  this.state.singleSellerCustomerFlowChart = echarts.init(singleSellerCustomerFlowChart);
    this.state.singleSellerCustomerFlowChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerCustomerFlowChart.resize();
    }, 100)
	}
	componentWillReceiveProps(){
		console.log('--=componentWillReceiveProps')
		// this.state.time=this.props.time;
		
	}
	// changeTime = ()=>{
	// 	this.props.singleSellerCustomerFlowInit(this.props.params.id,this.state.time);
	// }
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.singleSellerCustomerFlowInit(this.props.params.id,this.state.time);
		}
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		this.state.singleSellerCustomerFlowChart.setOption(this.props.customerFlow.toJS());
		this.state.singleSellerCustomerFlowChart.hideLoading();
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCustomerFlowChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		console.log('-=render')
		return <div> 
						<div className="panel">
							<div className="panelHead">顾客客流量</div>
			    			<div className="panelBody">
								<div className='singleSellerCustomerFlowChart' ref='singleSellerCustomerFlowChart'></div>
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
									<div>
								</div>
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
    customerFlow:state.getIn(['b','customerFlow'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_customerFlow)