import digitalImage from "../assets/image1.png";

export default function DigitalStrategy() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-28 max-w-[1064px] mx-auto">
      {/* Text Section - LEFT */}
      <div className="flex flex-col gap-5 max-w-[542px]">
        <h2 className="font-poppins font-semibold text-[#5A3FFF] text-xl md:text-2xl leading-[33px] tracking-[0.4px]">
          Digital Strategy Consulting
        </h2>
        <p className="font-inter text-[#333333] text-base leading-snug">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button className="bg-[#F28D35] px-5 py-3 rounded text-white font-inter font-bold text-xs uppercase w-[129px]">
          Learn More
        </button>
      </div>

      {/* Image Section - RIGHT */}
      <div className="w-full max-w-[414px]">
        <img
          src={digitalImage}
          alt="Digital Strategy Illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
