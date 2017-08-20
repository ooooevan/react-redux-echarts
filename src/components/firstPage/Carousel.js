
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaCloud from 'react-icons/lib/fa/cloud';
import FaCog from 'react-icons/lib/fa/cog';
import FaMousePointer from 'react-icons/lib/fa/mouse-pointer';
import FaDatabase from 'react-icons/lib/fa/database';
import FaEdit from 'react-icons/lib/fa/edit';
import FaExchange from 'react-icons/lib/fa/exchange';
import FaLocationArrow from 'react-icons/lib/fa/location-arrow';
import FaRssSquare from 'react-icons/lib/fa/rss-square';

import CarouselNav from './CarouselNav.js';
import ButtonGroup from './ButtonGroup.js';
import CarouselImage from './CarouselImage.js'

export default class Carousel extends Component {
  constructor (...args) {
    super(...args);
    /* 存放图片地址及当前展示的图片索引 */
    this.state = {
      imageSrc: [
        '../../../lib/images/banner-bg.jpg', 
        '../../../lib/images/banner-bg.jpg', 
        '../../../lib/images/banner-bg.jpg'],
      currentIndex: 0,

    };
    /* 定时器引用 */
    this.timer = null;
    
    /* 绑定事件中this */
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this._updateIndex = this._updateIndex.bind(this);
  }

  /**
   * 组件加载完毕后，图片自动播放
   */
  componentDidMount() {
    this.timer = setInterval(
            () => {
                this.setState({
                  currentIndex: (this.state.currentIndex + 1) % 5
                });
            },
            500000
        );
  }

  /**
   * 组件卸载时，清理定时器
   */
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  /**
   * 展示前一张图片
   */
  prevImage(){
    var currentIndex = this.state.currentIndex;
    var len = this.state.imageSrc.length;
    /* 计算下一张图片索引 */
    currentIndex = (currentIndex - 1) >= 0 ?  
        (currentIndex - 1) % len : len - 1;
    /* 调用更新函数，更新当前显示的图片，并刷新定时器 */
    this._updateIndex(currentIndex, len);
  }

  /**
   * 展示下一张图片
   */
  nextImage(){
    var currentIndex = this.state.currentIndex;
    var len = this.state.imageSrc.length;
    /* 计算下一张图片索引 */
    currentIndex = (currentIndex + 1) % len;
    /* 调用更新函数，更新当前显示的图片，并刷新定时器 */
    this._updateIndex(currentIndex, len);
  }

  /**
   * 展示选中索引图片
   * @param  {number} index 索引值
   */
  selectImage(index) {
    var len = this.state.imageSrc.length;
    this._updateIndex(index, len);
  }

  /**
   * 工具函数，用于更新state，以及刷新定时器
   * @param  {number} index 将要展示图片的索引
   * @param  {number} len   展示图片总张数
   * @param  {number} delay 动画持续时间
   */
  _updateIndex(index, len, delay=4000) {
    /* 清除定时器 */
    this.timer && clearInterval(this.timer);
    /* 设置当前展示图片 */
    this.setState({
      currentIndex: index
    });
    /* 打开定时器 */
    this.timer = setInterval(
            () => {
              var currentIndex = this.state.currentIndex;
                this.setState({
                  currentIndex: (currentIndex + 1) % len
                });
            },
            delay
        );
  }

  render() {
    return (
      <div className="carousel">
        <CarouselImage
          imageSrc={this.state.imageSrc}
          currentIndex={this.state.currentIndex}
          enterDelay={1500}
          leaveDelay={1500}
          component={"li"}
          name={"carousel-image-item"}
        />  
        {/*<CarouselNav 
          carouselNavItems={this.state.imageSrc}
          currentIndex={this.state.currentIndex}
          selectImage={this.selectImage}
        />*/}
        <ButtonGroup 
          prevImage={this.prevImage}
          nextImage={this.nextImage}
        />
        <div className="introduction">
          <h2>产品介绍</h2>
          <p>本系统主要通过WIFI探针收集MAC地址、出现时间、出现地点、与探针距离，探针设备会定时发送数据到服务端， 通过一段时间数据平台产生大量的用户数据，然后使用大数据分析技术， 采用离线计算和实时计算技术相结合的方式，能够对商业环境中门店的门前人流量、进店客流量、进入跳出量、新老顾客数量及新增量、在店平均时长等数据项进行分析 为销售策略调整提供参考。</p>
          {/*<ul className='introductionWall'>
            <li><FaMousePointer /><p>操作简单</p><span>各项数据信息明确，操作简单</span></li>
            <li><FaDatabase /><p>内容详细</p><span>各项数据图文+表格展示，内容详细</span></li>
            <li><FaEdit /><p>自定义阈值</p><span>如新老顾客、深访率等支持自定义设置</span></li>
            <li><FaExchange /><p>数据对比</p><span>支持不同商家各数据项不同时间段对比</span></li>
            <li><FaEdit /><p>自定义时间</p><span>可以选择任意时间或时间段查询</span></li>
            <li><FaLocationArrow /><p>一键管理设备</p><span>远程设备管理方便快捷</span></li>
          </ul>*/}

          <ul className='introductionTable'>
            <li><FaBarChart /><p>数据统计</p><br /><span>系统包含商城与店铺各11项指标展示。</span></li>
            <li><FaCloud /><p>多样化数据</p><br /><span>系统支持从日周月等多时间维度对数据进行“二次编排”。</span></li>
            <li><FaCog /><p>信息管理</p><br /><span>系统支持对店铺,统计阈值等信息进行管理。</span></li>
            <li><FaRssSquare /><p>设备远程控制</p><br /><span>系统支持对探针设备远程进行重启，关机，上传控件等操作。</span></li>
          </ul>
        </div>
        <div className='introductionFooter'>
          <p>Oldpie</p>
          <p>© 2017 广东海洋大学 </p>
        </div>
      </div>
    );
  }
}