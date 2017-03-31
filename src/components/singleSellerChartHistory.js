import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';


import sellersAction from '../actions/sellersAction';

class _Chart extends React.Component {

    static propTypes = {
        params: React.PropTypes.object.isRequired,   //商店id，这里为数字
        singleSellerLineChartInit: React.PropTypes.func.isRequired,
        b: React.PropTypes.object.isRequired       //包含lineAndBar和table的数据
    };
    constructor(props){
        super(props);
        this.state={
					singleSellerLineChart:'',  //商家客流图表
        	singleSellerLineOption:'',    //option参数
        	time:'hour',
          id:'',   //商家id
          name:''   //商家名
        }

    }

    componentDidMount(){
    	this.state.id = this.props.params.id  //获取该商店id
      this.props.singleSellerLineChartInit(this.state.id,this.state.time);
    	let domLine = ReactDOM.findDOMNode(this.refs.singleSellerLineChart);
    	this.state.singleSellerLineChart = echarts.init(domLine);
    }
		componentWillReceiveProps(){
			// debugger;
			this.state.singleSellerLineOption=this.props.b.lineAndLine;
			this.state.singleSellerLineChart.setOption(this.state.singleSellerLineOption);
      this.setState({
        name:this.props.b.lineAndLine.name
      })

		}
		componentWillUnmount(){
      this.state.singleSellerLineChart.dispose();
		}
		adjusting = (e)=>{
					 //点击当前项返回
           console.log(11)
           if(e.target.className === 'active'){
               return;
           }
           switch(e.target.innerText){
               case "时":
                   this.setState({
                     time:'hour'
                   })
                   this.props.singleSellerLineChartInit(this.state.id,this.state.time);
                   break;
               case "日":
                   this.setState({
                     time:'day'
                   })
                   this.props.singleSellerLineChartInit(this.state.id,this.state.time);
                   break;
               case "周":
                   this.setState({
                     time:'week'
                   })
                   this.props.singleSellerLineChartInit(this.state.id,this.state.time);
                   break;
               case "月":
                   this.setState({
                     time:'month'
                   })
                   this.props.singleSellerLineChartInit(this.state.id,this.state.time);
                   break;
           }
		}
    render(){

    	return <div className="panelWrapper">
              <p>{this.state.name}</p>

    					<ul ref="adjustingBar" className="adjustingBar">
                   <span>时间参数&nbsp;&nbsp;&nbsp;&nbsp;</span>
                   <li className={this.state.time=='hour'?'active':''} onClick={this.adjusting}><a>时</a></li>
                   <li className={this.state.time=='day'?'active':''} onClick={this.adjusting}><a>日</a></li>
                   <li className={this.state.time=='week'?'active':''} onClick={this.adjusting}><a>周</a></li>
                   <li className={this.state.time=='month'?'active':''} onClick={this.adjusting}><a>月</a></li>
                   <div className='chartMessage'>
                   </div>
               </ul>
    		<div className="panel">
    			<div className="panelHead">入店顾客</div>
    			<div className="panelBody">
    				<div className="singleSellerLineChart" ref="singleSellerLineChart"></div>
    			</div>
    		</div>

        <div className="panel halfPanel_1">
          <div className="panelHead">总体评价(雷达图)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
        <div className="panel halfPanel_2">
          <div className="panelHead">驻店时长(柱状图)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
        <div className="panel halfPanel_1">
          <div className="panelHead">新老顾客量+率(层叠柱状图)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
        <div className="panel halfPanel_2">
          <div className="panelHead">各时间段占比(柱状图)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
        <div className="panel halfPanel_1">
          <div className="panelHead">存留分析(门前客流、跳出率和新增率)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
        <div className="panel halfPanel_2">
          <div className="panelHead">来访周期(竖向 柱状图)+活跃度(饼图)</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
        <div className="panel ">
          <div className="panelHead">深访率(柱状图)or--</div>
          <div className="panelBody">
            <div className="singleSellerLineChart" ref="singleSellerLineChart-----"></div>
          </div>
        </div>
    	</div>
    }
}
let Chart=connect(state=>state,sellersAction)(_Chart);

export default Chart;