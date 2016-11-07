import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Button.scss';

class Button extends Component {
  render() {
    const {label, type, size, children, className} = this.props;
    const classes = classNames(styles.button, styles[`${type}`], styles[`${size}`], className);

    return (
      <button className={classes} {...this.props} >
        {label || children}
      </button>
    );
  }
}

export default Button;
