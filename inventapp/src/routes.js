import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import NotFound from './NotFound';

export const routes = (
    <div>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);
