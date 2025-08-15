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
        <section
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            height: "700px",
            backgroundAttachment: "fixed",
            transform: "rotate(0deg)",
            opacity: 1,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0"></div> 

          {/* Content Box */}
          <div className="relative z-10">
            <div
              className="absolute rounded-none"
              style={{
                width: "630px",
                height: "306px",
                top: "354px",
                left: "80px",
                paddingTop: "24px",
                paddingRight: "40px",
                paddingBottom: "32px",
                paddingLeft: "40px",
                gap: "20px",
                background: "linear-gradient(90deg, #4DCA79, #1CBDDD)",
                opacity: 1,
              }}
            >
              {/* Heading */}
              <h1
                style={{
                  width: "556px",
                  height: "192px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  opacity: 1,
                }}
              >
                We crush your competitors, goals, and sales records - without
                the B.S.
              </h1>

              {/* Button */}
              <button
                style={{
                  width: "214px",
                  height: "38px",
                  paddingTop: "12px",
                  paddingRight: "20px",
                  paddingBottom: "12px",
                  paddingLeft: "20px",
                  gap: "8px",
                  borderRadius: "4px",
                  background: "#F28D35",
                  border: "none",
                  cursor: "pointer",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px", // Added space from heading
                }}
              >
                <span
                  style={{
                    width: "174px",
                    height: "14px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    opacity: 1,
                  }}
                >
                  Get free consultation
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="flex justify-center py-16">
          <Content />
        </section>
         <section className="flex justify-center">
          <DigitalStrategy />
        </section>
 <section className="flex justify-center">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}
