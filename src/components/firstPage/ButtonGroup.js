import React, {PropTypes} from 'react';

const propTypes = {
  prevImage: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired
}

/* 左右切换的按钮组件 */
function ButtonGroup(props) {
  let {prevImage, nextImage} = props;
  return (
    <div className="button-group"> 
      <span className='button-left' onClick={prevImage}>{'<'}</span>
      <span className='button-right' onClick={nextImage}>{'>'}</span>
    </div>
  );
}

ButtonGroup.propTypes = propTypes;

export default ButtonGroup;