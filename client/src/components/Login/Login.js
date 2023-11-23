import React, { useState } from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="signin">
        <div className="background" />
        <h1 className="sign-in">Sign In</h1>
        <span className="if-you-already">
          If you already have an account, let’s log in.
        </span>
        <div className="forget-your-password">Forget Your Password?</div>
        <span className="username">Username</span>
        <span className="password">Password</span>
        <div className="field">
          <input
            className="rectangle-insert-your-nam"
            name="username"
            id="username"
            type="text"
            placeholder="Insert your username"
          />
          <div className="insert-your-username"></div>
        </div>
        <div className="field1">
          <input className="rectangle-insert-your-nam" type="text" />
          <div className="insert-your-password">Insert your password</div>
        </div>
        <div className="button">
          <button className="rectangle-button" />
          <div className="sign-in1">SIGN IN</div>
        </div>
      </div>
      <div className="signup">
        <img className="sign-up-side" alt="" src="/sign-up-side.svg" />
        <div className="book-1-parent">
          <img className="book-1-icon" alt="" src="/book-1@2x.png" />
          <div className="are-you-register">
            Are you register? No, just sign up for create your own Study Plan.
          </div>
          <div className="button1">
            <button className="rectangle-button1" text="Crear nueva cuenta" />
            <button className="create-your-account">CREATE YOUR ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
