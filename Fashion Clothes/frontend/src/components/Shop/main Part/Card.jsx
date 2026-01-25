import React, { useEffect, useState } from "react";
import axios  from 'axios';

const Card = () => {
 
  const [productData, setproductData] = useState([])

const apiHandling =async () =>{
  const respone =await axios.get("https://fakestoreapi.com/products")
  console.log(respone);
  setproductData(respone.data)
}

useEffect(() => {
  apiHandling()
}, [])


  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {productData.map((data)=>{
        return <div key={data.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
          
          <div className="h-48 w-full p-4 flex justify-center items-center bg-white">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-md font-bold text-gray-900 line-clamp-1" >
                {data.title}
            </h3>

            <div className="flex justify-between items-center mt-2">
              <h5 className="text-gray-500 text-sm font-medium">
                {data.price}
              </h5>
              <h4 className="text-lg font-bold text-gray-900"></h4>
            </div>

            <div className="mt-4 flex gap-3 mt-auto">
              <button className="flex-1 py-2 text-sm font-bold rounded border border-black hover:bg-gray-50 transition-colors cursor-pointer">
                Add to Cart
              </button>
              <button className="flex-1 py-2 text-sm font-bold bg-black text-white rounded border border-black hover:bg-gray-800 transition-colors cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      })}
      </div>
      
  );
};

export default Card;