import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I apply for a visa?",
      answer:
        "You can apply for a visa by filling out the application form on our website. Just go to the 'Apply Now' section and follow the instructions.",
    },
    {
      question: "What documents are required for the application?",
      answer:
        "Required documents include your passport, recent photographs, and any supporting documents specified in the application process.",
    },
    {
      question: "How long does the visa process take?",
      answer:
        "The processing time depends on the type of visa. It typically takes 3-5 business days for standard processing.",
    },
    {
      question: "Can I track my visa application status?",
      answer:
        "Yes, you can track your application status through the 'Track Application' section on our website.",
    },
  ];

  return (
    <section className="bg-[#6ba2bee2] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 focus:outline-none"
              >
                {faq.question}
                <span
                  className={`ml-2 transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
