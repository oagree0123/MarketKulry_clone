import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import Login from '../Pages/Login';
import Main from '../Pages/Main';



function App() {
  return (
    <div className="App">
      <ConnectedRouter  history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
        </ConnectedRouter>
    </div>
  );
}

export default App;
