<<<<<<< HEAD
import React from 'react';
import axios from 'axios';

=======
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

>>>>>>> redux
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      failed: false
    };
<<<<<<< HEAD

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
=======
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSigninClick = async (e) => {
>>>>>>> redux
    e.preventDefault();
    let auth = {
      username: this.state.username,
      password: this.state.password
    };

<<<<<<< HEAD
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
=======
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
>>>>>>> redux
      return (
        <div className="loginModalContainer">
          <div className="loginModalWrapper">
            <div className="loginModal">
<<<<<<< HEAD
              <span
                className="loginModalClose"
                onClick={this.props.hideLoginModal}
              >
                <p>✖</p>
              </span>
              <div className="formBorderTriangles" />
              <p className="loggedFullname">{this.props.userFullame}</p>
=======
              <span className="loginModalClose" onClick={this.props.hideLogin}>
                <p>✖</p>
              </span>
              <div className="formBorderTriangles" />
              <p className="loggedFullname">{this.props.name}</p>
>>>>>>> redux
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
<<<<<<< HEAD
              <p
                className="logoutAccount"
                onClick={() => this.props.changeLogin()}
              >
=======
              <p className="logoutAccount" onClick={this.props.userLogout}>
>>>>>>> redux
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
<<<<<<< HEAD
              <span
                className="loginModalClose"
                onClick={this.props.hideLoginModal}
              >
=======
              <span className="loginModalClose" onClick={this.props.hideLogin}>
>>>>>>> redux
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
<<<<<<< HEAD
              <form id="doubleForm1" onSubmit={(e) => this.onSigninClick(e)}>
=======
              <form id="doubleForm1" onSubmit={this.onSigninClick}>
>>>>>>> redux
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
<<<<<<< HEAD
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
=======
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
>>>>>>> redux
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
<<<<<<< HEAD
              <button
                name="create"
                className="loginFormCreate"
                onClick={this.onCreateClick}
              >
=======
              <button name="create" className="loginFormCreate">
>>>>>>> redux
                Create an account
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

<<<<<<< HEAD
module.exports = LoginModal;
=======
export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
>>>>>>> redux
