// import React from "react";
import React, { useState } from "react";
import Movies from "./components/Movies.jsx";
import Navbar from "./components/Navbar.jsx";
import Customers from "./components/Customers.jsx";
import Rental from "./components/Rental.jsx";
import Notfound from "./components/Notfound.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movieform from "./components/Movieform.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Registerform from "./components/Registerform.jsx";
import Addnewmovieform from "./components/Addnewmovieform";

function App() {
  // let [state, setState] = useState({
  //   navName: "movies",
  // });
  return (
    <>
      <Navbar></Navbar>
      <main role="main" className="container">
        <Switch>
          <Route
            path="/movies/new"
            render={(props) => <Addnewmovieform {...props} />}
          ></Route>
          <Route
            path="/movies/:id"
            render={(props) => <Movieform {...props} />}
          ></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={Registerform}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rental" component={Rental}></Route>
          <Route path="/not-found" component={Notfound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </>
  );

  // function handleNavigation(navName) {
  //   state.navName = navName;
  //   setState({ ...state });
  // }
}

export default App;
