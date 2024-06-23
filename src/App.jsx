/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Hero from "./components/Hero/Hero";
import Value from "./components/value/value";
import Contact from "./components/contact/Contact";
import Property from "./components/Property/Property";
import Residencies from "./components/Residences/Residencies";
import Services from "./pages/Our_Service";
import StepsSection from "./pages/Simple_Steps";
import AddProperty from "./pages/Add_Properties";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
import ContactForm from "./components/ApiTest/ContactForm";
import ContactList from "./components/ApiTest/ContactList";
import Card from "./components/Card/Card";
import Agents from "./pages/Agents";

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Value" element={<Value />} />
          <Route path="/property" element={<Residencies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Add" element={<ContactForm />} />
          <Route path="/Agent" element={<Agents />} />

        </Routes>
      </Router>
      <Hero />
      <Property />
      <Value />
      <Services />
      <StepsSection />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

