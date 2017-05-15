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

class _oldOrNew extends React.Component {

    static propTypes = {
        // customerNum: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareOldOrNewChart:'',
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            time:'',          //要请求的time参数，有多个
            time1:'',           //时间1，用于显示图表的legend
            time2:'',              //时间2,用于显示图表的legend
            new1List:'',
            old1List:'',
            percent1List:'',
            new2List:'',
            old2List:'',
            percent2List:''
        }
    }


    componentWillMount(){
        console.log('componentWillMount')
    }
    componentWillReceiveProps(nextProps,nextState){
        if(this.props!==nextProps){
            let oldOrNew=nextProps.oldOrNew.toJS();
            let timeList=oldOrNew.xAxis[0].data;
            let new1List=oldOrNew.xAxis[0].num1New;
            let old1List=oldOrNew.xAxis[0].num1Old;
            let new2List=oldOrNew.xAxis[0].num2New;
            let old2List=oldOrNew.xAxis[0].num2Old;
            let percent1List=oldOrNew.series[0].data;
            let percent2List=oldOrNew.series[1].data;
            this.setState({timeList,new1List,old1List,new2List,old2List,percent1List,percent2List});
            if(oldOrNew.series[0].data && oldOrNew.series[0].data[0]){
                // oldOrNew.legend.data.push(this.state.time1,this.state.time2);
                // oldOrNew.series[0].name = this.state.time1;
                // oldOrNew.series[1].name = this.state.time2;
                oldOrNew.legend.data.push('时间一','时间二');
                oldOrNew.series[0].name = '时间一';
                oldOrNew.series[1].name = '时间二';
                this.state.compareOldOrNewChart.setOption(oldOrNew);
                this.state.compareOldOrNewChart.hideLoading();
            }
        }
    }
    componentDidMount(){
        console.log('componentDidMount');
    //  //this.props.allSellersTableInit();
        let getTime=Tools.getTime();
        this.state.time=getTime;
        this.state.time1=getTime.split(',')[0];
        this.state.time2=getTime.split(',')[1];
        this.props.oldOrNewInit(Tools.changeTime(this.state.time),this.state.selectTime);   //默认无参，可选
        
        let input1=ReactDOM.findDOMNode(this.refs.selectTime1).getElementsByClassName('calendar')[0].getElementsByTagName('input')[0];
        input1.value=this.state.time.split(',')[0];
        let dom = ReactDOM.findDOMNode(this.refs.compareOldOrNewChart);

        this.state.compareOldOrNewChart = echarts.init(dom);
        this.state.compareOldOrNewChart.showLoading();

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareOldOrNewChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareOldOrNewChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        this.state.compareOldOrNewChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    // }
 //   
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
        if(ms1>ms2){ //时间1大于时间2，错误
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
        this.props.oldOrNewInit(time1+','+time2,this.state.selectTime);
        this.state.time1=time1;
        this.state.time2=time2;
        return;
    }

    render(){
        let {timeList,new1List,old1List,percent1List,new2List,old2List,percent2List} = this.state;
        let rows=[];
        let time1,time2;
        if(timeList){
            timeList.forEach((item,i)=>{
                time1=timeList[i].split('/')[0];
                time2=timeList[i].split('/')[1];
              rows.push(<tr key={i}><td>{time1}</td><td>{new1List[i]}</td><td>{old1List[i]}</td><td>{percent1List[i]}%</td><td>{time2}</td><td>{new2List[i]}</td><td>{old2List[i]}</td><td>{percent2List[i]}%</td></tr>)
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
                            {/*<li><a className={this.state.selectTime=='hour'?'active':''} onClick={this.changeTime}>时</a></li>*/}
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
                    <div className="panelHead">新老顾客对比&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商城在两个时间段内新老顾客对比<br /></p></div></div>
                    <div className="panelBody">
                    <div ref="compareOldOrNewChart" className="compareOldOrNewChart"></div>
                    </div>
                </div>
                <div className="panel">
                    <div className="panelHead">新老顾客对比明细</div>
                        <div className="panelBody">
                        <table className="Table">
                            <thead>
                                <tr><th>时间一</th><th>新顾客量</th><th>老顾客量</th><th>新顾客率</th><th>时间二</th><th>新顾客量</th><th>老顾客量</th><th>新顾客率</th></tr>
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
        oldOrNew:state.getIn(['d','oldOrNew'])
        // table:state.getIn(['b','table'])
})
let oldOrNew=connect(mapStateToProps,compareAction)(_oldOrNew);
export default oldOrNew;

