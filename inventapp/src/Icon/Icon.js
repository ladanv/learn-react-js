import React, {Component} from 'react';
import style from './Icon.scss';
import icons from './icons.svg';

class Icon extends Component {

  render({ name }) {
    const iconSize = this.getSize();
    return (
      <svg className={style.icon} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref={icons + '#' + name} />
      </svg>
    );
  }

  getSize() {
    const { size, width, height } = this.props;
    var iWidth, iHeight;

    if (width && height) {
      iWidth = width;
      iHeight = height;
    } else if (size) {
      if (size == 'small') {
        iWidth = iHeight = 12;
      } else if (size == 'large') {
        iWidth = iHeight = 24;
      }
    } else {
      iWidth = iHeight = 16;
    }

    return { width: iconWidth, height: iconHeight };
  }

}

export default Icon;
