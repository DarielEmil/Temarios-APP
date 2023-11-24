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
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
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
        if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = 'Las contraseñas no coinciden';
        }
        if (formData.password.length < 8) {
          errors.password = 'La contraseña debe tener al menos 8 caracteres';
        }
        // Validación del email (expresiones regulares)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          errors.email = 'El email no es válido';
        }
    
        // Validación de campos requeridos (por ejemplo, nombre y apellido)
        if (!formData.firstName.trim()) {
          errors.firstName = 'Por favor, ingresa tu nombre';
        }
        if (!formData.lastName.trim()) {
          errors.lastName = 'Por favor, ingresa tu apellido';
        }

        // Otras validaciones necesarias...
    
        if (Object.keys(errors).length === 0) {
          // Envío del formulario si no hay errores
          // Aquí se implementa una función para enviar los datos
        } else {
          setFormErrors(errors);
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
                        <input type="text" id="firstName" name='firstName' value={formData.firstName} onChange={handleInputChange} placeholder="Ingresa tu nombre"/>
                        {formErrors.firstName && <p className="error" style={{ color: 'red', fontSize: '12px',textAlign: 'Start'}}>{formErrors.firstName}</p>}
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
                        />
                        {formErrors.lastName && <p className="error" style={{ color: 'red', fontSize: '12px',textAlign: 'Start' }}>{formErrors.lastName}</p>}
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.labelinput}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Ingresa tu nombre de usuario" />
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
                        placeholder="Ingresa tu correo electrónico" />
                        {formErrors.email && <p className="error" style={{ color: 'red', fontSize: '12px', textAlign: 'Start' }}>{formErrors.email}</p>}
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
                        placeholder="Ingresa tu contraseña" />
                        {formErrors.password && <p className="error" style={{ color: 'red', fontSize: '12px',textAlign: 'Start' }}>{formErrors.password}</p>}
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
                        placeholder="Confirma tu contraseña" />
                        {formErrors.confirmPassword && <p className="error" style={{ color: 'red', fontSize: '12px', textAlign: 'Start' }}>{formErrors.confirmPassword}</p>}
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