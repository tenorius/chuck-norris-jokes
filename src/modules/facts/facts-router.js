import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../core/components/ErrorBoundary';
import LoadingInline from '../core/components/loading-inline';

const CategoriesPage = lazy(() => import('./containers/categories-page'));
const CategoryPage = lazy(() => import('./containers/category-page'));

const FactsRouter = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingInline text={'Suspense loading'} />}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <CategoriesPage {...props} />}
          />
          <Route
            path="/:category"
            render={props => <CategoryPage {...props} />}
          />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};
export default FactsRouter;
