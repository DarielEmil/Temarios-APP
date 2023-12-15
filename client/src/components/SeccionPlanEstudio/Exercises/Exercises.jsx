import React from "react";
import styles from "../styles.module.css";
import { ExercisesDescripcion } from "./ExercisesDescripcion";
const Exercises = () => {
   return (
      <div className={styles.containerTema}>
         <h5>Semana 1</h5>
         <h3>Ejercicios</h3>
         <ExercisesDescripcion />
         <ExercisesDescripcion />
         <ExercisesDescripcion />
         <ExercisesDescripcion />
      </div>
   );
};

export default Exercises;
