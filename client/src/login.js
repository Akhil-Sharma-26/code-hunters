import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const submitThis = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };
  return (
    <div className="login-container">
      <form className="login-form" action="" onSubmit={submitThis}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passw">Roll Number</label>
          <input type="Number" name="rollno" id="rollno" required />
        </div>
        <div className="form-group">
          <label htmlFor="passw">Password</label>
          <input
            type="password"
            name="passw"
            id="passw"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
            required
          />
        </div>
        <button type="submit"> <a href="/" style={{color: "white"}}> Login</a> </button>
      </form>
    </div>
  );
};
export default Login;
