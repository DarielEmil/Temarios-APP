import React, { useState } from "react";
import styles from "./CreateStudyPlan.module.css";
import Book from "../../assets/images/book.png";
import readingbook from "../../assets/Landingimg/reading-bookpana-1.svg";
import corazon from "../../assets/images/corazon.png";
import planEstudio from "../../assets/images/planEstudio.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CreateStudyPlan1 = () => {

   const [selectedOptions, setSelectedOptions] = useState({
      trabajo: false,
      estudio: false,
      usoPersonal: false,
   });

   const handleOptionClick = (option) => {
      const updatedOptions = {
        ...selectedOptions,
        [option]: !selectedOptions[option],
      };
      setSelectedOptions(updatedOptions);
      // Llama a la función de verificación de selección pasando las opciones actualizadas
      checkIfAnyOptionSelected(updatedOptions);
    };

   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Función para verificar si alguna opción está seleccionada
const checkIfAnyOptionSelected = (options) => {
   const isAnyOptionSelected = Object.values(options).some((value) => value === true);
   // Actualiza el estado del botón
   setIsButtonDisabled(!isAnyOptionSelected);
 };

   return (
      <div className={styles.PlanContainer}>
         <nav className={styles.topMenu}>
            <div className={styles.logo}>
               <Link to="/">
                  <img src={Book} alt="Logo" className={styles.logoImg} />
               </Link>
               <span className={styles.studyPath}>StudyPath</span>
            </div>
         </nav>
         <div className={styles.leftRightContainer}>
            <div className={styles.leftSection}>
               <div className={styles.Content}>
                  <div className={styles.welcomeText}>
                     <h1>¡Hola! ¿Que te trae por aquí hoy? </h1>
                  </div>
                  <div className={styles.optionsContainer}>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="trabajo"
                           checked={selectedOptions.trabajo}
                           onChange={() => handleOptionClick("trabajo")}
                        />
                        <label htmlFor="trabajo">Trabajo</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="estudio"
                           checked={selectedOptions.estudio}
                           onChange={() => handleOptionClick("estudio")}
                        />
                        <label htmlFor="estudio">Estudios</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="usoPersonal"
                           checked={selectedOptions.usoPersonal}
                           onChange={() => handleOptionClick("usoPersonal")}
                        />
                        <label htmlFor="usoPersonal">Uso Personal</label>
                     </div>
                  </div>
               </div>
               <div className={styles.Button}>
               <Link to="/create2">
                  <button 
                  className={styles.continuarButton} 
                  disabled={isButtonDisabled}
                  style={{
                     opacity: isButtonDisabled ? '0.3' : '1',
                     cursor: isButtonDisabled ? 'default' : 'pointer',
                   }}
                  onClick={() => handleOptionClick()}>
                     Continuar &gt;
                  </button>
               </Link>
               </div>
            </div>
            <div className={styles.rightSection}>
               {/*
               <div className={styles.objectiveSection}>
                  <h3 style={{ textAlign: "start", fontSize: "30px" }}>Objetivos</h3>
                  <p className={`${styles.organizedParagraph} ${styles.adjustedLetter}`} style={{ textAlign: "justify" }}>
                     Facilitar a los estudiantes un acceso personalizado a la excelencia académica mediante una plataforma educativa interactiva que se adapta de manera dinámica a sus necesidades individuales, fomentando la maximización del potencial de aprendizaje y el logro de objetivos educativos específicos.
                  </p>
               </div>
               <div className={styles.benefitsSection} style={{ textAlign: "start" }}>
                  <h3 style={{ textAlign: "start", fontSize: "30px" }}>Beneficios</h3>
                  <p className={`${styles.organizedParagraph} ${styles.adjustedLetter}`} style={{ textAlign: "justify" }}>
                     Experimenta un paradigma educativo transformador mediante la personalización inteligente de tu plan de estudios, proporcionando un enfoque centrado en el estudiante que impulsa la motivación intrínseca, la eficiencia del aprendizaje y el progreso significativo hacia tus metas académicas.
                  </p>
               </div>
               <div className={`${styles.textSection} ${styles.center}`}>
                  <h2>¿Ya tienes una cuenta?</h2>
                  <Link to="/login" className={styles.signupButton}>
                     Log In
                  </Link>
               </div>
               */}
               <div className={styles.planImg}>
                  <img src={planEstudio} alt="Imagen" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CreateStudyPlan1;
