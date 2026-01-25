import React from "react";

const FooterPart = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-14">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-sm">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Ready to Get Our New Stuff?
          </h1>

          <div className="mt-6">
            <div className="bg-white px-4 py-2 rounded-full flex items-center gap-3 w-full max-w-sm">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
              />
              <button className="bg-black text-white px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-md text-gray-300 text-sm leading-relaxed">
          <h4 className="text-white font-semibold mb-2">
            Lorem ipsum dolor sit.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            inventore veritatis distinctio eveniet et iste?
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterPart;
