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
			id:0,
			test:1
		}
	}
	componentDidMount(){
		// debugger
		this.state.id = this.props.id  //获取该商店id
    this.props.singleSellerCustomerFlowInit(this.state.id,this.state.time);
   
    let singleSellerCustomerFlowChart = ReactDOM.findDOMNode(this.refs.singleSellerCustomerFlowChart);
	  this.state.singleSellerCustomerFlowChart = echarts.init(singleSellerCustomerFlowChart);
    this.state.singleSellerCustomerFlowChart.showLoading();

	}
	componentWillReceiveProps(){
		// debugger
	}
	componentDidUpdate(){
		// debugger
		this.state.singleSellerCustomerFlowChart.setOption(this.props.customerFlow.toJS());
		this.state.singleSellerCustomerFlowChart.hideLoading();
	}
	render(){
		console.log('子-----'+this.state.test++ +'   :'+new Date().getTime());
		return <div className='singleSellerCustomerFlowChart' ref='singleSellerCustomerFlowChart'></div>
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