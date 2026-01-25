import React from "react";
import Men from "../../../assets/userSym.png";
import Woman from "../../../assets/womanSym.png";
import Card from "./Card";

const collections = [
  {
    id: 1,
    title: "Men's Collection",
    image: Men,
    items: ["T-Shirts", "Shirts", "Pants", "Jeans", "Hoodies"],
  },
  {
    id: 2,
    title: "Women's Collection",
    image: Woman,
    items: ["Tops", "Dresses", "Kurtis", "Jeans", "Skirts"],
  },
];

const MianPart = () => {
  return (
    <div className="h-screen px-5 py-5 mx-5 my-5 bg-gray-100 rounded-3xl flex flex-col gap-6">
      
      {/* ================= TOP BAR (Search) - Ye Upar hi rahega ================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="px-2 text-3xl font-bold text-gray-800">
          Give All You Need
        </h3>

        <div className="flex w-full sm:w-auto items-center bg-white rounded-full px-4 py-2 border border-gray-300 shadow-sm focus-within:border-black transition">
          <i className="ri-search-line text-gray-500 mr-2"></i>
          <input
            type="text"
            placeholder="Search on Stuffus"
            className="bg-transparent outline-none w-full sm:w-64 text-sm"
          />
          <button className="bg-black text-white px-6 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Search
          </button>
        </div>
      </div>

      {/* ================= MAIN CONTENT WRAPPER (SIDE BY SIDE) ================= */}
      {/* Yahan humne 'flex' lagaya taaki Sidebar aur Card agal-bagal aayein */}
      <div className="flex flex-col md:flex-row gap-6 h-full overflow-hidden">
        
        {/* --- LEFT SIDE: SIDEBAR --- */}
        <div className="h-full w-full md:w-64 bg-white rounded-2xl p-4 shadow-sm overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Category</h3>

          <div className="flex flex-col gap-3">
            {/* Active Item (Parent) */}
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
              <div className="flex items-center gap-3">
                <i className="ri-shopping-bag-4-line text-xl text-gray-700"></i>
                <h4 className="font-semibold text-gray-800">All Product</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded">
                  32
                </span>
                <i className="ri-arrow-down-s-line text-gray-500"></i>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {collections.map((elem) => (
                <div key={elem.id} className="flex flex-col gap-2">
                  {/* Main Category */}
                  <div className="flex items-center gap-3">
                    <img
                      src={elem.image}
                      alt={elem.title}
                      className="h-4 w-4 object-cover"
                    />
                    <h4 className="whitespace-nowrap font-medium">
                      {elem.title}
                    </h4>
                    <i className="ri-arrow-right-s-line"></i>
                  </div>

                  {/* Sub Categories */}
                  <div className="ml-7 flex flex-col gap-1 text-sm text-gray-600">
                    {elem.items.map((item, idx) => (
                      <span key={idx}>• {item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CARDS AREA --- */}
        {/* 'flex-1' ka matlab hai bachi hui saari jagah le lo */}
        <div className="flex-1 h-full overflow-y-auto">
            <Card />
        </div>

      </div>
    </div>
  );
};

export default MianPart;