import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BackToTop from "./components/back-to-top";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import StressManagment from "./components/stress-management";
import LogoBar from "./components/logo-bar"
import PageNotFound from "./components/page-not-found"
import Technologies from "./components/tech";

// Page Imports 
import Navbar from "./components/navbar";
import Contacts from "./components/contacts";
import { Component } from "react";

import PrePageLoader from "./components/prePageLoader";

function App() {
  return (
    <>
    <PrePageLoader/>
      <Navbar />
      <LogoBar />
      <BackToTop/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stress-management" element={<StressManagment />} />
          <Route path="/stress-managment" element={<StressManagment />} />
          <Route path="/stress" element={<StressManagment />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/technologies" element={<Technologies />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
