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

  if (!aboutData) return null; // optional: loading state

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-8 relative p-6 overflow-hidden"
      id="contactSection"
      style={{ color: COLORS.textPrimary }}
    >
      {/* Glowing background */}
      <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_#A259FF,_transparent)] blur-3xl opacity-70 z-0"></div>

      <div className="z-20 relative flex flex-col items-center justify-center">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Work Together
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials text-3xl flex flex-row gap-2">
          <Link href="https://github.com/jagtap01sumit">
            <FaGithubSquare />
          </Link>
          {/* <Link href="https://www.linkedin.com/in/sumit-jagtap-577a77241/">
            <FaLinkedin />
          </Link> */}
          <Link href="https://www.instagram.com/jagtap__sumit/">
            <FaInstagram />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
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
    </section>
  );
}
