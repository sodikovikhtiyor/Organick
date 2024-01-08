import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { ABout } from "./components/about/ABout";
import { NoMatch } from "./components/nomatch/NoMatch";
import Footer from "./components/footer/Footer";
import Shop from "./components/Shop/Shop";
import Single from "./components/Single/Single";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioSIngle from "./components/portfoliosingle/PortfolioSIngle";

const LazyAbout = React.lazy(() => import("./components/about/ABout"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<ABout />} />
        <Route path="shop" element={<Shop />} />
        <Route path="single" element={<Single />} />
        <Route path="project" element={<Portfolio />} />
        <Route path="singlepr" element={<PortfolioSIngle />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
