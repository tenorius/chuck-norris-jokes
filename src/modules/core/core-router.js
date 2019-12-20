import React, { lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { AppHistoryProvider } from './context/app-history-context';

import PageTransitionHandler from './components/page-transition-handler';
import { CartProvider } from '../cart/context/cart-context';
import { AddressProvider } from '../address/context/address-context';
import Navbar from './components/navbar';
import PrivateRoute from './components/private-route';

const HomeModule = lazy(() => import('../home/home-module'));
const MerchantModule = lazy(() => import('../merchant/merchant-module'));
const LoginModule = lazy(() => import('../login/login-module'));
const OrdersModule = lazy(() => import('../orders/orders-module'));
const ProfileModule = lazy(() => import('../profile/profile-module'));

const AppRouter = () => {
  return (
    <Router>
      <AppHistoryProvider>
        <LastLocationProvider>
          <AddressProvider>
            <CartProvider>
              <PageTransitionHandler duration={500}>
                <Route
                  exact
                  path="/"
                  render={props => <HomeModule {...props} />}
                />
                <Route
                  path="/login"
                  render={props => <LoginModule {...props} />}
                />
                <PrivateRoute
                  path="/orders"
                  render={props => <OrdersModule {...props} />}
                />
                <Route
                  path="/profile"
                  render={props => <ProfileModule {...props} />}
                />
                <Route
                  path="/:merchantSlug"
                  render={props => <MerchantModule {...props} />}
                />
              </PageTransitionHandler>
              <Navbar />
            </CartProvider>
          </AddressProvider>
        </LastLocationProvider>
      </AppHistoryProvider>
    </Router>
  );
};
export default AppRouter;
