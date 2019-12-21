import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const CategoriesPage = lazy(() => import('./containers/categories-page'));
const CategoryPage = lazy(() => import('./containers/category-page'));

const FactsRouter = () => {
  return (
    <Suspense fallback={<div>Suspense Loading...</div>}>
      <Switch>
        <Route exact path="/" render={props => <CategoriesPage {...props} />} />
        <Route
          path="/:category"
          render={props => <CategoryPage {...props} />}
        />
      </Switch>
    </Suspense>
  );
};
export default FactsRouter;
