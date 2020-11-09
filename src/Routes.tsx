import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="*" component={() => (<div>Page not found</div>)} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
