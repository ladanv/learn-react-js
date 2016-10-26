import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Button.scss';

class Button extends Component {
  render() {
    const {label, type, size, children, className, ...props} = this.props;
    const btnClasses = classNames(style.button, style[`${type}`], style[`${size}`], className);

    return (
      <button className={btnClasses}>
        {label || children}
      </button>
    );
  }
}

export default Button;
