import { Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Landing from "./components/LandingPage/Landing";
import Main from "./components/MainScreen/MainScreen";
import CreateStudyPlan from "./components/CreateStudyPlan/CreateStudyPlan1";
import CreateStudyPlan2 from "./components/CreateStudyPlan/CreateStudyPlan2";
import CreateStudyPlan3 from "./components/CreateStudyPlan/CreateStudyPlan3";
import CreateStudyPlan4 from "./components/CreateStudyPlan/CreateStudyPlan4";

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
               <Route path="/main">
                  <Main />
               </Route>
               <Route path="/create">
                  <CreateStudyPlan />
               </Route>
               <Route path="/create2">
                  <CreateStudyPlan2 />
               </Route>
               <Route path="/create3">
                  <CreateStudyPlan3 />
               </Route>
               <Route path="/create4">
                  <CreateStudyPlan4 />
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



