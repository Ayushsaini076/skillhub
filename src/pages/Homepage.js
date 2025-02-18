import React from "react";
import Navbar from '../components/Navbar'
import Herosection from "../components/Herosection";
import Exploreskills from "../components/Exploreskills";
import Processsection from "../components/Processsection";
import Teamsections from "../components/Teamsections";
import Testimonials from "../components/Testimonials";
import Pricingsections from "../components/Pricingsections";
import Faqsection from "../components/Faqsection";
import Footer from "../components/Footer";

const Homepage = () => {
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
  )
}

export default Homepage

