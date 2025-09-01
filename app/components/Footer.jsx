"use client";
import footerData from "../data/FooterData";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { COLORS } from "../utils";

export default function Footer() {
  const { links, socials, copyright } = footerData;

  const iconMap = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />,
  };

  return (
    <footer
      className="p-8"
      style={{
        backgroundColor: COLORS.cardBackground,
        text: COLORS.textPrimary,
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Links */}
        <nav className="flex gap-6 mb-6 flex-wrap justify-center">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Description */}
        <p className="text-center max-w-2xl text-sm mb-6">
          Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere
          viverra massa fame sed. Dignissim urisus et ac egestas dignissim.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl mb-6">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {iconMap[s.icon]}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">{copyright}</p>
      </div>
    </footer>
  );
}
