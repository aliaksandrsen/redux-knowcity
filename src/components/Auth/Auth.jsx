import React from 'react';

const Auth = ({ email, password, setEmail, setPassword }) => {
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
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
