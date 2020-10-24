import React from 'react';

class Debug extends React.Component {
  render() {
    return (
      <div className="debug">
        <div>
          <b>Auth:</b>
          <ul>
            <li>Email: {this.props.auth.email}</li>
            <li>Password: {this.props.auth.password}</li>
          </ul>
        </div>
        <div>
          <b>Registration:</b>
          <ul>
            <li>Email: {this.props.registration.email}</li>
            <li>Password: {this.props.registration.password}</li>
            <li>Repeat Password: {this.props.registration.repeatPassword}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Debug;
