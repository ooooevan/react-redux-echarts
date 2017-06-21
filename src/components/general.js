import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import path from 'path';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
const FaRedditAlien = require('react-icons/lib/fa/reddit-alien');
import '../styles/firstPage.scss';


class General extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // 取消进入的动画
    setTimeout(() => {
      const round = document.getElementsByClassName('in-round')[0];
      if (round && round.style) {
        round.style.display = 'none';
      }
    }, 0);

  }

  render() {
    let imgSrc = path.dirname(__filename)+'../../lib/images/logo.50.png';
    return (<div>
      <nav className="nav">
        <div className="brand"><Link to='/firstPage'><img src={imgSrc} /></Link></div>
        <ul className="navMenu">
          <li><Link to="/firstPage" activeClassName="active" draggable="false">概况</Link></li>
          <li><Link to="/sellers" activeClassName="active" draggable="false">商家</Link></li>
          <li><Link to="/statistics" activeClassName="active" draggable="false">统计分析</Link></li>
          <li><Link to="/compare" activeClassName="active" draggable="false">数据对比</Link></li>
        </ul>
      </nav>

      {this.props.children}

    </div>);
  }
}
		// <DevTool/>


export default General;

