import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
/* import * as serviceWorker from './serviceWorker'; */

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>
  , document.getElementById('root'));

/*   serviceWorker.register(); */