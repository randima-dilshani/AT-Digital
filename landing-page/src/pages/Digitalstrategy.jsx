import digitalImage from "../assets/image1.png";

export default function DigitalStrategy() {
  return (
    <section
      style={{
        width: "1064px",
        height: "416px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "108px",
        opacity: 1,
      }}
    >
      {/* Text Section - LEFT */}
      <div
        style={{
          width: "542px",
          height: "187px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
       <h2
  style={{
    width: "507px",               
    height: "33px",               
    transform: "rotate(0deg)",    
    opacity: 1, 
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "27px",
    lineHeight: "33px",
    letterSpacing: "0.4px",
    color: "#5A3FFF",
    margin: 0,
  }}
>
  Digital Strategy Consulting
</h2>



     <p
  style={{
    width: "542px",                
    height: "95px",                
    transform: "rotate(0deg)",     
    opacity: 1,                   
    fontFamily: "Inter, sans-serif", 
    fontWeight: 400,
    fontStyle: "normal",           
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0",
    color: "#333333",
    margin: 0,                     
  }}
>
  Your digital strategy should complement the overall marketing strategy of the company.
  In online marketing, each component will never work in isolation and every business needs a different mix.
  We provide a clear concept and strategic overview to find the most efficient model for your business.
</p>


<button
  style={{
    width: "129px",                
    height: "38px",                
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",                     
    opacity: 1,                     
    borderRadius: "4px",            
    paddingTop: "12px",             
    paddingRight: "20px",
    paddingBottom: "12px",
    paddingLeft: "20px",
    backgroundColor: "#F28D35",
    border: "none",
    cursor: "pointer",
  }}
>
  <span
    style={{
      width: "89px",                
      height: "14px",               
      transform: "rotate(0deg)",    
      opacity: 1,                   
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,              
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "-0.02em",     
      textTransform: "uppercase",
      color: "#FFFFFF",
    }}
  >
    Learn More
  </span>
</button>

      </div>

      {/* Image Section - RIGHT */}
      <div style={{ width: "414px", height: "416px" }}>
        <img
          src={digitalImage}
          alt="Digital Strategy Illustration"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}
