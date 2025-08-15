import React from "react";
import webImage from "../assets/image.png";

export default function Content() {
  return (
    <div
      style={{
        width: "1064px",
        height: "414px",
        display: "flex",
        alignItems: "center",
        gap: "108px",
        margin: "0 auto", // centers it horizontally
      }}
    >
      {/* Image Section */}
      <div style={{ width: "414px", height: "414px" }}>
        <img
          src={webImage}
          alt="Web & Mobile Development Illustration"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Text Section */}
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
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "27px",
    lineHeight: "33px",
    letterSpacing: "0.4px",
    color: "#5A3FFF",
    opacity: 1,
  }}
>
  Web & Mobile App Development
</h2>
       <p
  style={{
    width: "542px",
    height: "76px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0",
    color: "#333333",
    opacity: 1,
  }}
>
  Your web and mobile Apps are pieces of the puzzle to grow your
  business. We use frameworks which tailor content and engagement
  methods to respond to different intents shown by your potential
  customers who interact with your business online.
</p>

<button
  style={{
    width: "129px",
    height: "38px",
    paddingTop: "12px",
    paddingRight: "20px",
    paddingBottom: "12px",
    paddingLeft: "20px",
    gap: "8px",
    borderRadius: "4px",
    backgroundColor: "#F28D35",
    border: "none",
    cursor: "pointer",
    opacity: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <span
    style={{
      width: "89px",
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
    Learn More
  </span>
</button>

      </div>
    </div>
  );
}
