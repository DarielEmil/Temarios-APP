import { Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Landing from "./components/LandingPage/Landing";
import LandingSigned from "./components/LandingPage/LandingSigned";
import Main from "./components/MainScreen/MainScreen";
import CreateStudyPlan from "./components/CreateStudyPlan/CreateStudyPlan";
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

   return (
      <Router>
         <div className="App">
            {localStorage.getItem("token") ? (
               <Switch>
                  <Route path="/main">
                     <Main />
                  </Route>
                  <Route path="/create">
                     <CreateStudyPlan />
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
