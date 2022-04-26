import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { tamsTheme } from './theme/index';
import Routes from './routes/index';
import configureStore from './store';

import './App.css';

function App() {
  const store = configureStore();
  return (
    <ThemeProvider theme={tamsTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
