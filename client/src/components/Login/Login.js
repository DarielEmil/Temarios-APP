import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!username || !password) {
      setError("Please fill in all fields");
      return false;
    }
    setError(null);
    return true;
  };

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
          // Otros datos necesarios para el registro
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }

      // El usuario se registró exitosamente
      console.log("Usuario registrado con éxito");
      // Puedes redirigir al usuario a la página de inicio de sesión u otra página.
    } catch (error) {
      setError(error.message || "Error durante el registro");
      console.error("Error durante el registro:", error.message);
      // Puedes mostrar un mensaje de error al usuario o realizar otras acciones según tus necesidades.
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field1">
          <input
            className="rectangle-insert-your-nam"
            type="password"
            placeholder="Insert your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <button className="rectangle-button" onClick={onSubmit} />
          <div className="sign-in1">SIGN IN</div>
        </div>
      </div>
      <div className="signup">
        <img className="sign-up-side" alt="" src="/sign-up-side.svg" />
        <div className="book-1-parent">
          <img className="book-1-icon" alt="" src="/book-1@2x.png" />
          <div className="are-you-register">
            Are you register? No, just sign up to create your own Study Plan.
          </div>
          <div className="button1">
            <button className="rectangle-button1" onClick={handleSignUp} />
            <button className="create-your-account">CREATE YOUR ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
