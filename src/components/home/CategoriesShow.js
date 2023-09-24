import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  AiOutlineRight } from "react-icons/ai";

function CategoriesShow() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Perform a request to fetch categories from the API
    axios.get("http://localhost:8081/api/v1/categories/all")
      .then(response => {
        // Update the state with the fetched categories
        setCategories(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div style={{ padding: '0 40px' }} className='bg-white flex flex-row bg-white-500 text-gray-500 py-3 items-center'>
      <div className="flex items-center">
        <p className='text-[#666] text-sm font-serif'>Catégories</p>
        <AiOutlineRight />
      </div>
      <div className="overflow-x-auto">
        <ul className="flex flex-row space-x-2">
          {categories.map((category, index) => (
            <li key={category.id} className={`text-gray text-xs pl-2 font-serif ${index !== categories.length - 1 ? 'mr-2' : ''}`}> {category.nom}</li>
          ))}
        </ul>
      </div>
   
    </div>
  );
}

export default CategoriesShow;
