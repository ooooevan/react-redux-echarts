import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import Calendar from '../../calendar';
import Tools from '../../tools';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
const FaQuestion = require('react-icons/lib/fa/question');

import compareAction from '../../../actions/compareAction';

class _out extends React.Component {

    static propTypes = {
        // customerNum: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareOutChart:'',
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            time:'',          //要请求的time参数，有多个
            time1:'',           //时间1，用于显示图表的legend
            time2:'',              //时间2,用于显示图表的legend
            timeList:'',
            num1List:'',
            num2List:'',
            percent1List:'',
            percent2List:''
        }
    }


    componentWillMount(){
        console.log('componentWillMount')
        
 //        this.props.compareCustomerNumInit(this.state.time,this.state.chartPage);

    }

    componentDidMount(){
        console.log('componentDidMount');
    //  //this.props.allSellersTableInit();
        let getTime=Tools.getTime();
        this.state.time=getTime;
        this.state.time1=getTime.split(',')[0];
        this.state.time2=getTime.split(',')[1];
        this.props.outInit(Tools.changeTime(this.state.time),this.state.selectTime);   //默认无参，可选
        
        let input1=ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0];
        input1.value=this.state.time.split(',')[0];
        let dom = ReactDOM.findDOMNode(this.refs.compareOutChart);

        this.state.compareOutChart = echarts.init(dom);
        this.state.compareOutChart.showLoading();

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareOutChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareOutChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillReceiveProps(nextProps,nextState){
        let out=nextProps.out.toJS();
        if(out.series[0].data && out.series[0].data[0]){
            let timeList=out.xAxis[0].data;
            let num1List=out.xAxis[0].out1Num;
            let num2List=out.xAxis[0].out2Num;
            let percent1List=out.series[0].data;
            let percent2List=out.series[1].data;
            this.setState({timeList,num1List,num2List,percent1List,percent2List});
            // out.legend.data.push(this.state.time1,this.state.time2);
            // out.series[0].name = this.state.time1;
            // out.series[1].name = this.state.time2;
            out.legend.data.push('时间一','时间二');
            out.series[0].name = '时间一';
            out.series[1].name = '时间二';
            this.state.compareOutChart.setOption(out);
            this.state.compareOutChart.hideLoading();
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        this.state.compareOutChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    }
    componentWillUpdate(nextProps){
        console.log('-=componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('..componentDidUpdate')
        

 //      
    }
    // componentWillReceiveProps(){
    // }
    changeTime=(e)=>{
        if(e.target.className === 'active'){
         return;
      }
      switch(e.target.innerText){
        // case '时':
        //   this.setState({
        //     time:'hour',
        //     selectTime:'hour'
        //   })
        //   return;
        case '日':
          this.setState({
            time:'day',
            selectTime:'day'
          })
          return;
        case '周':
          this.setState({
            time:'week',
            selectTime:'week'
          })
          return;
        case '月':
          this.setState({
            time:'month',
            selectTime:'month'
          })
          return;
      }
    }
    search=()=>{
        let time1=ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
        let time2=ReactDOM.findDOMNode(this.refs.selectTime2).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0].value;
        time1=Tools.changeTime(time1);
        time2=Tools.changeTime(time2);
        //去除红色警示框ClassName
        ReactDOM.findDOMNode(this.refs.selectTime1).className=ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError','');
        ReactDOM.findDOMNode(this.refs.selectTime2).className=ReactDOM.findDOMNode(this.refs.selectTime1).className.replace(' selectTimeError','');
        let ms1=new Date(time1).getTime();
        let ms2=new Date(time2).getTime();
        let now=Date.now();
        let error=false;
        if(ms1>now){  //选择时间超过当前时间，若选择的是今日，也不会超过当前时间
          ReactDOM.findDOMNode(this.refs.selectTime1).className+=' selectTimeError'//添加红色警示框ClassName
          error=true;
        }
        if(ms1>=ms2){ //时间1大于时间2，错误
          ReactDOM.findDOMNode(this.refs.selectTime2).className+=' selectTimeError'
          error=true;
        }
        if(ms2>now){  //选择时间超过当前时间，若选择的是今日，也不会超过当前时间
          ReactDOM.findDOMNode(this.refs.selectTime2).className+=' selectTimeError'//添加红色警示框ClassName
          error=true;
        }
        if(error){
          return false;
        }
        //日历选择没有错误，得到时间范围,发请求,并保存时间，放入图表legend
        this.props.outInit(time1+','+time2,this.state.selectTime);
        this.state.time1=time1;
        this.state.time2=time2;
        return;
    }

    render(){
        let {timeList,num1List,percent1List,num2List,percent2List} = this.state;
        let rows=[];
        let time1,time2;
        if(timeList){
            timeList.forEach((item,i)=>{
                time1=timeList[i].split('/')[0];
                time2=timeList[i].split('/')[1];
              rows.push(<tr key={i}><td>{time1}</td><td>{num1List[i]}</td><td>{percent1List[i]}%</td><td>{time2}</td><td>{num2List[i]}</td><td>{percent2List[i]}%</td></tr>)
            })
        }

        return <div className="chartWrapper">
             
                    
                <div className='selectOption inline'>
                    时间：
                    <div className='selectTime1' ref='selectTime1'><Calendar/></div>
                    &nbsp;&nbsp;&nbsp;对比时间：&nbsp;
                    <div className='selectTime1' ref='selectTime2'><Calendar/></div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对比时间范围：
                    <div className='quickSelect defaultCursor'>
                      <ul>
                            <li><a className={this.state.selectTime=='hour'?'active':''} onClick={this.changeTime}>时</a></li>
                            <li><a className={this.state.selectTime=='day'?'active':''} onClick={this.changeTime}>日</a></li>
                            <li><a className={this.state.selectTime=='week'?'active':''} onClick={this.changeTime}>周</a></li>
                            <li><a className={this.state.selectTime=='month'?'active':''} onClick={this.changeTime}>月</a></li>
                        </ul>
                    </div>
                    <div className='selectClick'>
                      <input type='button' value='查询' onClick={this.search} />
                    </div>
                </div>
              
                <div className="panel">
                    <div className="panelHead">跳出率对比&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城在两个时间段内的跳出率对比<br /></p></div></div>
                    <div className="panelBody">
                    <div ref="compareOutChart" className="compareOutChart"></div>
                    </div>
                </div>
                <div className="panel">
                    <div className="panelHead">跳出率对比明细</div>
                        <div className="panelBody">
                        <table className="Table">
                            <thead>
                                <tr><th>时间一</th><th>跳出量</th><th>跳出率</th><th>时间二</th><th>跳出量</th><th>跳出率</th></tr>
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
    // console.log(state);
    // debugger
    // console.log(state.toJS());
        out:state.getIn(['d','out'])
        // table:state.getIn(['b','table'])
})
let out=connect(mapStateToProps,compareAction)(_out);
export default out;

