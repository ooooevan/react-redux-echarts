
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link, Redirect} from 'react-router';

class Chart extends React.Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired       //
  };
  constructor(props) {
    super(props);
    this.changeSellerName = this.changeSellerName.bind(this);
    this.state = {
      sellerName: ''
    };
  }
  changeSellerName(name) {
    this.setState({
      sellerName: name
    });
  }
   


  render() {
    const nowUrl = `/sellers/${this.props.params.id}/now`;
    const historyUrl = `/sellers/${this.props.params.id}/history`;
    return (<div className="chartWrapper">
      <div className="singleSellerRoute">
        <ul>
          <li><Link to={nowUrl} activeClassName="active" draggable="false">当前客流</Link></li>
          <li><Link to={historyUrl} activeClassName="active" draggable="false">历史数据</Link></li>
        </ul>
        <p>{this.state.sellerName}</p>
      </div>
      {this.props.children && React.cloneElement(this.props.children, {changeSellerName: this.changeSellerName})}
    </div>);
  }

}
export default Chart;

