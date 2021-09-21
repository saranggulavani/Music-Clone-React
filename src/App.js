import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Premium from "./components/Pages/Premium/Premium";
import Support from "./components/Pages/Support/Support";
import Download from "./components/Pages/Download/Download";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Footer/Footer";
function App() {
   return (
      <div className="App">
         <Navbar />
         <Switch>
            <Route path="/" exact component={Premium} />
            <Route path="/support" exact component={Support} />
            <Route path="/download" exact component={Download} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Redirect to="/" />
         </Switch>
         <Footer />
      </div>
   );
}

export default App;
