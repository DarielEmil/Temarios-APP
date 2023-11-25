import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(""); // Limpiar mensaje de error al cambiar el username
  };
<<<<<<< HEAD:client/src/components/Login/Login.js
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Limpiar mensaje de error al cambiar la contraseña
  };
  
  const handleLogin = () => {
    // Validación de campos vacíos
    if (!username.trim()) {
      setUsernameError("Por favor, ingresa tu nombre de usuario.");
      return;
    }
  
    if (!password.trim()) {
      setPasswordError("Por favor, ingresa tu contraseña.");
      return;
    }
  
    // Simula una validación simple; deberías realizar la autenticación en tu backend
    if (username === "usuario" && password === "contraseña") {
      // Datos correctos, redirige al usuario a la pantalla principal
      // Puedes usar la función de redirección de tu enrutador aquí
      alert("Login exitoso. Redirigiendo...");
    } else {
      // Datos incorrectos, muestra un mensaje de error
      alert("Nombre de usuario o contraseña incorrectos");
=======

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("Aqui ponen la url de la api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error("Credenciales incorrectas");
        }

        console.log("Formulario válido. Enviar datos...");
      } catch (err) {
        setError(err.message || "Hubo un problema al iniciar sesión");
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch("igualemente aqui la url de la Api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }

      console.log("Usuario registrado con éxito");
    } catch (error) {
      setError(error.message || "Error durante el registro");
      console.error("Error durante el registro:", error.message);
>>>>>>> 4f5807df13f633310c8897bc3d731f01ef0db6c5:client/src/components/Login/Login.jsx
    }
  };
  

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
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && <div className="error-message">{usernameError}</div>}
        </div>
        <div className="field1">
        <input
          className="rectangle-insert-your-nam"
          type="password"
          name="password"
          id="password"
          placeholder="Insert your password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <div className="button">
          <button className="rectangle-button" type="button" onClick={handleLogin} />
          <div className="sign-in1" onClick={handleLogin} >SIGN IN</div>
        </div>
        {error && <div className="error-message">{error}</div>}
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
