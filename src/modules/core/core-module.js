import React from 'react';
import AppRouter from './core-router';
import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { AuthProvider } from './context/auth-context';
import { MyOrdersProvider } from './context/my-orders-context';
import { StoredMerchantsProvider } from './context/stored-merchants-context';
import theme from './utils/theme';
import { CustomerProvider } from './context/customer-context';
import { NotificationsProvider } from './context/notifications-context';
import { SnackBarProvider } from './context/snackbar-context';
import { OrdersProvider } from './context/orders-context';

const App = () => {
  return (

                      <AppRouter />
                    
  );
};

export default App;
