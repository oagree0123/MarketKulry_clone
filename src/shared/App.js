import './App.css';
import styled from 'styled-components';
import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import Login from '../pages/Login';
import Main from '../pages/Main';
import ProductDetail from '../pages/ProductDetail';
import Header from "../components/Header";



function App() {
  return (
    <>
      <Header />
      <ConnectedRouter  history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path='/product/:id' exact component={ProductDetail} />
      </ConnectedRouter>
    </>
  );
}

export default App;
