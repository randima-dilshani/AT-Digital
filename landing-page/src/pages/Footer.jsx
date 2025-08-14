import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#4F46E5] text-white font-lato">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start py-10 px-20 gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col max-w-[413px] gap-[14px]">
          <img
            src={logo}
            alt="AT Digital Logo"
            className="w-[226px] h-[49.6213px] object-contain"
          />
          <p className="text-white text-[16px] font-normal leading-[100%]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        {/* Technologies + Services (One Frame) */}
        <div className="flex w-[522px] h-[141px] gap-[128px]">
          
          {/* Our Technologies */}
<div className="flex flex-col w-[197px] h-[141px] gap-[12px]">
  <h3 className="font-inter font-semibold text-[21px] leading-[100%] w-[179px]">
    Our Technologies
  </h3>
 <ul className="flex flex-col gap-[12px] h-[104px]">
  <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">ReactJS</li>
  <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">Gatsby</li>
  <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">NextJS</li>
  <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">NodeJS</li>
</ul>

</div>


{/* Our Services */}
<div className="flex flex-col w-[197px] h-[129px] gap-[12px]">
  <h3 className="font-inter font-semibold text-[21px] leading-[100%] w-[132px]">
    Our Services
  </h3>

  <ul className="flex flex-col gap-[12px]">
    <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">
      Social Media Marketing
    </li>
    <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">
      Web & Mobile App Development
    </li>
    <li className="font-inter font-medium text-[14px] leading-[100%] capitalize">
      Data & Analytics
    </li>
  </ul>
</div>


        </div>
      </div>

{/* Bottom Bar */}
<div>
  {/* Divider Line */}
  <div className="w-[630px] border-t border-white mx-auto"></div>

  {/* Links */}
  <div className="max-w-[1440px] mx-auto px-20 py-4 flex justify-center gap-4 text-[14px] font-inter font-medium">
    <a href="#" className="capitalize">Privacy Policy</a>
    <span>|</span>
    <a href="#" className="capitalize">Terms & Conditions</a>
  </div>
</div>

    </footer>
  );
}
