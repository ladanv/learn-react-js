import React, {Component} from 'react';
import config from '../../config.json';
import styles from './hello.css';
 
class Hello extends Component {
  render() {
    return (
    	<h1 className={styles.root}>{config.hello}</h1>
    	);
  }
}

export default Hello;