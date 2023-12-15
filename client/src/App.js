import { Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Landing from "./components/LandingPage/Landing";
import SeccionPlanEstudio from "./components/SeccionPlanEstudio/SeccionPlanEstudio";
import DescripcionTema from "./components/SeccionPlanEstudio/DescripcionTema/DescripcionTema";
import Exercises from "./components/SeccionPlanEstudio/Exercises/Exercises";

function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route path="/signup">
                  <Register />
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="/plan-1">
                  <SeccionPlanEstudio />
               </Route>
               <Route path="/descripcion-1">
                  <DescripcionTema />
               </Route>
               <Route path="/exercise-1">
                  <Exercises />
               </Route>
               <Route path="/">
                  <Landing />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
