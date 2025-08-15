import React from "react";
import webImage from "../assets/image.png";

export default function Content() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-28 max-w-[1064px] mx-auto">
      {/* Image Section */}
      <div className="w-full max-w-[414px]">
        <img
          src={webImage}
          alt="Web & Mobile Development Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-5 max-w-[542px]">
        <h2 className="font-poppins font-semibold text-[#5A3FFF] text-xl md:text-2xl leading-[33px] tracking-[0.4px]">
          Web & Mobile App Development
        </h2>
        <p className="font-inter text-[#333333] text-base leading-snug">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <button className="bg-[#F28D35] px-5 py-3 rounded text-white font-inter font-bold text-xs uppercase w-[129px]">
          Learn More
        </button>
      </div>
    </div>
  );
}
