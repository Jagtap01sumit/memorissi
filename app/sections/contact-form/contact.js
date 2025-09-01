"use client";
import React, { useState } from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { COLORS } from "@/app/utils";
export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative p-6 overflow-hidden"
      id="contactSection"
      style={{
        color: COLORS.textPrimary,
      }}
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

      <div>
        <form className="flex flex-col relative z-10" onSubmit={handleSubmit}>
          {/* email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="user@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          {/* subject */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          {/* message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className=" font-medium py-2.5 px-5 rounded-lg w-full"
            style={{
              backgroundColor: COLORS.cardBackground,
              text: COLORS.textPrimary,
            }}
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
