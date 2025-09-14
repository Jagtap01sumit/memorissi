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
