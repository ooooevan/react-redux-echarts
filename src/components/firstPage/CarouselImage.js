import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

/* 定义参数类型 */
const propTypes = {
  imageSrc: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  enterDelay: PropTypes.number.isRequired,
  leaveDelay: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired
}

/* 轮播图片组件 */
function CarouselImage(props) {
  let {imageSrc, currentIndex, enterDelay, leaveDelay, name, component} = props;

  return (
    <ul className="carousel-image">
      <CSSTransitionGroup
        component={component}
        transitionName={name}
        transitionEnterTimeout={enterDelay}
        transitionLeaveTimeout={leaveDelay}
        className={name}>
        <img 
          src={imageSrc[currentIndex]} 
          key={imageSrc[currentIndex]} 
          draggable={false}
        />
        {currentIndex === 0 && <h2>多样化的数据展示</h2>}
        {currentIndex === 0 && <p>系统支持包含客流,门前客流，新老客户，深访跳出等11项数据报表展示。</p>}
        {currentIndex === 1 && <h2>精准数据统计</h2>}
        {currentIndex === 1 && <p>结合离线与实时计算，数据统计更精准</p>}
        {currentIndex === 2 && <h2>使用便捷</h2>}
        {currentIndex === 2 && <p>仅需几分钟您便可学会该系统的使用方式。</p>}
      
      </CSSTransitionGroup>
    </ul>
  );
} 

CarouselImage.propTypes = propTypes;

export default CarouselImage;