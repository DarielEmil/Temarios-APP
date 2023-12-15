import styles from "./MainScreen.module.css";
import Book from "../../assets/images/book.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import userIcon from "../../assets/images/usericon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Main = () => {
   const history = useHistory();

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
         <Link to="/create">
         <button className={styles.createButton}><FontAwesomeIcon icon={faPlus} style={{color: "#4f67e8",}} /> Crea un plan de estudio</button>
         <Link to="/">
            <button className={styles.createButton}>
               <FontAwesomeIcon icon={faPlus} style={{ color: "#4f67e8" }} /> Crea un plan de estudio
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
               <div className={styles.card}>
                  <div className={styles.cardHeader}>
                     <div className={styles.checkbox}></div>
                     <div className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <h2>Titulo del plan</h2>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aspernatur suscipit ex labore exercitationem quidem commodi! Nesciunt, nemo, corporis mollitia laborum quaerat qui iure omnis deleniti, repellat maxime soluta hic!</p>
                  </div>
               </div>
               {/* Tarjeta 2 */}
               <div className={styles.card}>
                  <div className={styles.cardHeader}>
                     <div className={styles.checkbox}></div>
                     <div className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <h2>Titulo del plan</h2>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aspernatur suscipit ex labore exercitationem quidem commodi! Nesciunt, nemo, corporis mollitia laborum quaerat qui iure omnis deleniti, repellat maxime soluta hic!</p>
                  </div>
               </div>
               {/* Tarjeta 3 */}
               <div className={styles.card}>
                  <div className={styles.cardHeader}>
                     <div className={styles.checkbox}></div>
                     <div className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <h2>Titulo del plan</h2>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aspernatur suscipit ex labore exercitationem quidem commodi! Nesciunt, nemo, corporis mollitia laborum quaerat qui iure omnis deleniti, repellat maxime soluta hic!</p>
                  </div>
               </div>
               {/* Tarjeta 4 */}
               <div className={styles.card}>
                  <div className={styles.cardHeader}>
                     <div className={styles.checkbox}></div>
                     <div className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <h2>Titulo del plan</h2>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aspernatur suscipit ex labore exercitationem quidem commodi! Nesciunt, nemo, corporis mollitia laborum quaerat qui iure omnis deleniti, repellat maxime soluta hic!</p>
                  </div>
               </div>
               {/* Tarjeta 5 */}
               <div className={styles.card}>
                  <div className={styles.cardHeader}>
                     <div className={styles.checkbox}></div>
                     <div className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <h2>Titulo del plan</h2>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aspernatur suscipit ex labore exercitationem quidem commodi! Nesciunt, nemo, corporis mollitia laborum quaerat qui iure omnis deleniti, repellat maxime soluta hic!</p>
                  </div>
               </div>
               {/* Tarjeta 6 */}
               <div className={styles.card}>
                  <div className={styles.cardHeader}>
                     <div className={styles.checkbox}></div>
                     <div className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "25px" }} />
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <h2>Titulo del plan</h2>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aspernatur suscipit ex labore exercitationem quidem commodi! Nesciunt, nemo, corporis mollitia laborum quaerat qui iure omnis deleniti, repellat maxime soluta hic!</p>
                  </div>
               </div>
               {/* ... Se agregan las demás tarjetas aquí */}
            </div>
         </section>
      </div>
   );
};

export default Main;
