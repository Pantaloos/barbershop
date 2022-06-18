import React from "react";
import "./App.css";
import Home from "./Routes/Home/Home";
import Registration from "../src/Routes/Registration/Registration";
import Barbers from "./Routes/Barbers/Barbers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarberInfo from "./Routes/BarberInfo/BarberInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Registration/"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/Barbers/" element={<Barbers />}></Route>
        <Route path="/Barbers/:id" element={<BarberInfo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
