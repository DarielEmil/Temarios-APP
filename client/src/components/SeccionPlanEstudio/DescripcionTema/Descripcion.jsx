import React, { useEffect } from "react";
import styles from "../styles.module.css";

export const Descripcion = ({ contenido }) => {
   console.log(contenido);


   return (
      <div id="parrafo" className={styles.text}>
         {contenido &&
            contenido.map((t, i) => {
               return (
                  <p class="text-description" key={i}>
                     {t}
                     <br />
                  </p>
               );
            })}
            
      </div>
   );
};
