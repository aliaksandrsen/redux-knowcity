import React from 'react';
import { connect } from 'react-redux';

import Debug from './Debug';
class DebugContainer extends React.Component {
  render() {
    return <Debug {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    registration: state.registration,
  };
};

export default connect(mapStateToProps)(DebugContainer);
