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

class _sellersOldOrNew extends React.Component {

    static propTypes = {
        // OldOrNew: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareSellerOldOrNewChart:'',
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            // time:'',          //要请求的time参数，有多个
            seller1:'',           //商家1，用于显示图表的legend
            seller2:'',              //商家2,用于显示图表的legend
            timeList:'',
            newNum1List:'',
            oldNum1List:'',
            percent1List:'',
            newNum2List:'',
            oldNum2List:'',
            percent2List:''
        }
    }


    componentWillMount(){
        console.log('componentWillMount')



    }
    componentDidMount(){
        console.log('1componentDidMount');
    //  //this.props.allSellersTableInit();
    		// if(this.props.sellersAndTime){
    		// 	let dom = ReactDOM.findDOMNode(this.refs.compareSellerOldOrNewChart);
	     //    this.state.compareSellerOldOrNewChart = echarts.init(dom);
	     //    this.state.compareSellerOldOrNewChart.showLoading();
    		// }
        if(this.props.sellersAndTime.length>1){
            let sellers=this.props.sellersAndTime.split('/')[0].split(',');

            this.state.seller1=sellers[0];
            this.state.seller2=sellers[1];
            
            this.props.sellersOldOrNewInit(this.props.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerOldOrNewChart);
            this.state.compareSellerOldOrNewChart = echarts.init(dom);
            this.state.compareSellerOldOrNewChart.showLoading();
        }

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareSellerOldOrNewChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareSellerOldOrNewChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        console.log('1componentWillUnmount');
        this.state.compareSellerOldOrNewChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    // }
 //   
    }
    componentWillReceiveProps(nextProps,nextState){
    	if(nextProps.sellersAndTime  && nextProps.sellersAndTime !==this.props.sellersAndTime){
            // 获取商家名存入state
            let arr=nextProps.sellersAndTime.split('/');
            let sellers=arr[0].split(',');

            this.setState({seller1:sellers[0],seller2:sellers[1]});
            this.props.sellersOldOrNewInit(nextProps.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerOldOrNewChart);
            this.state.compareSellerOldOrNewChart = echarts.init(dom);
            this.state.compareSellerOldOrNewChart.showLoading();
        }
        let OldOrNew=nextProps.OldOrNew.toJS();
        if(OldOrNew.series[0].data && OldOrNew.series[0].data[0]){
            let timeList=OldOrNew.xAxis[0].data;
            let percent1List=OldOrNew.series[0].data;
            let percent2List=OldOrNew.series[1].data;
            let newNum1List=OldOrNew.xAxis[0].newNum1;
            let newNum2List=OldOrNew.xAxis[0].newNum2;
            let oldNum1List=OldOrNew.xAxis[0].oldNum1;
            let oldNum2List=OldOrNew.xAxis[0].oldNum2;
            this.setState({timeList,newNum1List,oldNum1List,oldNum2List,newNum2List,percent1List,percent2List});

            OldOrNew.legend.data.push(this.state.seller1,this.state.seller2);
            OldOrNew.series[0].name = this.state.seller1;
            OldOrNew.series[1].name = this.state.seller2;
            this.state.compareSellerOldOrNewChart.setOption(OldOrNew);
            this.state.compareSellerOldOrNewChart.hideLoading();
        }

    }
    componentWillUpdate(nextProps,nextState){
        console.log('1-=componentWillUpdate')
        //有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发
        
    }
    componentDidUpdate(){
        console.log('1..componentDidUpdate')
        

 //      
    }
    // componentWillReceiveProps(){
    // }
  

    render(){

    	let {timeList,newNum1List,oldNum1List,oldNum2List,newNum2List,percent1List,percent2List,seller1,seller2} = this.state;
        let rows=[];
        if(timeList){
            timeList.forEach((item,i)=>{
              rows.push(<tr key={i}><td>{timeList[i]}</td><td>{newNum1List[i]}</td><td>{oldNum1List[i]}</td><td>{percent1List[i]}%</td><td>{newNum2List[i]}</td><td>{oldNum2List[i]}</td><td>{percent2List[i]}%</td></tr>)
            })
        }

        return <div>
      				<div className="panel">
                  <div className="panelHead">顾客新顾客率对比&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示两个商家在同一时间段内的新顾客率对比<br /></p></div></div>
                  <div className="panelBody">
                  <div ref="compareSellerOldOrNewChart" className="compareSellerOldOrNewChart"></div>
                  </div>
              </div>
							<div className='panel'>
  		    				<div className="panelHead">顾客新顾客率对比明细</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>时间</th><th>{seller1}新顾客</th><th>老顾客</th><th>新顾客占比</th><th>{seller2}新顾客</th><th>老顾客</th><th>新顾客占比</th></tr>
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
        OldOrNew:state.getIn(['d','sellersOldOrNew'])
//         // table:state.getIn(['b','table'])
})
let sellersOldOrNew=connect(mapStateToProps,compareAction)(_sellersOldOrNew);
export default sellersOldOrNew;

