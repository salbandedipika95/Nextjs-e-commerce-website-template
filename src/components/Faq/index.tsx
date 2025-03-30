"use client"; 
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can add vendor role to the customer?",
    answer:
      "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
  },
  { question: "What benefits a customer can take?",  answer:
    "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.", },
  { question: "What is your return & exchange policy?",  answer:
    "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.", },
  { question: "How long will it take for me to get my order?",  answer:
    "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.", },
  { question: "Can I personally pick up my order?",  answer:
    "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.", },
  { question: "I need to update my shipping address!",  answer:
    "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.", },
  { question: "Will I pay for any customs duties and taxes?",  answer:
    "Convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.", },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (

    <>
      <Breadcrumb title={"Frequently asked questions"} pages={["FAQ's"]} />
      <section className="overflow-hidden py-20 bg-white">
      <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-dark mb-8">
        Frequently asked questions
      </h2>
      <div className="space-y-2">
      {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-4 rounded-lg">
            <button
              className="w-full  flex justify-between items-center p-4 text-left text-dark font-medium hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && faq.answer && (
              <div className="p-4 text-gray-600 border-t border-gray-4 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        </div>
        </div>
      </section>
    </>
    
  );
};

export default Faq;
