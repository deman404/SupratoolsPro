import React from "react";
import HomePageBackground from "../gradients/home-page-gradient";
import Header from "../header/Header";
import Hero from "../Heros/Hero"
import Footer from "../footer/footer";
import Comments from "../comments/comments";
function HomePage() {
  return (
    <div>
      <HomePageBackground />
      <Header/>
      <Hero/>
      
      <Footer/>
    </div>
  );
}

export default HomePage;
