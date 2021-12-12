import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Detail } from '@/pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail" component={Detail} />
    </Switch>
  );
};
