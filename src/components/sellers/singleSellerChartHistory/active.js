import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';





class _active extends React.Component {
	constructor(props){
		super(props);
		this.state={
			singleSellerActiveChart:'',
			resizeHandler:'',
			time:''
		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.singleSellerActiveInit(this.props.params.id,this.state.time);
   
    let singleSellerActiveChart = ReactDOM.findDOMNode(this.refs.singleSellerActiveChart);
	  this.state.singleSellerActiveChart = echarts.init(singleSellerActiveChart);
    this.state.singleSellerActiveChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.singleSellerActiveChart.resize();
    }, 100)
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		if(this.state.time!=nextProps.time){
			this.state.time=nextProps.time
			this.props.singleSellerActiveInit(this.props.params.id,this.state.time);
		}
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		this.state.singleSellerActiveChart.setOption(this.props.active.toJS());
		this.state.singleSellerActiveChart.hideLoading();
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerActiveChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		return	<div>
							<div className="panel">
		    			<div className="panelHead">活跃度</div>
		    			<div className="panelBody">
		    				<div className="singleSellerActiveChart" ref="singleSellerActiveChart"></div>
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
    active:state.getIn(['b','active'])
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}

let active=connect(mapStateToProps,sellersAction)(_active);

export default active;