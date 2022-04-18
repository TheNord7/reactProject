import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  status: {
    danger: orange[500],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

