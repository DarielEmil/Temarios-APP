import React, { useEffect, useState } from "react";
import Semanas from "./Semanas";
import styles from "./styles.module.css";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";
import { env } from "../../config";

const SeccionPlanEstudio = (props) => {
   const { id } = useParams();
   const [content, setContent] = useState({ plan_de_estudios: [] });

   useEffect(() => {
      const content = async () => {
         const response = await fetch(env.API_URL + "get-plan-content", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               _id: id,
            }),
         });

         const result = await response.json();
         setContent(JSON.parse(result.content.json));
      };
      content();
   }, [id]);
   console.log(content.plan_de_estudios);

   return (
      <div className={styles.container}>
         <h3>{content.titulo}</h3>
         {content.plan_de_estudios.map((semana, i) => {
            return <Semanas key={i} semana={semana} number={i+1} id={id}/>;
         })}
      </div>
   );
};

export default SeccionPlanEstudio;
