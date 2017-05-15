import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _customerIn extends React.Component {
	static propTypes = {
		singleSellerCustomerInInit:React.PropTypes.func.isRequired,
		customerIn:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerCustomerInChart:'',
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
    this.props.singleSellerCustomerInInit(this.props.params.id,this.state.time);
   
    let singleSellerCustomerInChart = ReactDOM.findDOMNode(this.refs.singleSellerCustomerInChart);
	  this.state.singleSellerCustomerInChart = echarts.init(singleSellerCustomerInChart);
    this.state.singleSellerCustomerInChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerCustomerInChart.resize();
    }, 100)
	}

	// changeTime = ()=>{
	// 	this.props.singleSellerCustomerFlowInit(this.props.params.id,this.state.time);
	// }
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentWillReceiveProps(nextProps,nextState){
		console.log('--=componentWillReceiveProps')
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.singleSellerCustomerFlowInit(nextProps.params.id,nextProps.time);
		}
		let customerIn=nextProps.customerIn.toJS();
		let timeList=customerIn.xAxis.data;
		let numList=customerIn.series[0].data;
		let percentList=customerIn.series[1].data;
		this.setState({timeList,numList,percentList});
		// if(customerIn.series[0].data){
			this.state.singleSellerCustomerInChart.setOption(customerIn);
			this.state.singleSellerCustomerInChart.hideLoading();
		// }
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCustomerInChart.dispose();
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
							<div className="panelHead">商店入店量&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商家在一定时间内的入店量及入店率<br /><strong>入店量</strong>：时间段内进入商店的人数<br /><strong>入店率</strong>：时间段内，从进入店铺内的客流量与店铺门口经过的客流量的比率。</p></div></div>
			    			<div className="panelBody">
								<div className='singleSellerCustomerInChart' ref='singleSellerCustomerInChart'></div>
							</div>
    			</div>
    			<div className='panel'>
    				<div className="panelHead">商店入店量明细</div>
			    			<div className="panelBody">
			    				<table className="Table">
            				<thead>
            					<tr><th>时间</th><th>入店量</th><th>入店率</th></tr>
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
    customerIn:state.getIn(['b','customerIn'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_customerIn)