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

class _active extends React.Component {

    static propTypes = {
        // stayBar: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareSellerActiveChart:'',
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            // time:'',          //要请求的time参数，有多个
            seller1:'',           //商家1，用于显示图表的legend
            seller2:'',              //商家2,用于显示图表的legend
            num1List:'',
            num2List:'',
            timeList:'',
            total1:'',
            total2:''
        }
    }


    componentWillMount(){
        console.log('componentWillMount')



    }
    componentDidMount(){
        console.log('1componentDidMount');
    //  //this.props.allSellersTableInit();
    		// if(this.props.sellersAndTime){
    		// 	let dom = ReactDOM.findDOMNode(this.refs.compareSellerActiveChart);
	     //    this.state.compareSellerActiveChart = echarts.init(dom);
	     //    this.state.compareSellerActiveChart.showLoading();
    		// }
        if(this.props.sellersAndTime.length>1){
            let sellers=this.props.sellersAndTime.split('/')[0].split(',');

            this.state.seller1=sellers[0];
            this.state.seller2=sellers[1];
            
            this.props.sellersActiveInit(this.props.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerActiveChart);
            this.state.compareSellerActiveChart = echarts.init(dom);
            this.state.compareSellerActiveChart.showLoading();
        }

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareSellerActiveChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareSellerActiveChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        console.log('1componentWillUnmount');
        this.state.compareSellerActiveChart.dispose();
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
            this.props.sellersActiveInit(nextProps.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerActiveChart);
            this.state.compareSellerActiveChart = echarts.init(dom);
            this.state.compareSellerActiveChart.showLoading();
        }
        let active=nextProps.active.toJS();
        if(active.series[0].data && active.series[0].data[0]){
            let timeList=active.xAxis[0].data;
            let num1List=active.series[0].data;
            let num2List=active.series[1].data;
            let total1=num1List.reduce((x,y)=>(parseInt(x)+parseInt(y)));
            let total2=num2List.reduce((x,y)=>(parseInt(x)+parseInt(y)));
            this.setState({timeList,num1List,num2List,total1,total2});
            active.legend.data.push(this.state.seller1,this.state.seller2);
            active.series[0].name = this.state.seller1;
            active.series[1].name = this.state.seller2;
            this.state.compareSellerActiveChart.setOption(active);
            this.state.compareSellerActiveChart.hideLoading();
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

        let {timeList,num1List,num2List,total1,total2,seller1,seller2} = this.state;
        let rows=[];
        let percent1,percent2;
        if(timeList){
            timeList.forEach((item,i)=>{
                percent1=parseInt((num1List[i]/total1)*100);
                percent2=parseInt((num2List[i]/total1)*100);
                rows.push(<tr key={i}><td>{timeList[i]}</td><td>{num1List[i]}</td><td>{percent1}%</td><td>{num2List[i]}</td><td>{percent2}%</td></tr>)
            })
        }

        return <div>
      				<div className="panel">
                  <div className="panelHead">顾客活跃度对比</div>
                  <div className="panelBody">
                  <div ref="compareSellerActiveChart" className="compareSellerActiveChart"></div>
                  </div>
              </div>
							<div className='panel'>
  		    				<div className="panelHead">顾客活跃度信息</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
                                <tr><th>活跃度</th><th>{seller1}人数</th><th>所占比例</th><th>{seller2}人数</th><th>所占比例</th></tr>
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
        active:state.getIn(['d','sellersActive'])
//         // table:state.getIn(['b','table'])
})
let active=connect(mapStateToProps,compareAction)(_active);
export default active;

