import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Button.scss';

class Button extends Component {
  render() {
    const {label, bType, bSize, children, className, ...props} = this.props;
    const btnClasses = classNames(style.button, style[`${bType}`], style[`${bSize}`], className);

    return (
      <button className={btnClasses}>
        {label || children}
      </button>
    );
  }
}

export default Button;
