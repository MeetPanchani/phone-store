import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import store from './Store';
import Modal from './components/Modal'

function App() {
  return (
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/details/:id' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Provider>
  );
}

export default App;
