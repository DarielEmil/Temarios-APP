import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./styles.module.css";
import { env } from "../../config";

const Semanas = ({ semana, number, id }) => {
   return (
      <div className={styles.weeksContainer}>
         <div className={styles.week}>
            <Link to={`/contenido/${id}/${number}`}>
               <p>Semana {number}</p>
               <h4>{semana.tema}</h4>
            </Link>
            <input type="checkbox" name="" id="" />
         </div>

      </div>
   );
};

export default Semanas;
