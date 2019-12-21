import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import MainLogo from '../components/main-logo';

const Root = styled.main`
  padding: 16px;
  background-color: sandybrown;
  font-family: Roboto;
  * {
    box-sizing: border-box;
  }
`;
function App({ children }) {
  return (
    <Root>
      <MainLogo />
      {children}
    </Root>
  );
}

export default App;
