import styles from "./CreateStudyPlan4.module.css";
import Book from "../../assets/images/book.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CreateStudyPlan4 = () => {
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
                     <h1>¡FELICIDADES!</h1>
                  </div>
                  <div className={styles.congratulationsText}>
                     <p>
                        ¡Has creado tu primer plan de estudio con el tema de:
                     </p>
                     <p className={styles.topicText}>
                        <span>JAVASCRIPT BÁSICO</span>
                     </p>
                  </div>
                  <div className={styles.Button}>
                  <Link to="/main">
                     <button className={styles.buttonColor}>OK!</button>
                  </Link>
               </div>
               </div>
               
            </div>
         </div>
      </div>
   );
};

export default CreateStudyPlan4;
