import React, { useEffect } from 'react';

import { setEmail, setPassword } from '../../store/auth/actions';

const Auth = ({ email, password, dispatch }) => {
  // не нужно указывать setEmail в deps
  // useEffect(() => {
  //   setEmail('aaa@gmail.com');
  // }, []);

  const onEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const onPasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <div className="auth">
      <h3>Sign In</h3>
      <form>
        <div>
          <input
            type="text"
            name="login"
            value={email}
            autoComplete="off"
            placeholder="E-mail"
            spellCheck={false}
            onChange={onEmailChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </div>

        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
