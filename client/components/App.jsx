import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
// TODO: add auth routes

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
