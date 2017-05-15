import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import Calendar from '../calendar';
import statisticsAction from '../../actions/statisticsAction';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
const FaQuestion = require('react-icons/lib/fa/question');





class _customerNum extends React.Component {
	constructor(props){
		super(props);
		this.state={
			statisticsCustomerNumInit:'',
			resizeHandler:'',
			time:'',
			timeList:'',
      numList:'',
      tableSpace:1

		}
	}
	componentDidMount(){
		this.state.time=this.props.time;
    this.props.statisticsCustomerNumInit(this.state.time);
   
    let statisticsCustomerNumChart = ReactDOM.findDOMNode(this.refs.statisticsCustomerNumChart);
	  this.state.statisticsCustomerNumChart = echarts.init(statisticsCustomerNumChart);
    this.state.statisticsCustomerNumChart.showLoading();
    window.addEventListener('resize',this.resizeFun);
	}
	resizeFun=()=>{
		if(this.state.resizeHandler){
              clearTimeout(this.state.resizeHandler);
          }
    this.state.resizeHandler = setTimeout(()=>{
       this.state.statisticsCustomerNumChart.resize();
    }, 100)
	}
	componentWillReceiveProps(nextProps,nextState){
		if(this.state.time!=nextProps.time){
			this.setState({time:nextProps.time});
			this.props.statisticsCustomerNumInit(nextProps.time);
			return;
		}
		let customerNum=nextProps.customerNum.toJS();
		let timeList=customerNum.xAxis[0].data;
		let numList=customerNum.series[0].data;
		this.setState({timeList,numList});
		this.state.statisticsCustomerNumChart.setOption(customerNum);
		this.state.statisticsCustomerNumChart.hideLoading();
	}
	componentWillUpdate(nextProps){
		console.log('-=componentWillUpdate')
		
	}
	componentDidUpdate(){
		console.log('-=componentDidUpdate')
		
	}
	componentWillUnmount(){
      //切换路由销毁echarts实例
      this.state.statisticsCustomerNumChart.dispose();
      this.props.stateDefault();
      window.removeEventListener('resize',this.resizeFun);
	}
	render(){
		let {timeList,numList,tableSpace} = this.state;
    let rows=[];
    if(timeList){
        timeList.forEach((item,i)=>{
            if(!(i%tableSpace)){
                rows.push(<tr key={i}><td>{timeList[i]}</td><td>{numList[i]}</td></tr>)
            }
        })
    }
		return	<div>
				<div className="panel">
		    			<div className="panelHead">入店量&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示在一定时间内进入商城的人数<br /></p></div></div>
		    			<div className="panelBody">
		    				<div className="statisticsCustomerNumChart" ref="statisticsCustomerNumChart"></div>
		          </div>
  				</div>
  				<div className='panel'>
  		    				<div className="panelHead">入店量明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>人数</th></tr>
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




const mapStateToProps = (state)=>({
    customerNum:state.getIn(['c','customerNum']),
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
})

let customerNum=connect(mapStateToProps,statisticsAction)(_customerNum);

export default customerNum;