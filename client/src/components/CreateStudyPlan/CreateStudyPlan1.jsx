import React, { useState } from "react";
import styles from "./CreateStudyPlan.module.css";
import Book from "../../assets/images/book.png";
import readingbook from "../../assets/Landingimg/reading-bookpana-1.svg";
import corazon from "../../assets/images/corazon.png";
import planEstudio from "../../assets/images/planEstudio.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CreateStudyPlan1 = ({ preguntas }) => {
   let selected = "";
   const [selectedOptions, setSelectedOptions] = useState({
      python: false,
      javascript: false,
      java: false,
      cplusplus: false,
      csharp: false,
   });

   const nextPage = () => {
   };

   const handleOptionClick = (option) => {
      const updatedOptions = {
         [option]: true,
      };
      selected = option;
      localStorage.setItem("pregunta1", selected);
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
                     <h1>¡Hola! ¿De qué lenguaje de programación quieres crear el plan de estudios? </h1>
                  </div>
                  <div className={styles.optionsContainer}>
                     <div className={styles.option}>
                        <input type="checkbox" id="python" checked={selectedOptions.python} onChange={() => handleOptionClick("python")} />
                        <label htmlFor="python">Python</label>
                     </div>
                     <div className={styles.option}>
                        <input type="checkbox" id="javaScript" checked={selectedOptions.javascript} onChange={() => handleOptionClick("javascript")} />
                        <label htmlFor="javaScript">JavaScript</label>
                     </div>
                     <div className={styles.option}>
                        <input type="checkbox" id="java" checked={selectedOptions.java} onChange={() => handleOptionClick("java")} />
                        <label htmlFor="java">Java</label>
                     </div>
                     <div className={styles.option}>
                        <input type="checkbox" id="cplusplus" checked={selectedOptions.cplusplus} onChange={() => handleOptionClick("cplusplus")} />
                        <label htmlFor="cplusplus">C++</label>
                     </div>
                     <div className={styles.option}>
                        <input type="checkbox" id="csharp" checked={selectedOptions.csharp} onChange={() => handleOptionClick("csharp")} />
                        <label htmlFor="csharp">C++</label>
                     </div>
                  </div>
               </div>
               <div className={styles.Button}>
                  <Link to="/create2">
                     <button
                        className={styles.continuarButton}
                        disabled={isButtonDisabled}
                        style={{
                           opacity: isButtonDisabled ? "0.3" : "1",
                           cursor: isButtonDisabled ? "default" : "pointer",
                        }}
                        onClick={() => nextPage()}>
                        Continuar &gt;
                     </button>
                  </Link>
               </div>
            </div>
            <div className={styles.rightSection}>
               <div className={styles.planImg}>
                  <img src={planEstudio} alt="Imagen" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CreateStudyPlan1;
