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
    const formHeader = (this.props.formType === "Signup") ?
      "Create Account" : "Sign in";
    const emailPlaceHolder = (this.props.formType === "Signup") ?
      "Your Email Address" : "Email Address";
    const passwordPlaceHolder = (this.props.formType === "Signup") ?
      "Create a Password" : "Password";
    const formButton = (this.props.formType === "Signup") ?
      "Sign Up" : "Login";
    const switchPageHeader = (this.props.formType === "Signup") ?
      "Already have an account?" : "Don't have an account?";
    const switchPageLink = (this.props.formType === "Signup") ?
        "/login" : "/signup";
    const switchPageLinkName = (this.props.formType === "Signup") ?
      "Sign in" : "Create Account";
    return (
      <div className="session-form-container">
        <div className="session-form-header-wrapper">
          <div className="fas fa-5x fa-pen-square session-logo"></div>
          <h1 className="session-form-header">{formHeader}</h1>
        </div>
        <div className="session-form-wrapper">
          <div className="google-signin-wrapper">
              <a className="google-button" href='/api/auth/google'>
                <span className="fab fa-lg fa-google google-img"></span>
                <div className="google-inner" >Sign in with Google
                </div>
              </a>
          </div>
          <div className="session-form-horizontal-divider">
            <span className="left-divider"></span> or
            <span className="right-divider"></span>
          </div>
          <form className="session-form-box">
            <input type="text" value={this.state.email}
              onChange={this.update('email')}
              className="session-form-input"
              placeholder={emailPlaceHolder}/>
            <input type="password" value={this.state.password}
              onChange={this.update('password')}
              className="session-form-input"
              placeholder={passwordPlaceHolder} />
            <input type="submit" value={formButton}
              onClick={this.handleSubmit}
              className="session-form-submit" />
          </form>
        </div>
        <div className="switch-session-form-wrapper">
          {switchPageHeader}<br />
        <Link className="session-page-link" to={switchPageLink}>
          {switchPageLinkName}
        </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
