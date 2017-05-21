import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _customerAvg extends React.Component {
	static propTypes = {
		singleSellerCustomerAvgInit:React.PropTypes.func.isRequired,
		customerAvg:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerCustomerAvgChart:'',
			resizeHandler:'',
			time:'',
			timeList:'',
      numList:'',
      percentList:'',
      tableSpace:1
		}
	}
	componentDidMount(){
		// console.log('--=componentDidMount')
		this.state.time=this.props.time;
    this.props.singleSellerCustomerAvgInit(this.props.params.id,this.state.time);
   
    let singleSellerCustomerAvgChart = ReactDOM.findDOMNode(this.refs.singleSellerCustomerAvgChart);
	  this.state.singleSellerCustomerAvgChart = echarts.init(singleSellerCustomerAvgChart);
    this.state.singleSellerCustomerAvgChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerCustomerAvgChart.resize();
    }, 100)
	}
	// componentWillReceiveProps(){
		// console.log('--=componentWillReceiveProps')
		// this.state.time=this.props.time;
		
	// }
	// changeTime = ()=>{
	// 	this.props.singleSellerCustomerAvgInit(this.props.params.id,this.state.time);
	// }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')
		// if(this.state.time!=nextProps.time){
		// 	this.state.time=nextProps.time
		// 	this.props.singleSellerCustomerAvgInit(this.props.params.id,this.state.time);
		// }
	// }
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time})
			this.props.singleSellerCustomerAvgInit(nextProps.params.id,nextProps.time);
			return;
		}
		let customerAvg=nextProps.customerAvg.toJS();
		if(customerAvg.series && customerAvg.series[0] && customerAvg.series[0].data && customerAvg.series[0].data[0]){
			let timeList=customerAvg.xAxis.data;
			let numList=customerAvg.series[0].data;
			let percentList=customerAvg.series[1].data;
			this.setState({timeList,numList,percentList});
			this.state.singleSellerCustomerAvgChart.setOption(customerAvg);
			this.state.singleSellerCustomerAvgChart.hideLoading();
		}
	}
	// componentDidUpdate(){
		// console.log('-=componentDidUpdate')
		
	// }
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCustomerAvgChart.dispose();
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
							<div className="panelHead">客流量&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商家在一定时间内的客流平均值及总体占比<br /><strong>客流量</strong>：时间段内客流的平均值<br /><strong>客流总体占比</strong>：时间段内客流占整个商城的比例</p></div></div>
			    			<div className="panelBody">
								<div className='singleSellerCustomerAvgChart' ref='singleSellerCustomerAvgChart'></div>
							</div>
    			</div>
    			<div className='panel'>
    				<div className="panelHead">客流量明细</div>
			    			<div className="panelBody">
			    				<table className="Table">
            				<thead>
            					<tr><th>时间</th><th>客流量</th><th>客流总体占比</th></tr>
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
  // let fdd=state.getIn(['b','customerAvg'])
  // let d=state.getIn(['b','customerAvg']).toJS()
  return {
    customerAvg:state.getIn(['b','customerAvg'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_customerAvg)