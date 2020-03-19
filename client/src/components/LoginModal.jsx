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
            <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
              <label className="formBorderTriangles" />
              <label className="formLabelUser">
                Email
                <input
                  name="loginFormUser"
                  className="loginFormUser"
                  type="text"
                  onChange={this.onChangeHandler}
                />
              </label>
              <label className="formLabelPassword">
                Password
                <input
                  name="loginFormPassword"
                  className="loginFormPassword"
                  type="password"
                  onChange={this.onChangeHandler}
                  autoComplete="off"
                />
                {/* <button>✖</button> */}
              </label>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = LoginModal;
