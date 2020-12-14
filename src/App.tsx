import React from 'react';
import { Provider } from 'react-redux'
import store from 'store'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes';
// import './App.css';

const  App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
