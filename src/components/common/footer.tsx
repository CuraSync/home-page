import React from "react";
import Image from "next/image";
import fb from "../../../public/icons/fb.svg";
import Link from "next/link";
import x from "../../../public/icons/x.svg";
import ig from "../../../public/icons/ig.svg";
import Logo from "../../../public/images/Logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-white text-black p-4 sm:p-6 md:p-8">
      <hr className="border-t border-gray-300 mb-6 sm:mb-8" />

      {/* Top Section - Logo and Social Icons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="CuraSync Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <h2 className="text-lg font-bold">CuraSync</h2>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={fb}
              alt="Facebook"
              width={24}
              height={24}
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={x}
              alt="Twitter"
              width={24}
              height={24}
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ig}
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full flex justify-center sm:justify-end mt-8">
        <div className="w-full max-w-md flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#101113] text-base sm:text-lg font-medium font-['Poppins'] leading-7">
              Join Our Newsletter
            </div>
            <div className="self-stretch text-[#5c5f66] text-sm sm:text-base font-medium font-['Poppins'] leading-normal">
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </div>
          </div>

          <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-3">
            <div className="w-full sm:grow shrink basis-0">
              <div className="w-full p-3 rounded-lg border border-[#d6d6d6]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-[#a6a7ab] text-sm font-normal font-['Poppins'] leading-tight focus:outline-none"
                />
              </div>
            </div>
            <button className="w-full sm:w-auto mt-3 sm:mt-0 px-5 py-3 bg-[#0eb4d3] rounded-lg justify-center items-center gap-2 flex text-[#fdfdfd] text-sm font-normal font-['Poppins'] leading-tight hover:bg-[#0ca0bc] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
        <div className="text-[#5c5f66] text-xs sm:text-sm font-normal font-['Poppins'] leading-tight text-center sm:text-left">
          © 2025 CuraSync. All rights reserved.
        </div>
        <div className="flex justify-center sm:justify-end items-center gap-4">
          <Link
            href="/privacy"
            className="text-[#5c5f66] text-xs sm:text-sm font-normal font-['Poppins'] leading-tight hover:text-[#0eb4d3] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[#5c5f66] text-xs sm:text-sm font-normal font-['Poppins'] leading-tight hover:text-[#0eb4d3] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
