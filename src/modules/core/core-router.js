import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingInline from './components/loading-inline';

const FactsModule = lazy(() => import('../facts/facts-module'));

const CoreRouter = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingInline text={'Suspense loading'} />}>
          <Switch>
            <Route path="/" render={props => <FactsModule {...props} />} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};
export default CoreRouter;
