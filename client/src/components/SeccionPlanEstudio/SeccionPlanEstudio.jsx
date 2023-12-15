import React from "react";
import Semanas from "./Semanas";
import styles from "./styles.module.css"


const SeccionPlanEstudio = () => {
   return (
      <div className={styles.container}>
         <h3>TITULO DEL PLAN DE ESTUDIO</h3>
         <Semanas number={1} title="Javascript Básico" />
         <Semanas number={2} title="Declaración de Variables" />
         <Semanas number={3} title="Funciones en JS" />
         <Semanas number={4} title="Arrays" />
      </div>
   );
};

export default SeccionPlanEstudio;
