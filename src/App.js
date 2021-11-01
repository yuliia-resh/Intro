import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
//import react from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Facts from "./components/Facts/Facts";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route exact path="/">
          <div className="home">
            <p>Hi everywhere! Do you wanna know something about me?</p>
            <p>Click to the button on the left!</p>
          </div>
        </Route>

        <Route path="/facts">
          <Facts />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
