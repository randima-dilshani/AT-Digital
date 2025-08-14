export default function Footer() {
  return (
    <footer className="bg-[#4f46e5] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
            <span className="font-bold text-xl">at digital</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your goal is our target. Not anything in between. We use
            online marketing platforms and tools to achieve single
            objective - your business results.
          </p>
        </div>

        {/* Our Technologies */}
        <div>
          <h3 className="font-semibold mb-3">Our Technologies</h3>
          <ul className="space-y-1 text-sm">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/40">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
