import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from "../assests/slide1.webp";
import slide2 from "../assests/slide2.webp"; // Assurez-vous d'importer la deuxième image correctement
import slide3 from "../assests/slide3.webp"; // Assurez-vous d'importer la deuxième image correctement



const divStyle = {
  margin: '0 40px', // Ajoutez une marge à gauche et à droite
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {
    url: slide1, // Utilisez la variable d'importation pour le chemin de la première image
    caption: 'Shop'
  },
  {
    url: slide2, // Utilisez la variable d'importation pour le chemin de la deuxième image
    caption: 'Shop'
  },{
    url: slide3, // Utilisez la variable d'importation pour le chemin de la deuxième image
    caption: 'Shop'
  }
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              {/* Vous pouvez ajouter du contenu ici si nécessaire */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
