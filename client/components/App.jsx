import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
// TODO: add auth routes

const App = () => {
  return (
    <div>
      <a href='/auth/google'><span class="fa fa-google-plus"></span>Google</a>
      <Switch>
        <Route path='/login' component={SessionFormContainer} />
        <Route path='/signup' component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
