import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', username, password, rememberMe);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  return (
    <main className="login-page">
      <div className="login-box">
        <h1 className="login-title">Welcome Back!</h1>
        <h3 style={{ fontSize: '0.9375rem', textAlign: 'center' }}>Please enter your Customer login credentials.</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-group">
              <input type="email" id="email" value={username} onChange={handleUsernameChange} placeholder="Email" className="login-input with-icon" />
              <div className="input-icon email-icon">
                <i className="fas fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-icon password-icon">
                <i className="fas fa-solid fa-unlock"></i>
              </div>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="login-input with-icon" />
              <div className="input-icon eye-icon" style={{ cursor: 'pointer' }}>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div>
              <label className="login-label">
                <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} className="login-checkbox" />Remember me
                <span className="forgot-password">Forgot password?</span>
              </label>
            </div>
        </div><br/><br/><br/>
        <div className="form-groupp">
            <div>
                <button type="submit" className="login-button">Sign in</button>
            </div>
        </div>
    </form>
</div>
</main>
  );
}

export default Login;