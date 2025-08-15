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
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Answer text for question two goes here.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Answer text for question three goes here.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[846px] mx-auto my-16 flex flex-col bg-white px-4">
      {/* Title */}
      <h3 className="font-poppins font-semibold text-[#5A3FFF] text-xl md:text-2xl text-center py-4">
        Frequently asked questions
      </h3>

      {/* FAQ Items */}
      {faqData.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleFAQ(index)}
          className={`p-6 rounded-lg transition-colors duration-200 cursor-pointer mb-2 ${
            openIndex === index ? "bg-[#F9F7FF]" : "hover:bg-[#F9F7FF]"
          }`}
        >
          {/* Question Row */}
          <div className="flex justify-between items-center">
            <p
              className={`font-inter font-medium text-lg md:text-xl leading-7 m-0 ${
                openIndex === index ? "text-[#5A3FFF]" : "text-black"
              }`}
            >
              {item.question}
            </p>
            <span
              className={`text-xl font-bold select-none ${
                openIndex === index ? "text-[#4F46E5]" : "text-black"
              }`}
            >
              {openIndex === index ? "–" : "+"}
            </span>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <p className="font-inter text-[#8C8C8C] text-base leading-7 mt-3">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
