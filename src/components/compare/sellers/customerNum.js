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

import compareAction from '../../../actions/compareAction';

class _sellersNum extends React.Component {

    static propTypes = {
        // sellersNum: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareSellerNumChart:'',
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
        console.log('componentWillMount-- ')



    }
    componentDidMount(){
        console.log('1componentDidMount');
    //  //this.props.allSellersTableInit();
    		// if(this.props.sellersAndTime){
    		// 	let dom = ReactDOM.findDOMNode(this.refs.compareSellerNumChart);
	     //    this.state.compareSellerNumChart = echarts.init(dom);
	     //    this.state.compareSellerNumChart.showLoading();
    		// }
        //进入此路由时，已经选择了时间参数，可以立即渲染图表
        if(this.props.sellersAndTime.length>1){
            let sellers=this.props.sellersAndTime.split('/')[0].split(',');
            this.state.seller1=sellers[0];
            this.state.seller2=sellers[1];
            
            this.props.sellersNumInit(this.props.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerNumChart);
            this.state.compareSellerNumChart = echarts.init(dom);
            this.state.compareSellerNumChart.showLoading();
        }

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareSellerNumChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareSellerNumChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        console.log('1componentWillUnmount');
        this.state.compareSellerNumChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    }
    componentWillReceiveProps(nextProps,nextState){
        //有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发
        if(nextProps.sellersAndTime  && nextProps.sellersAndTime !==this.props.sellersAndTime){
            // 获取商家名存入state
            let arr=nextProps.sellersAndTime.split('/');
            
            let sellers=arr[0].split(',');
            this.setState({seller1:sellers[0],seller2:sellers[1]});
            this.props.sellersNumInit(nextProps.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerNumChart);
            this.state.compareSellerNumChart = echarts.init(dom);
            this.state.compareSellerNumChart.showLoading();
        }
        let sellersNum=nextProps.sellersNum.toJS();
        if(sellersNum.series[0].data && sellersNum.series[0].data[0]){
            let timeList=sellersNum.xAxis[0].data;
            let num1List=sellersNum.series[0].data;
            let num2List=sellersNum.series[1].data;
            let percent1List=sellersNum.xAxis[0].percent1;
            let percent2List=sellersNum.xAxis[0].percent2;
            this.setState({timeList,num1List,num2List,percent1List,percent2List});
            sellersNum.legend.data.push(this.state.seller1,this.state.seller2);
            sellersNum.series[0].name = this.state.seller1;
            sellersNum.series[1].name = this.state.seller2;
            this.state.compareSellerNumChart.setOption(sellersNum);
            this.state.compareSellerNumChart.hideLoading();
        }
        
    }
    componentWillUpdate(nextProps,nextState){
        console.log('1-=componentWillUpdate')
        
        
    }
    componentDidUpdate(){
        console.log('1..componentDidUpdate')
        

 //      
    }
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
                  <div className="panelHead">顾客客流量对比</div>
                  <div className="panelBody">
                  <div ref="compareSellerNumChart" className="compareSellerNumChart"></div>
                  </div>
              </div>
							<div className='panel'>
  		    				<div className="panelHead">顾客客流量信息</div>
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
        sellersNum:state.getIn(['d','sellersNum'])
//         // table:state.getIn(['b','table'])
})
let sellersNum=connect(mapStateToProps,compareAction)(_sellersNum);
export default sellersNum;

