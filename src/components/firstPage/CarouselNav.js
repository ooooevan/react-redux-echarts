import React, {PropTypes} from 'react';

const propTypes = {
  carouselNavItems: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  selectImage: PropTypes.func.isRequired
}

/* 底部显示组件 */
function CarouselNav(props) {
  let {carouselNavItems, currentIndex, selectImage} = props;
  return (
    <ul className="carousel-nav">
      {
        carouselNavItems.map(function (item, i) {
          if(i == currentIndex) {
            return <li className="carousel-nav-item carousel-nav-item-active" key={i} onClick={()=>selectImage(i)}></li>
          } else {
            return <li className="carousel-nav-item" key={i} onClick={()=>selectImage(i)}></li>
          }
        }) 
      }
    </ul>
  );
}

CarouselNav.propTypes = propTypes;

export default CarouselNav;