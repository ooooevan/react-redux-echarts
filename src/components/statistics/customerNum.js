import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import Calendar from '../calendar';

import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/chart/radar';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/component/grid';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/dataZoom';





class _customerNum extends React.Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(this.props.params)
	}
	render(){
		return <div className="chartWrapper">
						<div className='selectOption'>
                区域选择：
                <div className='sellersSelect1'>
                  <select>
                    <option value ="allsellers">全部商家</option>
                    <option value ="firstFloor">一层商家</option>
                    <option value="secondFloor">二层商家</option>
                    <option value="thirdFloor">三层商家</option>
                  </select>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间选择：
                <div className='selectTime1'><Calendar/></div>
                &nbsp;-&nbsp;
                <div className='selectTime1 selectTimeError'><Calendar/></div>
                {/*<div className='sellersSelect2'>
                  <select>
                    <option value ="yesterday">昨日</option>
                    <option value ="lastWeek">近一周</option>
                    <option value="lastMonth">近一月</option>
                    <option value="all">全部</option>
                  </select>
                </div>*/}
                	<div className='selectClick'>
	                  <input type='button' value='查询'/>
	                </div>
              </div>
								<div className='selectOption'>
								快速时间选择：
                <div className='quickSelect'>
                  <ul>
	                		<li className='active'>今天</li>
	                		<li>昨日</li>
	                		<li>最近一周</li>
	                		<li>最近一月</li>
	                		<li>全部</li>
	                	</ul>
                </div>
	                	{/*快速选择：
	                	<ul>
	                		<li><a href='javascript:'>时</a></li>
	                		<li><a href='javascript:'>日</a></li>
	                		<li><a href='javascript:'>周</a></li>
	                		<li><a href='javascript:'>月</a></li>
	                		<li><a href='javascript:'>全部</a></li>
	                	</ul>*/}
                </div>

							<div className="panel">
			    			<div className="panelHead">顾客流动</div>
			    			<div className="panelBody">
			    				<div className="singleSellerCustomerFlowChart" ref="singleSellerCustomerFlowChart"></div>
			    			 {/*<CustomerFlow id={this.state.id}/>*/}
			          </div>
			    		</div>						

		</div>
	}
}




const mapStateToProps = (state)=>{
  return {
    // customerFlow:state.getIn(['b','customerFlow']),
    // radar:state.getIn(['b','radar']),
    // stayBar:state.getIn(['b','stayBar']),
    // OldOrNew:state.getIn(['b','OldOrNew']),
    // timeSection:state.getIn(['b','timeSection']),
    // deepVisit:state.getIn(['b','deepVisit']),
    // cycleAndActive:state.getIn(['b','cycleAndActive'])
    }
}

let customerNum=connect(mapStateToProps)(_customerNum);

export default customerNum;