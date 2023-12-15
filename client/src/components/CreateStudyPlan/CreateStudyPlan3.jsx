import React, { useState } from "react";
import styles from "./CreateStudyPlan3.module.css";
import Book from "../../assets/images/book.png";
import planEstudio2 from "../../assets/images/seccionplan.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { env } from "../../config";
import { useHistory } from "react-router-dom";

const CreateStudyPlan3 = () => {
   const [searchText, setSearchText] = useState("");
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
   const history = useHistory();

   const sendRequestPlan = async () => {
      const questions = [`De que lenguaje de programacion quieres crear el plan de estudios, respuesta: ${localStorage.getItem("pregunta1")}`, `A que nivel quieres tratar el tema, respuesta: ${localStorage.getItem("pregunta2")}`, `Que temas quieres tratar en el plan de estudios (Puedes describirlo), respuesta: ${localStorage.getItem("pregunta3")}`];

      try {
         const response = await fetch(env.API_URL + "create-plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               questions,
               language: localStorage.getItem("pregunta1"),
               user: localStorage.getItem("user"),
            }),
         });

         console.log(await response.json());
         history.push("/main")
         window.location.reload();
      } catch (error) {}
   };
   const handleSearchInputChange = (event) => {
      setSearchText(event.target.value);
      setIsButtonDisabled(event.target.value === "");
      localStorage.setItem("pregunta3", event.target.value);
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
                     <h1>
                        ¿Que temas quieres tratar en el plan <br></br> de estudios?
                     </h1>
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
               <div className={styles.Button}>
                  <button
                     className={styles.continuarButton}
                     disabled={isButtonDisabled}
                     style={{
                        opacity: isButtonDisabled ? "0.3" : "1",
                        cursor: isButtonDisabled ? "default" : "pointer",
                     }}
                     onClick={() => sendRequestPlan()}>
                     Continuar &gt;
                  </button>
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
