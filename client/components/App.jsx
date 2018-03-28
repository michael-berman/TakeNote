import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './footer/footer';
// TODO: add auth routes

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={SessionFormContainer} />
        <Route path='/signup' component={SessionFormContainer} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
