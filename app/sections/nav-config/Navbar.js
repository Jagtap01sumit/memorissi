"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { COLORS } from "@/app/utils";
import { fetchNavbar } from "@/app/data/HeroData"; // or navbarData.js

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState({
    logo: "",
    leftLinks: [],
    rightLinks: [],
  });

  useEffect(() => {
    async function loadNavbar() {
      const data = await fetchNavbar();
      if (data) {
        setNavbar(data);
      } else {
        console.log("SOMETHING WENT WRONG IN NAVBAR DATA:", data);
      }
    }
    loadNavbar();
  }, []);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 px-6 md:px-16 
                 grid grid-cols-3 items-center
                 bg-white/10 backdrop-blur-md border-b border-white/20"
      style={{ backgroundColor: `${COLORS.background}99` }}
    >
      {/* Left Links */}
      <div className="hidden md:flex justify-between pr-8">
        {navbar.leftLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Center Logo */}
      <div className="hidden md:flex justify-center">
        <Link href="/">
          {navbar.logo && (
            <Image
              src={navbar.logo}
              alt="logo"
              width={120}
              height={50}
              priority
            />
          )}
        </Link>
      </div>

      {/* Right Links */}
      <div className="hidden md:flex justify-between pl-8">
        {navbar.rightLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden col-span-3 flex w-full justify-between items-center">
        <Link href="/">
          {navbar.logo && (
            <Image src={navbar.logo} alt="Logo" width={100} height={40} />
          )}
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden col-span-3 absolute top-full left-0 w-full
                     bg-white/10 backdrop-blur-md border-t border-white/20
                     p-6 flex flex-col gap-4 shadow-md"
          style={{ backgroundColor: `${COLORS.background}CC` }}
        >
          {[...navbar.leftLinks, ...navbar.rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
