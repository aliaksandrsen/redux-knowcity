import React /* , { useEffect } */ from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setEmail, setPassword } from '../../store/auth/actions';
import { emailSelector, passwordSelector } from '../../store/auth/reducers';

const Auth = () => {
  const dispatch = useDispatch();

  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);

  // не нужно указывать setEmail в deps
  // useEffect(() => {
  //   dispatch(setEmail('aaa@gmail.com'));
  // }, [dispatch]);

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
