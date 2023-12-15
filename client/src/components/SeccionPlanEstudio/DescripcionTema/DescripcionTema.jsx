import React from "react";
import styles from "../styles.module.css";
import { Descripcion } from "./Descripcion";

const DescripcionTema = () => {
   return (
      <div className={styles.containerTema}>
         <h5>Semana 1</h5>
         <h3>TEma</h3>
         <Descripcion />
         <button onClick={null} className={styles.btnNext}>Siguiente</button>
      </div>
   );
};

export default DescripcionTema;
