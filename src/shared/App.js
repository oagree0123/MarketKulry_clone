import './App.css';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configStore';

import Main from '../pages/Main';
import ProductDetail from '../pages/ProductDetail';
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Main} />
        <Route path='/product/:id' exact component={ProductDetail} />
      </ConnectedRouter>
    </>
  );
}

export default App;
