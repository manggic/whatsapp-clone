import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import "./Home.css";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home">
      <Slider />
      <Container />
      <Footer />
    </div>
  );
}

export default Home;
