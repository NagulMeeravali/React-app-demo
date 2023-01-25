import { React, Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Login1 } from "./components/Login1";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";

import "./App.css";
import { Welcome } from "./components/Welcome";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login1 />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </>
    );
  }
}
