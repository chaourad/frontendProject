import React, { useEffect, useState } from 'react'
import achtezParCategories from "../assests/achetezcat.webp";
import axios from 'axios';

function AchatParCategories() {
   const [sousCatrgory , setSousCatrgory] = useState([]);
   useEffect(()=>{
    axios.get("http://localhost:8081/api/v1/sous-categories/2")
    .then(response =>{
        console.log(response.data);
        setSousCatrgory(response.data);
    }).catch(err=>{
        console.error("Error fetching"+err);
    })
   },[]);
      
  return (
    <div style={{ padding: '0 40px' }}>
        <img src={achtezParCategories} className="w-full mb-2" style={{padding: '0 40px'}} alt="offre logo" />
        <div className="grid grid-cols-5 gap-4">
      {sousCatrgory.map((item) => (
        <div key={item.id} className="flex flex-row items-center p-2 border border-gray-300 rounded-lg">
          <div className="w-14 h-14 overflow-hidden">
            <img
              src={item.image}
              alt={item.nom}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="ml-2 mt-2  font-bold items-center">{item.nom}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default AchatParCategories