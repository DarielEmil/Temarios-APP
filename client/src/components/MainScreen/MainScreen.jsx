import styles from "./MainScreen.module.css";
import Book from "../../assets/images/book.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import userIcon from "../../assets/images/usericon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { env } from "../../config";

const Main = () => {
   const history = useHistory();
   const [planList, setPlanList] = useState([]);

   useEffect(() => {
      async function getPlans() {
         const plans = await fetch(env.API_URL + `get-plan/user=${localStorage.getItem("user")}`);
         const result = await plans.json();
         setPlanList(await result.content);
      }
      getPlans();
   }, []);

   function logOut() {
      localStorage.removeItem("token");
      history.push("/login");
      window.location.reload();
   }

   return (
      <div className={styles.MainContainer}>
         <nav className={styles.topMenu}>
            <div className={styles.logo}>
               <Link to="/">
                  <img src={Book} alt="Logo" className={styles.logoImg} />
               </Link>
               <span className={styles.studyPath}>StudyPath</span>
            </div>
            <div className={styles.userSection}>
               <img src={userIcon} alt="User Icon" className={styles.userIcon} />
               <span className={styles.userName}>Juan Pedro</span>
               <button onClick={logOut}>Logout</button>
            </div>
         </nav>
         <br></br>
         <h1 className={styles.welcomeText}>Bienvenido a StudyPath</h1>
         <br></br>
         <Link to="/create" style={{ textDecoration: "none" }}>
            <button className={styles.createButton}>
               <FontAwesomeIcon icon={faPlus} style={{ color: "#4f67e8", textDecoration: "none" }} /> Crea un plan de estudio
            </button>
         </Link>

         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <section className={styles.section}>
            <header className={styles.header}>
               <div className={styles.date}>
                  {/* Aquí se mostrará la hora del sistema */}
                  <p>Sun 12, 4:00pm</p>
               </div>
               <div className={styles.search}>
                  {/* Aquí estará el buscador */}
                  <input type="text" placeholder="Buscar" className={styles.searchInput} />
                  {/* Icono de la lupa */}
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#4f67e8", fontSize: "20px" }} className={styles.searchIcon} />
               </div>
            </header>
            {/* Tarjetas */}
            <div className={styles.cardContainer}>
               {/* Se generan las tarjetas aquí */}
               {/* Tarjeta 1 */}
               {planList.map((plan, i) => {
                  return (
                     <div key={i} className={styles.card}>
                        <div className={styles.cardHeader}>
                           <div className={styles.checkbox}></div>
                           <div className={styles.settingsIcon}>
                              <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                           </div>
                        </div>
                        <Link to={`/plan/${plan._id}`} state={{ prop: "hola" }} style={{ textDecoration: "none" }} className={styles.cardContent}>
                           <h2>{JSON.parse(plan.json).titulo} </h2>
                           <p>{JSON.parse(plan.json).descripcion}</p>
                        </Link>
                     </div>
                  );
               })}
            </div>
         </section>
      </div>
   );
};

export default Main;
