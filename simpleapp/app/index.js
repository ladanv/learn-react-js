import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './component/App';
import Home from './component/Home';
import InventItemList from './component/InventItemList';
import InventItem from './component/InventItem';


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='inventory' component={InventItemList} >
        <Route path='/inventory/:itemId' component={InventItem} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
)