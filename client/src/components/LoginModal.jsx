import React from 'react';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormUser: '',
      loginFormPassword: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSigninClick = this.onSigninClick.bind(this);
    this.onCreateClick = this.onCreateClick.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSigninClick(e) {
    console.log('signin');
  }

  onCreateClick(e) {
    console.log('Redirect to account creation.');
  }

  render() {
    return (
      <div className="loginModalContainer">
        <div className="loginModalWrapper">
          <div className="loginModal">
            <div className="formBorderTriangles" />

            <p className="inputUserTitle">Email</p>
            <input
              name="loginFormUser"
              className="formInputUser"
              type="text"
              onChange={this.onChangeHandler}
            />

            <p className="inputPasswordTitle">Password</p>
            <form className="passwordForm" onSubmit={(e) => e.preventDefault()}>
              <input
                name="loginFormPassword"
                className="formInputPassword"
                type="password"
                onChange={this.onChangeHandler}
                autoComplete="off"
              />
              <button className="formButtonPassword">Show</button>
            </form>

            <p className="loginForgot">Forgot Password?</p>

            <p className="loginFormAgreement">
              By signing into your account, you agree to REI's{' '}
              <mark class="blue">Terms of Use</mark> and acknowledge you have
              read its <mark class="blue">Privacy Policy</mark>.
            </p>

            <button
              name="signin"
              className="loginFormSignin"
              onClick={this.onSigninClick}
            >
              Sign in
            </button>

            <button
              name="create"
              className="loginFormCreate"
              onClick={this.onCreateClick}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = LoginModal;
