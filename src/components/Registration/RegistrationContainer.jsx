import React from 'react';
import { connect } from 'react-redux';

import Registration from './Registration';
import {
  setEmail,
  setPassword,
  setRepeatPassword,
} from '../../store/registration/actions';

class RegistrationContainer extends React.Component {
  render() {
    return <Registration {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.registration.email,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPassword,
  setRepeatPassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
