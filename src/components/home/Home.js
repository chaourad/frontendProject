import React from "react";
import NavBar from "../navbar/Navbar";
import Slideshow from "./ImageSlideShow";
import quickship from "../assests/quickship.gif";
import offre from "../assests/offre.webp";
import CategoriesShow from "./CategoriesShow";
import AchatParCategories from "./AchatParCategories";
import dailydrop from "../assests/dailydrop.webp";
import achetezma from "../assests/achtezmain.webp";
import marques from "../assests/desmarques.webp";

import Footer from "../Footer/Footer";
import Marque from "./Marque";
function Home() {
  return (
    <>
      <img src={quickship} className="quickship react" alt="quickship logo" />
      <NavBar />
    
      <CategoriesShow/>
      <img src={offre} className="w-full mb-2" style={{padding: '0 40px'}} alt="offre logo" />
      <Slideshow />
      <AchatParCategories/>
      <img src={marques} className="w-full mb-2" style={{padding: '0 40px'}} alt="offre logo" />
      <Marque/>
      
      <br />
      <img src={dailydrop} className="w-full mb-2" style={{padding: '0 40px'}} alt="offre logo" />
      <img src={achetezma} className="w-full mb-2" style={{padding: '0 40px'}} alt="offre logo" />
      <Footer/>
    </>
  );
}

export default Home;
