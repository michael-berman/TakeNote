import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === 'login') {
      this.state = {
        username: "",
        password: ""
      };
    } else {
      this.state = {
        email: "",
        username: "",
        password: ""
      };
    }
  }

  update(field){
    return e => {
      return this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const formButton = (this.props.formType === "Signup") ?
      "Sign Up" : "Login";
    return (
      <div>
        <form>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="password" />
          <button>{formButton}</button>
        </form>
      </div>
    );
  }
}

// TODO: add classnames to form and input
// TODO: add demo login


export default withRouter(SessionForm);
