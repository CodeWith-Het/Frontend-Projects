import React from "react";
import MianPart from "./main Part/MianPart";
import FooterPart from "./main Part/FooterPart";

const ShopHeading = () => {
  return (
    <div className=" w-full">

      <div className="relative w-full h-[60vh] bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Living Room" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-1"
        />
        <div className="absolute inset-5 flex flex-col items-center justify-center">
          
          <h1 className="text-white text-[22vw] font-bold leading-none tracking-tight z-2">
            Shop
          </h1>
        </div>
      </div>

      <MianPart />
      <FooterPart />
    </div>
  );
};

export default ShopHeading;
