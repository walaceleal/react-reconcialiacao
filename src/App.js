import React from 'react';
import Caso from './telas/Caso 2';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Caso}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;