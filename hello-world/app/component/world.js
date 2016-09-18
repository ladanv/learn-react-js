import React, {Component} from 'react';
import config from '../../config.json';
 
class World extends Component {
  render() {
    return (
    	<h1>{config.world}</h1>
    	);
  }
}

export default World;