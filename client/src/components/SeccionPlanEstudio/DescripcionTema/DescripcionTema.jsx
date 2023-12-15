import React, { useEffect, useState } from "react";
import styles from "../styles.module.css";
import { Descripcion } from "./Descripcion";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { env } from "../../../config";

const DescripcionTema = () => {
   const [content, setContent] = useState({ plan_de_estudios: [] });
   const { id, semana } = useParams();
   const [contenido, setContenido] = useState([]);
   const [getParrafos, setGetParrafos] = useState(true);
   const [parrafos, setParrafos] = useState({ parrafos: [] });
   const [parrafoNumber, setParrafoNumber] = useState(0);
   const [position, setPosition] = useState(0)

   useEffect(() => {
      const contentFunc = async () => {
         try {
            const response = await fetch(env.API_URL + "get-plan-content", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
                  _id: id,
               }),
            });

            const result = await response.json();
            setContent(JSON.parse(result.content.json));
            setContenido(JSON.parse(result.content.json).plan_de_estudios[semana - 1].contenido);
         } catch (error) {
            console.error("Error fetching content:", error.message);
         }
      };

      contentFunc(); // Call the function directly
   }, [id, semana]); // Update the dependency array

   const changeText = async () => {
      if (getParrafos) {
         try {
            const response = await fetch(env.API_URL + "get-parrafos", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
                  text: contenido,
               }),
            });

            const result = await response.json();
            const newText = await JSON.parse(result.content);
            setParrafos({ parrafos: newText });
            setGetParrafos(false);
         } catch (error) {
            console.error("Error fetching content:", error.message);
         }
      }


   };

   return (
      <div className={styles.containerTema}>
         <h5>{"Semana " + semana}</h5>
         <h3>{content.plan_de_estudios.length && content.plan_de_estudios[semana - 1].tema}</h3>
         <Descripcion id="parrafo" contenido={contenido.length && contenido} />
         <button onClick={changeText} className={styles.btnNext}>
            Siguiente
         </button>
      </div>
   );
};

export default DescripcionTema;
