import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

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
			time:'',
			timeList:'',
      numList:'',
      percentList:'',
      tableSpace:1
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
	// componentWillReceiveProps(){
		// console.log('--=componentWillReceiveProps')
		// this.state.time=this.props.time;
		
	// }
	// changeTime = ()=>{
	// 	this.props.singleSellerCustomerFlowInit(this.props.params.id,this.state.time);
	// }
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		// if(this.state.time!=nextProps.time){
		// 	this.state.time=nextProps.time
		// 	this.props.singleSellerCustomerFlowInit(this.props.params.id,this.state.time);
		// }
	}
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time})
			this.props.singleSellerCustomerFlowInit(nextProps.params.id,nextProps.time);
		}

		let customerFlow=nextProps.customerFlow.toJS();
		let timeList=customerFlow.xAxis.data;
		let numList=customerFlow.series[0].data;
		let percentList=customerFlow.series[1].data;
		this.setState({timeList,numList,percentList});
		if(customerFlow.series[0].data){
			this.state.singleSellerCustomerFlowChart.setOption(customerFlow);
			this.state.singleSellerCustomerFlowChart.hideLoading();
		}
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCustomerFlowChart.dispose();
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
		return <div> 
						<div className="panel">
							<div className="panelHead">客流量峰值&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商家在一定时间内的客流峰值及总体占比<br /><strong>客流峰值</strong>：时间段内客流最高的值<br /><strong>客流总体占比</strong>：时间段内客流占整个商城的比例</p></div></div>
			    			<div className="panelBody">
								<div className='singleSellerCustomerFlowChart' ref='singleSellerCustomerFlowChart'></div>
							</div>
    			</div>
    			<div className='panel'>
    				<div className="panelHead">客流量峰值明细</div>
			    			<div className="panelBody">
			    				<table className="Table">
            				<thead>
            					<tr><th>时间</th><th>客流量峰值</th><th>客流总体占比</th></tr>
            				</thead>
            				<tbody>
            				{rows}
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