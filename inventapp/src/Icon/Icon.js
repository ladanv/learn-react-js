import React, {Component} from 'react';
import style from './Icon.scss';
import icons from './icons.svg';

class Icon extends Component {

  render() {
    const iconSize = this.getSize();
    return (
      <svg className={style.icon} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref={icons + '#' + this.props.name} />
      </svg>
    );
  }

  getSize() {
    const { size, width, height } = this.props;
    var iconWidth, iconHeight;

    if (width && height) {
      iconWidth = width;
      iconHeight = height;
    } else if (size) {
      if (size == 'small') {
        iconWidth = iconHeight = 12;
      } else if (size == 'large') {
        iconWidth = iconHeight = 24;
      }
    } else {
      iconWidth = iconHeight = 16;
    }

    return { width: iconWidth, height: iconHeight };
  }

}

export default Icon;
