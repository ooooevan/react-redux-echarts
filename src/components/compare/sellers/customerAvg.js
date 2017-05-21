import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import Calendar from '../../calendar';
// import '../../styles/calendar.scss';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
const FaQuestion = require('react-icons/lib/fa/question');

import compareAction from '../../../actions/compareAction';

class _sellersAvg extends React.Component {

    static propTypes = {
        // sellersAvg: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareSellerAvgChart:'',
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            // time:'',          //要请求的time参数，有多个
            seller1:'',           //商家1，用于显示图表的legend
            seller2:'',              //商家2,用于显示图表的legend
            timeList:'',
            num1List:'',
            num2List:'',
            percent1List:'',
            percent2List:''
        }
    }


    componentWillMount(){
        // console.log('componentWillMount-- ')



    }
    componentDidMount(){
        //进入此路由时，已经选择了时间参数，可以立即渲染图表
        if(this.props.sellersAndTime.length>1){
            let sellers=this.props.sellersAndTime.split('/')[0].split(',');
            this.state.seller1=sellers[0];
            this.state.seller2=sellers[1];
            
            this.props.sellersAvgInit(this.props.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerAvgChart);
            this.state.compareSellerAvgChart = echarts.init(dom);
            this.state.compareSellerAvgChart.showLoading();
        }

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareSellerAvgChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareSellerAvgChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        // console.log('1componentWillUnmount');
        this.state.compareSellerAvgChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    }
    componentWillReceiveProps(nextProps,nextState){
        //有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发
        if(nextProps.sellersAndTime  && nextProps.sellersAndTime !==this.props.sellersAndTime){
            // 获取商家名存入state
            let arr=nextProps.sellersAndTime.split('/');
            
            let sellers=arr[0].split(',');
            this.setState({seller1:sellers[0],seller2:sellers[1]});
            this.props.sellersAvgInit(nextProps.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerAvgChart);
            this.state.compareSellerAvgChart = echarts.init(dom);
            this.state.compareSellerAvgChart.showLoading();
            return;
        }
        let sellersAvg=nextProps.sellersAvg.toJS();
        if(sellersAvg.series[0].data && sellersAvg.series[0].data[0]){
            let timeList=sellersAvg.xAxis[0].data;
            let num1List=sellersAvg.series[0].data;
            let num2List=sellersAvg.series[1].data;
            let percent1List=sellersAvg.xAxis[0].percent1;
            let percent2List=sellersAvg.xAxis[0].percent2;
            this.setState({timeList,num1List,num2List,percent1List,percent2List});
            sellersAvg.legend.data.push(this.state.seller1,this.state.seller2);
            sellersAvg.series[0].name = this.state.seller1;
            sellersAvg.series[1].name = this.state.seller2;
            this.state.compareSellerAvgChart.setOption(sellersAvg);
            this.state.compareSellerAvgChart.hideLoading();
        }
        
    }
    // componentWillUpdate(nextProps,nextState){
        // console.log('1-=componentWillUpdate')
        
        
    // }
    // componentDidUpdate(){
        // console.log('1..componentDidUpdate')
        

 //      
    // }
    // componentWillReceiveProps(nextProps,nextState){

    // }


    render(){
        let {timeList,num1List,num2List,percent1List,percent2List,seller1,seller2} = this.state;
        let rows=[];
        if(timeList){
            timeList.forEach((item,i)=>{
              rows.push(<tr key={i}><td>{timeList[i]}</td><td>{num1List[i]}</td><td>{percent1List[i]}%</td><td>{num2List[i]}</td><td>{percent2List[i]}%</td></tr>)
            })
        }

        return <div>
      				<div className="panel">
                  <div className="panelHead">客流量对比&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示两个商家在同一时间段内的客流平均值对比<br /></p></div></div>
                  <div className="panelBody">
                  <div ref="compareSellerAvgChart" className="compareSellerAvgChart"></div>
                  </div>
              </div>
							<div className='panel'>
  		    				<div className="panelHead">客流量对比明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>{seller1}人数</th><th>总体占比</th><th>{seller2}人数</th><th>总体占比</th></tr>
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
//     // console.log(state);
//     // debugger
//     // console.log(state.toJS());
        sellersAvg:state.getIn(['d','sellersAvg'])
//         // table:state.getIn(['b','table'])
})
let sellersAvg=connect(mapStateToProps,compareAction)(_sellersAvg);
export default sellersAvg;

