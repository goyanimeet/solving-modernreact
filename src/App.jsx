import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Banner from "./components/Banner";
import Brandservice from "./components/Brandservice";
import About from "./components/about";
import Getintouch from "./components/Getintouch";
import Footer from "./components/Footer";
import Workpage from "./pages/Workpage";
import Contactpage from "./pages/Contactpage";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header  />
              <Home />
              <Banner />
              <Brandservice />
              <About />
              <Getintouch />
              <Footer />
            </>
          }
        />
        <Route
          path="/work"
          element={
            <>
              <Header />
              <Workpage />
              <Getintouch />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contactpage />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
