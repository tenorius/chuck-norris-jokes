import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const FactsModule = lazy(() => import('../facts/facts-module'));

const CoreRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Suspense Loading...</div>}>
        <Switch>
          <Route path="/" render={props => <FactsModule {...props} />} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default CoreRouter;
