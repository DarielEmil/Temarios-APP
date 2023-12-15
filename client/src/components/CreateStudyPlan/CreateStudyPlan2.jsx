import React, { useState } from "react";
import styles from "./CreateStudyPlan2.module.css";
import Book from "../../assets/images/book.png";
import planEstudio2 from "../../assets/images/seccionplan.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
const CreateStudyPlan2 = ({ preguntas }) => {
   let selected = "";
   const [selectedOptions, setSelectedOptions] = useState({
      basico: false,
      intermedio: false,
      avanzado: false,
   });

   const nextPage = () => {
   };

   const handleOptionClick = (option) => {
      const updatedOptions = {
         [option]: true,
      };
      selected = option;
      localStorage.setItem("pregunta2", selected);
      setSelectedOptions(updatedOptions);
      console.log(updatedOptions);

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
                     <h1>¿A qué nivel quieres tratar el tema?</h1>
                  </div>
                  <div className={styles.optionsContainer}>
                     <div className={styles.option}>
                        <input type="checkbox" id="basico" checked={selectedOptions.trabajo} onChange={() => handleOptionClick("basico")} />
                        <label htmlFor="basico">Básico</label>
                     </div>
                     <div className={styles.option}>
                        <input type="checkbox" id="intermedio" checked={selectedOptions.estudio} onChange={() => handleOptionClick("intermedio")} />
                        <label htmlFor="intermedio">Intermedio</label>
                     </div>
                     <div className={styles.option}>
                        <input type="checkbox" id="avanzado" checked={selectedOptions.avanzado} onChange={() => handleOptionClick("avanzado")} />
                        <label htmlFor="avanzado">Avanzado</label>
                     </div>
                  </div>
               </div>
               <div className={styles.Button}>
                  <Link to="/create3">
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
                  <img src={planEstudio2} alt="Imagen" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CreateStudyPlan2;
