import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _stayBar extends React.Component {
	static propTypes = {
		singleSellerCycleAndActive:React.PropTypes.func.isRequired,
		cycleAndActive:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerCycleAndActiveChart:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		// debugger
		this.state.time=this.props.time;
    this.props.singleSellerCycleAndActive(this.props.params.id,this.state.time);
   
    let singleSellerCycleAndActiveChart = ReactDOM.findDOMNode(this.refs.singleSellerCycleAndActiveChart);
	  this.state.singleSellerCycleAndActiveChart = echarts.init(singleSellerCycleAndActiveChart);
    this.state.singleSellerCycleAndActiveChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerCycleAndActiveChart.resize();
    }, 100)
	}
	// componentWillReceiveProps(){
		// debugger
	// }
	componentDidUpdate(){
		// debugger
		this.state.singleSellerCycleAndActiveChart.setOption(this.props.cycleAndActive.toJS());
		this.state.singleSellerCycleAndActiveChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.singleSellerCycleAndActive(this.props.params.id,this.state.time);
		}
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerCycleAndActiveChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return <div className="panel">
          	<div className="panelHead">来访周期及活跃度</div>
	          <div className="panelBody">
							<div className='singleSellerCycleAndActiveChart' ref='singleSellerCycleAndActiveChart'></div>
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
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar'])
    // OldOrNew:state.getIn(['b','OldOrNew'])
    // timeSection:state.getIn(['b','timeSection'])
    // deepVisit:state.getIn(['b','deepVisit'])
    cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_stayBar)