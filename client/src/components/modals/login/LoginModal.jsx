// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Redux
import { hideLogin, userLogin, userLogout } from '../../../redux/actions';

const mapStateToProps = (state) => ({
  name: state.login.name,
  loggedIn: state.login.user
});

const mapDispatchToProps = (dispatch) => ({
  hideLogin: () => dispatch(hideLogin()),
  userLogin: (payload) => dispatch(userLogin(payload)),
  userLogout: () => dispatch(userLogout())
});

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      failed: false
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSigninClick = async (e) => {
    e.preventDefault();
    let auth = {
      username: this.state.username,
      password: this.state.password
    };

    try {
      const { data } = await axios.post('/api/login/', auth);

      this.props.userLogin(data[0]['name']);

      this.setState({
        failed: false,
        username: '',
        password: ''
      });
    } catch (error) {
      this.setState({ failed: true });
    }
  };

  passwordToggle = (e) => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  render() {
    if (this.props.name !== '') {
      return (
        <div className="loginModalContainer">
          <div className="loginModalWrapper">
            <div className="loginModal">
              <span className="loginModalClose" onClick={this.props.hideLogin}>
                <p>✖</p>
              </span>
              <div className="formBorderTriangles" />
              <p className="loggedFullname">{this.props.name}</p>
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
              <p className="logoutAccount" onClick={this.props.userLogout}>
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
              <span className="loginModalClose" onClick={this.props.hideLogin}>
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
              <form id="doubleForm1" onSubmit={this.onSigninClick}>
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
                onSubmit={this.onSigninClick}
              >
                <input
                  type={this.state.showPassword ? 'text' : 'password'}
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
              <button name="create" className="loginFormCreate">
                Create an account
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
