import { connect } from 'react-redux';
import SessionForm from './session_form';
// TODO: import session actions

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
  return {
    // TODO: add submit form action and clear session errors
    formType
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);
