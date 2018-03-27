import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  update(field){
    return e => {
      return this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.submitForm(user).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const formButton = (this.props.formType === "Signup") ?
      "Sign Up" : "Login";
    return (
      <div className="session-form-wrapper">
        <a href='/api/auth/google'><span class="fa fa-google-plus"></span>Google</a>
        <form className="session-form-box">
          <input type="text" value={this.state.email}
            onChange={this.update('email')}
            className="session-form-input" placeholder="Email"/>
          <input type="password" value={this.state.password}
            onChange={this.update('password')}
            className="session-form-input" placeholder="password" />
          <input type="submit" value={formButton}
            onClick={this.handleSubmit}
            className="session-form-submit" />
        </form>
      </div>
    );
  }
}

// TODO: add classnames to form and input
// TODO: add demo login


export default withRouter(SessionForm);
