import { useState } from 'react';
import styles from "./register.module.css"
import Book from "../../assets/images/book.png";
import Background from "../../assets/images/Background.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Marcar el campo como "tocado" cuando se escribe algo
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });

    // Eliminar el mensaje de error asociado a este campo
    setFormErrors({
      ...formErrors,
      [name]: '', // Resetear el error si se está escribiendo en el campo
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validaciones

    // Validación de campos requeridos (por ejemplo, nombre y apellido)
    if (!formData.firstName.trim()) {
      errors.firstName = 'Por favor, ingresa tu nombre';
      alert('Por favor, ingresa tu nombre');
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Por favor, ingresa tu apellido';
      alert('Por favor, ingresa tu apellido');
    }
    if (!formData.username.trim()) {
      errors.username = 'Por favor, ingresa tu nombre de usuario';
      alert('Por favor, ingresa tu nombre de usuario');
    }

    // Validación del email (expresiones regulares)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'El email no es válido';
      alert('El email no es válido');
    }

    // Validación de la contraseña
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
      alert('Las contraseñas no coinciden');
    }
    if (formData.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
      alert('La contraseña debe tener al menos 8 caracteres');
    }

    // Otras validaciones necesarias...

    if (Object.keys(errors).length === 0) {
      // Envío del formulario si no hay errores
      // Aquí se implementa una función para enviar los datos
    } else {
      setFormErrors(errors);

      // Marcar todos los campos como tocados para que muestren el borde rojo
      setTouchedFields({
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };
  return <div className={styles.registerContainer}>
    <div className={styles.formContainer} style={{ backgroundImage: `url(${Background})` }}>
      <h1 className={styles.signUp}>Sign Up</h1>
      <h2 className={styles.createYourAccount}>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.fullnameRow}>
          <div className={styles.labelinput}>
            <label htmlFor="firstName">Name</label>
            <input type="text"
              id="firstName"
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre"
              className={
                touchedFields.firstName && formData.firstName.trim() === ''
                  ? styles.inputFieldEmpty
                  : styles.inputField
              }
            />
          </div>
          <div className={styles.labelinput}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Ingresa tu apellido"
              className={
                touchedFields.lastName && formData.lastName.trim() === ''
                  ? styles.inputFieldEmpty
                  : styles.inputField
              }
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.labelinput}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre de usuario"
              className={
                touchedFields.username && formData.username.trim() === ''
                  ? styles.inputFieldEmpty
                  : styles.inputField
              }
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.labelinput}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ingresa tu correo electrónico"
              className={
                touchedFields.email && formData.email.trim() === ''
                  ? styles.inputFieldEmpty
                  : styles.inputField
              }
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.labelinput}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Ingresa tu contraseña"
              className={
                touchedFields.password && formData.password.trim() === ''
                  ? styles.inputFieldEmpty
                  : styles.inputField
              }
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.labelinput}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirma tu contraseña"
              className={
                touchedFields.confirmPassword && formData.confirmPassword.trim() === ''
                  ? styles.inputFieldEmpty
                  : styles.inputField
              }
            />
          </div>
        </div>
        <p><Link to="#" style={{ fontSize: '20px' }}>Forget your password?</Link></p>
        <button className={styles.btnRegister} type="submit">SIGN UP</button>
      </form>
    </div>
    <div className={styles.rightSection}>
      <div className={styles.iconText}>
        <img src={Book} style={{ marginBottom: '25px' }} alt="Imagen para el inicio de sesion" />
        <p>Are you Already have an Account?</p>
      </div>
      <button className={styles.btnLogin}>SIGN IN</button>
    </div>
  </div>
}
export default Register