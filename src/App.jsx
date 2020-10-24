import React from 'react';

import Auth from './components/Auth/AuthContainer';
import Registration from './components/Registration/RegistrationContainer';
import Debug from './components/Debug/DebugContainer';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Complex State</h1>

        <div className="forms">
          <Auth />
          <Registration />
        </div>

        <Debug />
      </div>
    );
  }
}
