import React from "react";
import Navbar from './Navbar'
import Herosection from "./Herosection";
import Exploreskills from "./Exploreskills";
import Processsection from "./Processsection";
import Teamsections from "./Teamsections";
import Testimonials from "./Testimonials";
import Pricingsections from "./Pricingsections";
import Faqsection from "./Faqsection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div id="root">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <Herosection/>

      {/* More sections like featured skills, tutors, pricing, etc., would follow similarly */}
      <Exploreskills/>

    {/* how it works flow */}
    <Processsection/>
    
    <Teamsections/>

    <Testimonials/>

    <Pricingsections/>

    <Faqsection/>

    <Footer/>

    </div>
  );
};

export default HomePage;
