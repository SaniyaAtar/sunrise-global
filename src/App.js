import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MoreToKnow from "./components/moreToKnow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
   
      <Products />
      <About />
      <MoreToKnow />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
