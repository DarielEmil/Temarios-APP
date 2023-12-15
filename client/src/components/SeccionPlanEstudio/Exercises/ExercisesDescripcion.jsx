import React from "react";
import styles from "../styles.module.css";

export const ExercisesDescripcion = ({ exercise }) => {
   return (
      <div className={styles.exercisesContainer}>
         <p>
            {exercise}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, in.
         </p>
         <button className={styles.btnCompletar}>Completar</button>
      </div>
   );
};
