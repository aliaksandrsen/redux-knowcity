import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';

import { setEmail, setPassword } from '../../store/auth/actions';

class AuthContainer extends React.Component {
  render() {
    return <Auth {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

// short version
// const mapDispatchToProps = {
//   setEmail,
//   setPassword,
// };

// full version
const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
