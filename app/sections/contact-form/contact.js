"use client";
import React, { useState, useEffect } from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { COLORS } from "@/app/utils";
import { getAboutPageData } from "@/app/data/AboutUsData";

export default function EmailSection() {
  const [aboutData, setAboutData] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAboutPageData();
        setAboutData(data);
      } catch (error) {
        console.error("Failed to fetch contact data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setEmailSubmitted(true);
        e.target.reset();
        setTimeout(() => setEmailSubmitted(false), 5000);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  if (!aboutData) return null;

  return (
    <section className="my-12">
      {" "}
      <h5 className="text-sm text-gray-400 text-center">CONTACT US</h5>
      <h1 className="text-3xl font-serif text-center mb-5">
        Let&apos;s Work Together
      </h1>
      <div
        className="grid md:grid-cols-2  py-8 gap-8 relative p-6 overflow-hidden"
        id="contactSection"
        style={{ color: COLORS.textPrimary }}
      >
        <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_#A259FF,_transparent)] blur-3xl opacity-70 z-0"></div>

        <div className="z-20 relative flex flex-col items-center justify-center">
          <h6 className="text-xl font-bold text-white my-2">
            Let’s Create Something Beautiful Together
          </h6>
          <p className="text-[#ADB7BE] text-justify text-gray-300 leading-relaxed tracking-wide indent-8">
            We are always open to new projects, collaborations, and creative
            opportunities. Whether you’re planning a wedding, a commercial
            shoot, model portfolio, or simply want to capture timeless moments,
            I’d love to hear from you.
          </p>
          <div className="socials text-3xl flex flex-row gap-2">
            <Link href="https://github.com/jagtap01sumit">
              <FaGithubSquare />
            </Link>

            <Link href="https://www.instagram.com/memoressa.media/">
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg p-3 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg p-3 w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg p-3 w-full"
            />
            <button
              type="submit"
              disabled={loading}
              className="  font-semibold py-2.5 px-5 rounded-lg w-full transition"
              style={{
                backgroundColor: COLORS.cardBackground,
                text: COLORS.textPrimary,
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {emailSubmitted && (
              <p className="text-green-500 mt-2 text-sm">
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
