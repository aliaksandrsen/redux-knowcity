import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { emailSelector, passwordSelector } from '../../store/auth/reducers';
import Auth from './Auth';

const AuthContainer = (props) => {
  const dispatch = useDispatch();
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);

  return (
    <Auth {...props} email={email} password={password} dispatch={dispatch} />
  );
};

export default AuthContainer;
