import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Content from "./Webcontent";
import DigitalStrategy from "./Digitalstrategy";
import FAQ from "./FAQSection";
import heroBg from "../assets/HeroImage.png";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[700px] flex items-center"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundAttachment: "scroll",
  }}
>
  <div className="px-4 md:px-12">
    <div className="bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] pt-6 pr-10 pb-8 pl-10 w-full max-w-[90%] sm:max-w-[600px]">
      <h1 className="font-inter font-bold text-white text-2xl sm:text-3xl md:text-5xl leading-tight">
        We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </h1>
      <button className="mt-5 bg-[#F28D35] px-5 py-3 rounded text-white font-inter font-bold text-xs sm:text-sm uppercase">
        Get Free Consultation
      </button>
    </div>
  </div>
</section>




        {/* Content */}
        <section className="flex justify-center py-16 px-4">
          <Content />
        </section>

        {/* Digital Strategy */}
        <section className="flex justify-center px-4">
          <DigitalStrategy />
        </section>

        {/* FAQ */}
        <section className="flex justify-center px-4">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}
