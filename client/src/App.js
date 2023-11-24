import { Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route path="/signup">
                  <Register />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
