import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStatetoProps = (state) => {
  return {
    state
  };
  // TODO: add Boolean logged in
};

const mapDispatchtoProps = (dispatch, { location }) => {
  const locationString = location.pathname.slice(1);
  const formType = locationString.charAt(0).toUpperCase() +
                    locationString.slice(1);
  const processForm = (formType === 'Login') ? login : signup;
  return {
    submitForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);
