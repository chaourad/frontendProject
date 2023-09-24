import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import {  useNavigate } from "react-router-dom"; // Importez Link depuis react-router-dom

function NavBar() {
  // Utilisez useState pour gérer les compteurs
  const [heartCount, setHeartCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login")
  };
 

  return (
    <nav className="bg-[#f7f8fa] text-gray-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-yellow-400">My</span>Shop
        </div>
        <div className="flex items-center space-x-4">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineSearch />
            </span>
            <input
              className="placeholder:italic placeholder-text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          <div className="relative group">
            <AiOutlineHeart
              className="text-gray-500 text-lg hover:text-yellow-400 cursor-pointer"
              onClick={() => setHeartCount(heartCount + 1)}
            />
            {heartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {heartCount}
              </span>
            )}
          </div>
          <div className="relative group">
            <AiOutlineShopping
              className="text-gray-500 text-lg hover:text-yellow-400 cursor-pointer"
              onClick={() => setCartCount(cartCount + 1)}
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
          <button onClick={handleClick}>
          <AiOutlineUser className="text-gray-500 text-lg hover:text-yellow-400 cursor-pointer" />

            </button> {/* Utilisez Link pour créer un lien vers la page de connexion */}
          
        </div>
        <div className="sm:hidden flex items-center">
          <i className="fa fa-bars text-white text-lg cursor-pointer"></i>
        </div>
      </div>
      
    </nav>
  );
}

export default NavBar;
