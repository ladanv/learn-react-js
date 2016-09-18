import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/hello';
import World from './component/world';

import './main.css';

ReactDOM.render(<Hello/>, document.getElementById('hello'));
ReactDOM.render(<World/>, document.getElementById('world'));