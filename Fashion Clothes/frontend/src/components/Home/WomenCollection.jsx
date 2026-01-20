import React from "react";
import Girl2 from "../../assets/girl2.png";
import Girl3 from "../../assets/girl3.png";
import Girl4 from "../../assets/girl4.png";

const WomenCollection = () => {
  return (
    // Main Container: Fixed height (screen size) aur Flex Row
    <div className="w-full h-screen flex px-10 py-10 gap-10">
      
      {/* --- Left Side (Big Image) --- */}
      <div className="w-1/2 bg-gray-200 h-full relative">
        <img
          src={Girl2}
          alt="Women Collection"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* --- Right Side (Content) --- */}
      <div className="w-1/2 flex flex-col justify-around h-full">
        
        {/* Top Part: Text Header */}
        <div className="flex flex-col gap-4 mt-5">
          <span className="text-lg font-medium text-red-500">Trend 2018</span>

          <h2 className="text-6xl font-semibold text-black leading-tight">
            Women Collection.
          </h2>

          <p className="text-lg text-gray-500">
            Stay ahead of the fashion trends with our new selection.
          </p>

          <button className="flex items-center gap-2 text-sm font-medium text-black hover:underline w-fit mt-2">
            Shop Now <span>→</span>
          </button>
        </div>

        {/* Bottom Part: 2 Products Side-by-Side */}
        <div className="flex w-full gap-5 h-1/2 items-end">
          
          {/* Product 1 */}
          <div className="w-1/2 h-full flex flex-col">
            <div className="relative w-full h-[80%] bg-gray-100 mb-2">
              <img
                src={Girl3}
                alt="Stik Blouse"
                className="w-full h-full object-cover object-top"
              />
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 h-10 w-10 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium">
                -15%
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg">Stik Blouse</h4>
              <div>
                <span className="font-bold mr-2">$56.32</span>
                <span className="line-through text-gray-500 text-sm">$66.22</span>
              </div>
              <div className="text-sm text-gray-400">⭐⭐⭐⭐⭐ No reviews</div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-1/2 h-full flex flex-col">
            <div className="relative w-full h-[80%] bg-gray-100 mb-2">
              <img
                src={Girl4}
                alt="Summer Dress"
                className="w-full h-full object-cover object-top"
              />
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 h-10 w-10 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium">
                -15%
              </div>
            </div>

            <div>
              <h4 className="font-medium text-lg">Summer Dress</h4>
              <div>
                <span className="font-bold mr-2">$56.32</span>
                <span className="line-through text-gray-500 text-sm">$66.22</span>
              </div>
              <div className="text-sm text-gray-400">⭐⭐⭐⭐⭐ No reviews</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WomenCollection;