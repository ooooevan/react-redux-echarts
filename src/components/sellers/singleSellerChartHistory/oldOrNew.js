import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';

class _stayBar extends React.Component {
	static propTypes = {
		singleSellerOldOrNew:React.PropTypes.func.isRequired,
		OldOrNew:React.PropTypes.instanceOf(Immutable.Map)
	}
	constructor(props){
		super(props);
		this.state={
			singleSellerOldOrNewChart:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		// debugger
		this.state.time=this.props.time;
    this.props.singleSellerOldOrNew(this.props.params.id,this.state.time);
   
    let singleSellerOldOrNewChart = ReactDOM.findDOMNode(this.refs.singleSellerOldOrNewChart);
	  this.state.singleSellerOldOrNewChart = echarts.init(singleSellerOldOrNewChart);
    this.state.singleSellerOldOrNewChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerOldOrNewChart.resize();
    }, 100)
	}
	componentWillReceiveProps(){
		// debugger
	}
	componentDidUpdate(){
		// debugger
		this.state.singleSellerOldOrNewChart.setOption(this.props.oldOrNew.toJS());
		this.state.singleSellerOldOrNewChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.singleSellerOldOrNew(this.props.params.id,this.state.time);
		}
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerOldOrNewChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return <div>
					<div className="panel">
		          <div className="panelHead">新老顾客</div>
			          <div className="panelBody">
									<div className='singleSellerOldOrNewChart' ref='singleSellerOldOrNewChart'></div>
								</div>
			        </div>
			        <div className='panel'>
			        	<div className='panelHead'></div>
			        	<div className='panelBody'>
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
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar'])
    oldOrNew:state.getIn(['b','oldOrNew'])
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}


export default connect(mapStateToProps,sellersAction)(_stayBar)