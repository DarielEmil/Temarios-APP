import React, { useState } from "react";
import styles from "./CreateStudyPlan3.module.css";
import Book from "../../assets/images/book.png";
import planEstudio2 from "../../assets/images/seccionplan.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CreateStudyPlan3 = () => {

   const [searchText, setSearchText] = useState('');
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   const handleSearchInputChange = (event) => {
      setSearchText(event.target.value);
      setIsButtonDisabled(event.target.value === '');
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
                     <h1>¿Que temas quieres tratar en el plan <br></br> de estudios?</h1>
                  </div>
                  <div className={styles.optionsContainer}>
                     <div className={styles.option}>
                        <div className={styles.search}>
                           {/* Aquí estará el buscador */}
                           <input type="text" placeholder="Escribe el tema" className={styles.searchInput} value={searchText} onChange={handleSearchInputChange} />
                           {/* Icono de la lupa */}
                           <button className={styles.searchButton}> + </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.optionsContainer}>
                     <div className={styles.DeclarationButton}>
                        <p>Declaración de variables</p>
                     </div>
                  </div>
               <div className={styles.Button}>
                  <Link to="/create4">
                     <button
                        className={styles.continuarButton}
                        disabled={isButtonDisabled}
                        style={{
                           opacity: isButtonDisabled ? '0.3' : '1',
                           cursor: isButtonDisabled ? 'default' : 'pointer',
                        }}>
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

export default CreateStudyPlan3;
