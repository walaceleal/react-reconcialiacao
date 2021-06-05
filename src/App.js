import React from 'react';
import Caso1 from './telas/Caso 1';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Caso1}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;