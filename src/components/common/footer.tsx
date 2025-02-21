import React from "react";
import Image from "next/image";
import lin from "../../..//public/icons/lin.svg";
import gh from "../../..//public/icons/gh.svg";
import Link from "next/link";
import x from "../../../public/icons/x.svg";
import ig from "../../../public/icons/ig.svg";
import Logo from "../../../public/images/Logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-white text-black p-4 sm:p-6 md:p-8">
      <hr className="border-t border-gray-300 mb-6 sm:mb-8" />

      <div className="max-w-7xl mx-auto">
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={gh}
                alt="Github"
                width={24}
                height={24}
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              href="https://linkedIn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={lin}
                alt="LikedIn"
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

        {/* Middle Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Description */}
          <div className="max-w-md">
            <h3 className="text-[#101113] text-lg font-medium mb-4">
              About CuraSync
            </h3>
            <p className="text-[#5c5f66] text-sm leading-relaxed">
              CuraSync is a leading healthcare technology company dedicated to
              transforming patient care through innovative solutions. We connect
              healthcare providers, streamline workflows, and enhance patient
              outcomes.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="w-full max-w-md">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#101113] text-lg font-medium leading-7">
                  Join Our Newsletter
                </div>
                <div className="self-stretch text-[#5c5f66] text-sm leading-normal">
                  Be the first to know about our latest updates, exclusive
                  offers, and more.
                </div>
              </div>

              <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-3">
                <div className="w-full sm:grow shrink basis-0">
                  <div className="w-full p-3 rounded-lg border border-[#d6d6d6]">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full text-[#a6a7ab] text-sm font-normal leading-tight focus:outline-none"
                    />
                  </div>
                </div>
                <button className="w-full sm:w-auto mt-3 sm:mt-0 px-5 py-3 bg-[#0eb4d3] rounded-lg justify-center items-center gap-2 flex text-[#fdfdfd] text-sm font-normal hover:bg-[#0ca0bc] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
          <div className="text-[#5c5f66] text-xs sm:text-sm font-normal leading-tight text-center sm:text-left">
            © 2025 CuraSync. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
