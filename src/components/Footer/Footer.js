import React from "react";

function Footer() {
  const footerStyle = {
    bottom: "0",
    width: "100%",
    backgroundColor: "#333", // Couleur de fond du pied de page
    color: "white", // Couleur du texte du pied de page
    padding: "10px", // Espace intérieur du pied de page
    textAlign: "center", // Alignement du texte au centre
  };

  return (
    <footer style={footerStyle}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
