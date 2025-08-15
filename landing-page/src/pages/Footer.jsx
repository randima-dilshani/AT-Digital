import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#4F46E5] text-white font-lato">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start items-center lg:items-start py-10 px-6 sm:px-10 lg:px-20 gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col lg:max-w-[413px] gap-[14px] text-center lg:text-left items-center lg:items-start">
          <img
            src={logo}
            alt="AT Digital Logo"
            className="lg:w-[226px] lg:h-[49.6213px] w-40 h-auto object-contain"
          />
          <p className="text-white text-[16px] font-normal leading-[150%] max-w-xs lg:max-w-none">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        {/* Technologies + Services */}
        <div className="flex flex-col gap-10 lg:flex-row lg:w-[522px] lg:h-[141px] lg:gap-[128px] items-center lg:items-start">
          
          {/* Our Technologies */}
          <div className="flex flex-col lg:w-[197px] lg:h-[141px] gap-[12px] text-center lg:text-left">
            <h3 className="font-inter font-semibold text-[21px] leading-[100%]">
              Our Technologies
            </h3>
            <ul className="flex flex-col gap-[12px]">
              <li className="font-inter font-medium text-[14px] capitalize">ReactJS</li>
              <li className="font-inter font-medium text-[14px] capitalize">Gatsby</li>
              <li className="font-inter font-medium text-[14px] capitalize">NextJS</li>
              <li className="font-inter font-medium text-[14px] capitalize">NodeJS</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col lg:w-[197px] lg:h-[129px] gap-[12px] text-center lg:text-left">
            <h3 className="font-inter font-semibold text-[21px] leading-[100%]">
              Our Services
            </h3>
            <ul className="flex flex-col gap-[12px]">
              <li className="font-inter font-medium text-[14px] capitalize">
                Social Media Marketing
              </li>
              <li className="font-inter font-medium text-[14px] capitalize">
                Web & Mobile App Development
              </li>
              <li className="font-inter font-medium text-[14px] capitalize">
                Data & Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        {/* Divider Line */}
        <div className="lg:w-[630px] w-full border-t border-white mx-auto"></div>

        {/* Links */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-[14px] font-inter font-medium text-center">
          <a href="#" className="capitalize">Privacy Policy</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="capitalize">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
