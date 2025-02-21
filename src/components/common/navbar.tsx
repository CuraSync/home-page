"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import lin from "../../..//public/icons/lin.svg";
import gh from "../../..//public/icons/gh.svg";
import twitter from "../../../public/icons/x.svg";
import ig from "../../../public/icons/ig.svg";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/services", text: "Our Services" },
    { href: "/contact", text: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: gh, alt: "Github" },
    { href: "https://facebook.com", icon: lin, alt: "LinkedIn" },
    { href: "https://twitter.com", icon: twitter, alt: "Twitter" },
    { href: "https://instagram.com", icon: ig, alt: "Instagram" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50 border-b shadow-md">
        <div className="container mx-auto">
          <div className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Image
                src={Logo}
                alt="Logo"
                width={isMobile ? 40 : 50}
                height={isMobile ? 40 : 50}
                className="w-auto h-auto"
              />
              <span className="font-bold text-lg sm:text-xl md:text-2xl">
                CuraSync
              </span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-3 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {link.text}
                      </NavigationMenuLink>
                    </Link>
                  </div>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.alt}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-16 right-0 w-full sm:w-96 h-[calc(100vh-4rem)] bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="px-6 py-8">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-8 mt-8 py-6 border-t border-b">
                {socialLinks.map((link) => (
                  <Link
                    key={link.alt}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
