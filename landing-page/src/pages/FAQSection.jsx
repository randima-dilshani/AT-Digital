import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Answer text for question two goes here.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Answer text for question three goes here.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        width: "846px",
        margin: "60px auto 80px auto", // space above footer
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "27px",
          lineHeight: "33px",
          letterSpacing: "0.4px",
          color: "#5A3FFF",
          textAlign: "center",
          padding: "16px 0",
          margin: 0,
        }}
      >
        Frequently asked questions
      </h3>

      {/* FAQ Items */}
      {faqData.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleFAQ(index)}
          style={{
            padding: "24px",
            borderRadius: "7px",
            backgroundColor: openIndex === index ? "#F9F7FF" : "transparent",
            transition: "background-color 0.2s ease",
            cursor: "pointer",
            marginBottom: "8px",
          }}
          onMouseEnter={(e) => {
            if (openIndex !== index) e.currentTarget.style.backgroundColor = "#F9F7FF";
          }}
          onMouseLeave={(e) => {
            if (openIndex !== index) e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {/* Question Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "22px",
                lineHeight: "28px",
                letterSpacing: "0px",
                color: openIndex === index ? "#5A3FFF" : "#000000",
                margin: 0,
              }}
            >
              {item.question}
            </p>
<span
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    color: openIndex === index ? "#4F46E5" : "#000000", // change on open
    userSelect: "none",
  }}
>
  {openIndex === index ? "–" : "+"}
</span>

          </div>

          {/* Answer */}
          {openIndex === index && (
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "30px",
                letterSpacing: "0px",
                color: "#8C8C8C",
                marginTop: "13px",
              }}
            >
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
