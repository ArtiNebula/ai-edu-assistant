// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <img src="/education_login.png" alt="Login" />
//       </div>
//       <div className="login-right">
//         <h1>Welcome to our classroom hub!</h1>
//         <p>Please login to continue</p>
//         <form className="login-form">
//           <input type="email" placeholder="Email" className="input-field" />
//           <input type="password" placeholder="Password" className="input-field" />
//           <button type="submit" className="login-btn">Login</button>
//           <button type="button" className="register-btn">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Side - Illustration */}
      <div className="login-left" style={{"background": "#fef2f2"}}>
        <img src="/login2.png" alt="Login" />
      </div>

      {/* Right Side - Form */}
      <div className="login-right">
        <h1>Hello! Welcome back!</h1>
        <p>Let’s Login to Your Account</p>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-link">
          Don’t have an account? /registerSign In now
        </p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Cookies Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Login;