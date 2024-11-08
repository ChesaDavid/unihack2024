import React from 'react';
import './App.css';
import logo from './assets/hospital.svg';
import App from './App';
function Login() {
    const handleLogin = (event) => {
        event.preventDefault(); // Prevents the form from submitting
        // Here you can add any logic, such as routing or authentication
        console.log("Login button clicked");
      };
  return (
    <><div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
              </p>

          </header>
      </div><div className="login-container">
              <div className="login-box">
                  <h2>Login</h2>
                  <form>
                      <div className="input-group">
                          <label htmlFor="username">Username</label>
                          <input type="text" id="username" name="username" required />
                      </div>
                      <div className="input-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" id="password" name="password" required />
                      </div>
                      <button type="submit" className="login-button" onClick={<App />}>Login</button>
                  </form>
              </div>
          </div></>
  );
}

export default Login;