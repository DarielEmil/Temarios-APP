import { Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Landing from "./components/LandingPage/Landing";
import SeccionPlanEstudio from "./components/SeccionPlanEstudio/SeccionPlanEstudio";
import DescripcionTema from "./components/SeccionPlanEstudio/DescripcionTema/DescripcionTema";
import Exercises from "./components/SeccionPlanEstudio/Exercises/Exercises";
import LandingSigned from "./components/LandingPage/LandingSigned";
import Main from "./components/MainScreen/MainScreen";
import CreateStudyPlan from "./components/CreateStudyPlan/CreateStudyPlan1";
import CreateStudyPlan2 from "./components/CreateStudyPlan/CreateStudyPlan2";
import CreateStudyPlan3 from "./components/CreateStudyPlan/CreateStudyPlan3";
import CreateStudyPlan4 from "./components/CreateStudyPlan/CreateStudyPlan4";
import { useEffect } from "react";
import { env } from "./config";

function App() {
   useEffect(() => {
      const token = localStorage.getItem("token");

      async function verifyToken() {
         const apiKey = env.API_URL + "login";

         try {
            if (token) {
               await fetch(apiKey, token, {
                  method: "POST",
                  headers: { Authorization: `Bearer ${token}` },
                  body: JSON.stringify({
                     token,
                  }),
               });
            }
         } catch (error) {}
      }
      verifyToken();
      console.log("oke");
   }, []);

   const preguntas = {};

   return (
      <Router>
         <div className="App">
            {localStorage.getItem("token") ? (
               <Switch>
                  <Route path="/main">
                     <Main />
                  </Route>

                  <Route path="/create">
                     <CreateStudyPlan preguntas={preguntas} />
                  </Route>
                  <Route path="/create2">
                     <CreateStudyPlan2 preguntas={preguntas} />
                  </Route>
                  <Route path="/create3">
                     <CreateStudyPlan3 preguntas={preguntas} />
                  </Route>
                  <Route path="/create4">
                     <CreateStudyPlan4 />
                  </Route>
                  <Route path="/plan/:id">
                     <SeccionPlanEstudio />
                  </Route>
                  <Route path="/contenido/:id/:semana">
                     <DescripcionTema />
                  </Route>
                  <Route path="/">
                     <LandingSigned />
                  </Route>
               </Switch>
            ) : (
               <Switch>
                  <Route path="/signup">
                     <Register />
                  </Route>
                  <Route path="/login">
                     <Login />
                  </Route>
                  <Route path="/">
                     <Landing />
                  </Route>
               </Switch>
            )}
         </div>
      </Router>
   );
}

export default App;
