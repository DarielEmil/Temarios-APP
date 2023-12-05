import styles from "./Landing.module.css";
import Book from "../../assets/images/book.png";
import readingbook from "../../assets/Landingimg/reading-bookpana-1.svg";
import corazon from "../../assets/images/corazon.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Landing = () => {
  return (
    <div className={styles.LandingContainer}>
      <nav className={styles.topMenu}>
        <div className={styles.logo}>
          <img src={Book} alt="Logo" className={styles.logoImg} />
          <span className={styles.studyPath}>StudyPath</span>
        </div>
      </nav>
      <div className={styles.leftSection}>
<<<<<<< HEAD
        <div className={styles.imageContainer}>
          <img src={readingbook} alt="Imagen" />
        </div>
        <div className={styles.center}>
          <h2>¿No tienes una cuenta?</h2>
          <Link to="/signup">
          <button className={styles.signupButton}>
            Sign Up
          </button>
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.objectiveSection}>
          <h3 style={{textAlign: 'start'}}>Objetivos</h3>
          <p style={{textAlign: 'justify'}}>
          Facilitar a los estudiantes un acceso personalizado a la excelencia académica mediante una plataforma educativa interactiva que se adapta de manera dinámica a sus necesidades individuales, fomentando la maximización del potencial de aprendizaje y el logro de objetivos educativos específicos.
          </p>
        </div>
        <div className={styles.benefitsSection} style={{textAlign: 'start'}}>
          <h3 style={{textAlign: 'start'}}>Beneficios</h3>
          <p style={{textAlign: 'justify'}}>
          Experimenta un paradigma educativo transformador mediante la personalización inteligente de tu plan de estudios, proporcionando un enfoque centrado en el estudiante que impulsa la motivación intrínseca, la eficiencia del aprendizaje y el progreso significativo hacia tus metas académicas.
=======
        <div className={`${styles.imageContainer} ${styles.moverDerecha}`}>
          <img src={readingbook} alt="Imagen" />
        </div>
        <div className={`${styles.center} ${styles.moverBotonAbajo}`}>
          <h2>¿No tienes una cuenta?</h2>
          <Link to="/signup">
            <button className={styles.signupButton1}>
              Sign Up
            </button>
          </Link>
        </div>
        <div className={styles.hechoConContainer}>
          <p className={styles.moverIzquierda}>
            Hecho con <img className="Corazon" alt="img" src={corazon} /> por algunos estudiantes del itla
          </p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.objectiveSection}>
          <h3 style={{ textAlign: 'start' }}>Objetivos</h3>
          <p className={`${styles.organizedParagraph} ${styles.adjustedLetter}`} style={{ textAlign: 'justify' }}>
            Facilitar a los estudiantes un acceso personalizado a la excelencia académica mediante una plataforma educativa interactiva que se adapta de manera dinámica a sus necesidades individuales, fomentando la maximización del potencial de aprendizaje y el logro de objetivos educativos específicos.
          </p>
        </div>
        <div className={styles.benefitsSection} style={{ textAlign: 'start' }}>
          <h3 style={{ textAlign: 'start' }}>Beneficios</h3>
          <p className={`${styles.organizedParagraph} ${styles.adjustedLetter}`} style={{ textAlign: 'justify' }}>
            Experimenta un paradigma educativo transformador mediante la personalización inteligente de tu plan de estudios, proporcionando un enfoque centrado en el estudiante que impulsa la motivación intrínseca, la eficiencia del aprendizaje y el progreso significativo hacia tus metas académicas.
>>>>>>> feature/login-frontend
          </p>
        </div>
        <div className={`${styles.textSection} ${styles.center}`}>
          <h2>¿Ya tienes una cuenta?</h2>
<<<<<<< HEAD
          <Link to="/login"  className={styles.signupButton}>
            Log In
          </Link>
        </div>
        <p style={{color: 'black', textAlign: 'center'}}>
            Hecho con <img src={corazon} alt="" /> por algunos estudiantes del itla
        </p>
      </div>
    </div>
=======
          <Link to="/login" className={styles.signupButton}>
            Log In
          </Link>
        </div>
      </div>
    </div>

>>>>>>> feature/login-frontend
  );
};

export default Landing;
