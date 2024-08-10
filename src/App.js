import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Cards from "./components/Cards";
import FireKirin from "./components/FireKirin";
import Carousel from "./components/Carousel";
import Download from "./components/Download";
import Footer from "./components/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "reactstrap/lib";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <Description />
      <Cards />
      <FireKirin />
      <Carousel />
      <Download />
      <Footer />
    </React.Fragment>
  );
};

export default App;
