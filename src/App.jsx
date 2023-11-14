import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { ABout } from "./components/about/ABout";
import { NoMatch } from "./components/nomatch/NoMatch";
import Footer from "./components/footer/Footer";

const LazyAbout = React.lazy(() => import("./components/about/ABout"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about" element={<ABout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
