import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [passwordError, setPasswordError] = useState("");

   const handleUsernameChange = (e) => {
      setUsername(e.target.value);
      setUsernameError(""); // Limpiar mensaje de error al cambiar el username
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordError(""); // Limpiar mensaje de error al cambiar la contraseña
   };

   const handleLogin = () => {
      // Validación de campos vacíos
      if (!username.trim()) {
         setUsernameError("Por favor, ingresa tu nombre de usuario.");
      }

      if (!password.trim()) {
         setPasswordError("Por favor, ingresa tu contraseña.");
      }

      // Simula una validación simple; deberías realizar la autenticación en tu backend
      if (username === "usuario" && password === "contraseña") {
         alert("Login exitoso. Redirigiendo...");
      } else {
         alert("Nombre de usuario o contraseña incorrectos");
         setUsernameError("Por favor, ingresa un nombre de usuario correcto.");
         setPasswordError("Por favor, ingresa una contraseña correcta.");
      }
   };
   return (
      <div className="login">
         <div className="signin">
            <div className="background" />
            <h1 className="sign-in">Sign In</h1>
            <span className="if-you-already">If you already have an account, let’s log in.</span>
            {/* <div className="forget-your-password">Forget Your Password?</div> */}
            <span className="username">Username</span>
            <span className="password">Password</span>
            <div className="field">
               <input className="rectangle-insert-your-nam" name="username" id="username" type="text" placeholder="Insert your username" value={username} onChange={handleUsernameChange} />
               {usernameError && (
                  <div className="error-message" style={{ marginTop: "60px" }}>
                     {usernameError}
                  </div>
               )}
            </div>
            <div className="field1">
               <input className="rectangle-insert-your-nam" type="password" name="password" id="password" placeholder="Insert your password" value={password} onChange={handlePasswordChange} />
               {passwordError && (
                  <div className="error-message" style={{ marginTop: "60px" }}>
                     {passwordError}
                  </div>
               )}
            </div>
            <div className="button">
               <button className="rectangle-button" type="button" onClick={handleLogin} />
               <div className="sign-in1" onClick={handleLogin}>
                  SIGN IN
               </div>
            </div>
         </div>
         <div className="signup">
            <img className="sign-up-side" alt="" src="/sign-up-side.svg" />
            <div className="book-1-parent">
               <Link to="/">
                  <img className="book-1-icon" alt="" src="/book-1@2x.png" />
               </Link>
               <div className="are-you-register">Are you register? No, just sign up for create your own Study Plan.</div>
               <div className="button1">
                  <button className="rectangle-button1" text="Crear nueva cuenta" />
                  <Link to="signup">
                     <button className="create-your-account">CREATE YOUR ACCOUNT</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
