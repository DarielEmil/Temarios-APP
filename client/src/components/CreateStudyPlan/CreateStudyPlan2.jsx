import React, { useState } from "react";
import styles from "./CreateStudyPlan2.module.css";
import Book from "../../assets/images/book.png";
import planEstudio2 from "../../assets/images/seccionplan.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
const CreateStudyPlan2 = () => {
   const [selectedOptions, setSelectedOptions] = useState({
      FrontEnd: false,
      BackEnd: false,
      ProjectManager: false,
      Datos: false,
      BI: false,
      Otros: false,
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
                     <h1>¿Que tipo de plan de estudio deseas?</h1>
                  </div>
                  <div className={styles.optionsContainer}>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="FrontEnd"
                           checked={selectedOptions.trabajo}
                           onChange={() => handleOptionClick("FrontEnd")}
                        />
                        <label htmlFor="FrontEnd">FrontEnd</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="BackEnd"
                           checked={selectedOptions.estudio}
                           onChange={() => handleOptionClick("BackEnd")}
                        />
                        <label htmlFor="BackEnd">BackEnd</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="usoPersonal"
                           checked={selectedOptions.usoPersonal}
                           onChange={() => handleOptionClick("ProjectManager")}
                        />
                        <label htmlFor="usoPersonal">Project Manager</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="Datos"
                           checked={selectedOptions.usoPersonal}
                           onChange={() => handleOptionClick("Datos")}
                        />
                        <label htmlFor="Datos">Datos</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="BI"
                           checked={selectedOptions.usoPersonal}
                           onChange={() => handleOptionClick("BI")}
                        />
                        <label htmlFor="BI">BI</label>
                     </div>
                     <div className={styles.option}>
                        <input
                           type="checkbox"
                           id="Otros"
                           checked={selectedOptions.usoPersonal}
                           onChange={() => handleOptionClick("Otros")}
                        />
                        <label htmlFor="Otros">Otros...</label>
                     </div>
                  </div>
               </div>
               <div className={styles.Button}>
               <Link to="/create3">
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
               <div className={styles.planImg}>
                  <img src={planEstudio2} alt="Imagen" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CreateStudyPlan2;
