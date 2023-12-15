import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./styles.module.css";

const Semanas = ({ number, title }) => {
   return (
      <div className={styles.weeksContainer}>
         <div className={styles.week}>
            <Link to="/descripcion-1">
               <p>Semana {number}</p>
               <h4>{title}</h4>
            </Link>
            <input type="checkbox" name="" id="" />
         </div>
         <div className={styles.exercises}>
            <Link to="/exercise-1">Completar Ejercicios</Link>
            <input type="checkbox" name="" id="" />
         </div>
      </div>
   );
};

export default Semanas;
