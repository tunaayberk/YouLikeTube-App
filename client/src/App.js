import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/routes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}
