"use client";
import { useEffect, useState } from "react";
import { COLORS } from "@/app/utils";
import { FiChevronDown } from "react-icons/fi";
import { getAFAQData } from "@/app/data/AboutUsData";
export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [FAQ, setFAQData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAFAQData();
      setFAQData(data);
    }
    fetchData();
  }, []);
  console.log(FAQ, "faqdata");

  if (!FAQ) return <p className="text-center text-gray-400">Loading...</p>;
  // const FAQ_DATA = [
  //   {
  //     question: "What types of shoots do you offer?",
  //     answer:
  //       "We provide wedding shoots, commercial product shoots, fashion/model photography, and branded Instagram reels — fully tailored to your vision.",
  //   },
  //   {
  //     question: "How do I book a shoot?",
  //     answer:
  //       "You can book directly via our 'Book a Shoot' form or contact us via WhatsApp. We’ll get back to you within 24 hours.",
  //   },
  //   {
  //     question: "Do you manage social media too?",
  //     answer:
  //       "Yes! We offer full social media management — including posts, reels, captions, hashtag strategy, and analytics.",
  //   },
  //   {
  //     question: "How soon will I receive final edits?",
  //     answer:
  //       "We deliver photo galleries and edited reels within 7–10 business days, depending on your package.",
  //   },
  // ];
  return (
    <section
      className="max-w-3xl mx-auto py-12"
      style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>

      {FAQ?.map((item, index) => (
        <div className="mb-4 border-b border-gray-700">
          <button
            className="w-full flex justify-between items-center py-4 text-left"
            onClick={() => toggle(index)}
          >
            <span className="font-medium text-lg">{item.question}</span>
            <FiChevronDown
              className={`transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              size={22}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-[color:var(--textSecondary)] py-2 px-1">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
