import React from 'react';
import Image from 'next/image';
import fb from '../public/icons/fb.svg';
import x from '../public/icons/x.svg';
import ig from '../public/icons/ig.svg';
import Logo from '../public/images/Logo.png'; 

const Footer = () => {
  return (
    <div className="w-full bg-white text-black p-8">
      <hr className="border-t border-gray-300 mb-8" /> {/* Horizontal line */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="CuraSync Logo" width={24} height={24} /> {/* Logo */}
          <h2 className="text-lg font-bold">CuraSync</h2>
        </div>
        <div className="flex space-x-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src={fb.src} alt="Facebook" className="w-full h-full" />
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <img src={x.src} alt="Twitter" className="w-full h-full" />
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <img src={ig.src} alt="Instagram" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full flex justify-end mt-8">
        <div className="w-full max-w-md flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#101113] text-lg font-medium font-['Poppins'] leading-7">Join Our Newsletter</div>
            <div className="self-stretch text-[#5c5f66] text-base font-medium font-['Poppins'] leading-normal">
              Be the first to know about our latest updates, exclusive offers, and more.
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch p-3 rounded-lg border border-[#d6d6d6] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 self-stretch justify-start items-center gap-0.5 flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="grow shrink basis-0 text-[#a6a7ab] text-sm font-normal font-['Poppins'] leading-tight p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="px-5 py-3 bg-[#0eb4d3] rounded-lg justify-center items-center gap-2 flex text-[#fdfdfd] text-sm font-normal font-['Poppins'] leading-tight">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-between items-center mt-8">
        <div className="text-[#5c5f66] text-sm font-normal font-['Poppins'] leading-tight">
          © 2025 CuraSync. All rights reserved.
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="text-[#5c5f66] text-sm font-normal font-['Poppins'] leading-tight">Privacy Policy</div>
          <div className="text-[#5c5f66] text-sm font-normal font-['Poppins'] leading-tight">Terms of Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;