/**
 * Created by HH on 2017/3/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import { Router, Route, IndexRoute, hashHistory, Link ,Redirect} from 'react-router';
import sellersAction from '../../actions/sellersAction';

class _SidebarNav extends React.Component {
    static propTypes = {
        sellersListInit: React.PropTypes.func.isRequired, 
        sellers:React.PropTypes.instanceOf(Immutable.List)
    };
    constructor(props){
        super(props);
        this.change=this.change.bind(this);
        this.entireList=this.entireList.bind(this);
        this.state={
            sellers:Immutable.List([])
        }
    }
    componentWillMount(){
        this.props.sellersListInit();
    }
    componentWillUpdate(){
        console.log('componentWillUpdate..');
    }
    componentDidMount(){
        console.log('componentDidMount...')
        // debugger
        // this.props.sellersInit();
    }
    componentWillUpdate(nextProps,nextState){
            this.state.sellers=nextProps.sellers

        
    }
    shouldComponentUpdate(nextProps,nextState){
        if(!Immutable.is(this.props,nextProps)){
            console.log('shouldComponentUpdate--true');
            return true;
        }
        else if(!Immutable.is(this.state,nextState)){
        console.log('shouldComponentUpdate--true');
            return true;
        }else{
        console.log('shouldComponentUpdate--false');
            return false;
        }

        /*const thisProps = this.props || {}, thisState = this.state || {};

          if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
              Object.keys(thisState).length !== Object.keys(nextState).length) {
            console.log('shouldComponentUpdate--true1');
            return true;
          }

          for (const key in nextProps) {
            if (thisProps[key] !== nextProps[key] || !Immutable.is(thisProps[key], nextProps[key])) {
              console.log('shouldComponentUpdate--true2');
              return true;
            }
          }

          for (const key in nextState) {
            if (thisState[key] !== nextState[key] || !Immutable.is(thisState[key], nextState[key])) {
              console.log('shouldComponentUpdate--true3');
              return true;
            }
          }
          console.log('shouldComponentUpdate--false');
          return false;*/

    }
    componentWillReceiveProps(nextProps,nextState){
        console.log('componentWillReceiveProps..');
        //debugger;
        /*获取商家名称，要是一个数组或对象*/
        //debugger;
        //this.state.sellers=this.props.b.sellers;
        /**
         * 有一个bug，或者是和别的路由相同接口引起的。this.props.b.sellers是 []
         */
         // debugger;
        // this.setState({
        //     sellers:this.props.b.sellers
        // })
// debugger
        // console.log(nextProps.sellers);
        //bug消除：全部商家列表中，搜索后为部分商家，选择某商家，商家列表就回到全部商家。下面entireList函数，点击全部商家回到全部
        // if(nextProps.sellers){
        //     this.setState({
        //         sellers:nextProps.sellers
        //     })
        //     // this.change();
        // }
        // console.log(this)
        // console.log('输出sellers：')
        // console.log(this.props.b.sellers)
        // console.log(this.state.sellers)
        // this.state.sellers=['111','222','333','113','美宜佳','麦克风'];
    }
    change = ()=>{
        let text=ReactDOM.findDOMNode(this.refs.searchText).value;
        // if(text === ' ') return;  //输入中文时有空格
        let rows=[];
        //输入时留下匹配的商家列表
        // let afdsa=this.props.sellers;
        // let css=this.props.sellers.toJS();
        this.props.sellers.forEach(function(seller){

            //seller是数值，不能indexOf，要转成string
            if(seller.indexOf(text.trim()) === -1){
                return;
            }else{
                rows.push(seller);
            }
        });
        this.setState({
            sellers:Immutable.List(rows)
        })


    }
    //回到整个商家列表
    entireList = ()=>{
        // let dom=ReactDOM.findDOMNode(this.refs.searchText);
        // dom.value='';
        this.setState({
            sellers:this.props.sellers
        })
    }



    render(){
        // debugger
        console.log('----this')
        //const usersdom = this.props.sellers.map(seller=><li>{seller.name}</li>);
        // console.log(this.state.sellers.toJS())
        let rows=[];
        let routeData='sellers/';
        rows.push(<li key="all" onClick={this.entireList}><Link to='sellers/allsellers' activeClassName="active" draggable="false">全部商家<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>);
        if(this.state.sellers){
            this.state.sellers.forEach(function(seller,index){
                routeData+=seller;
                rows.push(<li key={seller}><Link to={routeData} activeClassName="active" draggable="false">{seller}<i className='fa fa-angle-double-right' aria-hidden='true'></i></Link></li>);
                routeData='sellers/';
            })
        }
        //return <ul className="sidebar_nav">

        //    {usersdom}
        //</ul>
        return <div id='sidebar_nav'>
            <ul>
                <li key="search">
                    <input type="text" ref="searchText" placeholder="搜索商家" onChange={this.change}/><i className="fa fa-search" aria-hidden="true"></i>
                </li>
                {rows}
            </ul>
        </div>
    }
}

const mapStateToProps = state => ({
        sellers:state.getIn(['b','sellers'])
})

const SidebarNav=connect(mapStateToProps,sellersAction)(_SidebarNav);

const Sellers=React.createClass({
    render(){
        return <div id="container">
            <SidebarNav />
            {this.props.children}
        </div>;
    }
})

export default Sellers;

