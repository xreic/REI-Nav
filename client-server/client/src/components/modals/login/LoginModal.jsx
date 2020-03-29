import React from 'react';
import axios from 'axios';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      failed: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSigninClick = this.onSigninClick.bind(this);
    this.onCreateClick = this.onCreateClick.bind(this);
    this.passwordToggle = this.passwordToggle.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSigninClick(e) {
    e.preventDefault();
    let auth = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.retrieveUserdata(auth, (err) => {
      if (err) {
        this.setState({ failed: true });
      } else {
        this.setState({
          failed: false,
          username: '',
          password: ''
        });
      }
    });
  }

  onCreateClick(e) {
    console.log('Redirect to account creation.');
  }

  passwordToggle(e) {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {
    if (this.props.userFullame !== '') {
      return (
        <div className="loginModalContainer">
          <div className="loginModalWrapper">
            <div className="loginModal">
              <span
                className="loginModalClose"
                onClick={this.props.hideLoginModal}
              >
                <p>✖</p>
              </span>
              <div className="formBorderTriangles" />
              <p className="loggedFullname">{this.props.userFullame}</p>
              <p className="becomeMember">Become an REI member</p>
              <p className="memeberBenefits">
                Earn an Annual Dividend, plus get access to exclusive products,
                events and offers.
              </p>
              <ul className="accountActionsLogged">
                <li className="accountViewAccount">My account</li>
                <li className="accountViewHistory">Purchase history</li>
                <li className="accountViewWish">Wish lists</li>
              </ul>
              <p
                className="logoutAccount"
                onClick={() => this.props.changeLogin()}
              >
                Sign out
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loginModalContainer">
          <div className="loginModalWrapper">
            <div className="loginModal">
              <span
                className="loginModalClose"
                onClick={this.props.hideLoginModal}
              >
                <p>✖</p>
              </span>
              <div className="formBorderTriangles" />
              {this.state.failed ? (
                <div className="failedGrid">
                  <div className="failedSymbol">🛑</div>
                  <div className="failedLogin">
                    Hmm, the information you entered doesn't match our records.
                  </div>
                </div>
              ) : null}

              <p className="inputUserTitle">Email</p>
              <form id="doubleForm1" onSubmit={(e) => this.onSigninClick(e)}>
                <input
                  id="loginInputUser"
                  name="username"
                  className="formInputUser"
                  type="text"
                  onChange={this.onChangeHandler}
                />
              </form>

              <p className="inputPasswordTitle">Password</p>
              <form
                id="doubleForm2"
                className="passwordForm"
                onSubmit={(e) => this.onSigninClick(e)}
              >
                {this.state.showPassword ? (
                  <input
                    type="text"
                    name="password"
                    className="formInputPassword"
                    autoComplete="off"
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        this.onSigninClick(e);
                      }
                    }}
                    onChange={this.onChangeHandler}
                  />
                ) : (
                  <input
                    type="password"
                    name="password"
                    className="formInputPassword"
                    autoComplete="off"
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        this.onSigninClick(e);
                      }
                    }}
                    onChange={this.onChangeHandler}
                  />
                )}
                <button
                  className="formButtonPassword"
                  onClick={(e) => {
                    e.preventDefault();
                    this.passwordToggle();
                  }}
                >
                  {this.state.showPassword ? 'Hide' : 'Show'}
                </button>
              </form>

              <p className="loginForgot">Forgot Password?</p>

              <p className="loginFormAgreement">
                By signing into your account, you agree to REI's{' '}
                <mark className="blue">Terms of Use</mark> and acknowledge you
                have read its <mark className="blue">Privacy Policy</mark>.
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
}

module.exports = LoginModal;
