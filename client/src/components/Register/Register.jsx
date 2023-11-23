import styles from "./register.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Book from "../../assets/images/book.png";
import Background from "../../assets/images/Background.png";

const Register = () => {
    return <div className={styles.registerContainer}>
        <div className={styles.formContainer} style={{ backgroundImage: `url(${Background})` }}>            
            <h1 className={styles.signUp}>Sign Up</h1>
            <h2 className={styles.createYourAccount}>Create Your Account</h2>
            <form>
                <div className={styles.fullnameRow}>
                    <div className={styles.labelinput}>
                        <label htmlFor="firstName">Name</label>
                        <input type="text" id="firstName" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className={styles.labelinput}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Ingresa tu apellido" />
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
                        <input type="email" id="email" placeholder="Ingresa tu correo electrónico" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.labelinput}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Ingresa tu contraseña" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.labelinput}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirma tu contraseña" />
                    </div>
                </div>
                <p><a href="#" style={{ fontSize: '20px' }}>Forget your password?</a></p>
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