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
			time:'',
			timeList:'',
			oldNumList:'',
			newNumList:'',
			percentList:''
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
	componentWillReceiveProps(nextProps,nextState){
		let oldOrNew=nextProps.oldOrNew.toJS();
		let timeList=oldOrNew.xAxis[0].data;
		let newNumList=oldOrNew.series[0].data;
		let oldNumList=oldOrNew.series[1].data;

		this.setState({timeList,newNumList,oldNumList});
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.singleSellerOldOrNew(nextProps.params.id,nextState.time);
		}

		this.state.singleSellerOldOrNewChart.setOption(oldOrNew);
		this.state.singleSellerOldOrNewChart.hideLoading();
	}
	componentDidUpdate(){
		// debugger
		
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.singleSellerOldOrNewChart.dispose();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		let {timeList,oldNumList,newNumList} = this.state;
    let rows=[];
    let percent='';
    if(timeList){
        timeList.forEach((item,i)=>{
        	console.log(newNumList[i])
        	console.log(newNumList[i]+oldNumList[i])
        	percent=parseInt(parseInt(newNumList[i])/(parseInt(newNumList[i])+parseInt(oldNumList[i]))*100);
            rows.push(<tr key={i}><td>{timeList[i]}</td><td>{newNumList[i]}</td><td>{oldNumList[i]}</td><td>{percent}%</td></tr>)
        })
    }
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
			      					<tr><th>时间</th><th>新顾客</th><th>老顾客</th><th>新顾客比例</th></tr>
			      				</thead>
			      				<tbody>
			      				{rows}
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