"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import BackgroundImage from '../public/images/backimg.png';
import SecondImage from '../public/images/secondimg.png';
import service1 from '../public/images/service1.png';
import service2 from '../public/images/service2.png';
import service3 from '../public/images/service3.png';
import service4 from '../public/images/service4.png';
import service5 from '../public/images/service5.png';
import service6 from '../public/images/service6.png';
import news1 from '../public/images/news1.png';
import news2 from '../public/images/news2.png';
import news3 from '../public/images/news3.png';
import news4 from '../public/images/news4.png';
import news5 from '../public/images/news5.png';
import whychooseus from '../public/images/whychooseus.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const services = [
  {
    title: "AI Powered Report Visualization",
    description:
      "Simplifies lab reports with AI, showing data in easy-to-understand graphs.",
    image: service1,
  },
  {
    title: "Secure Communication",
    description:
      "Enables private, encrypted messaging between patients, doctors, labs, and pharmacies.",
    image: service2,
  },
  {
    title: "Centralized Medical Records",
    description:
      "Combines medical histories, prescriptions, and reports in one accessible platform.",
    image: service3,
  },
  {
    title: "Health Tracking Dashboard",
    description:
      "Displays health trends and alerts for medications and appointments in an interactive timeline.",
    image: service4,
  },
  {
    title: "Multi-role Integration",
    description:
      "Supports patients, doctors, labs, and pharmacies with tailored tools for each role.",
    image: service5,
  },
  {
    title: "Patient-Doctor Management",
    description:
      "Provides tools for managing patient lists, sharing records, and tracking health updates.",
    image: service6,
  },
];

const blogs = [
  {
    title: "Vitamin injections for a better future",
    date: "22 January, 2024",
    img: news1,
  },
  {
    title: "New advancements in AI technology",
    date: "15 February, 2024",
    img: news2,
  },
  {
    title: "Health benefits of a balanced diet",
    date: "10 March, 2024",
    img: news3,
  },
  {
    title: "The future of renewable energy",
    date: "5 April, 2024",
    img: news4,
  },
  {
    title: "Innovations in medical research",
    date: "20 May, 2024",
    img: news5,
  },
];

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      let scrollAmount = 0;
      const scrollStep = 1; // Adjust this value to control the scroll speed
      const scrollInterval = setInterval(() => {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0; // Reset scroll amount to create a loop
        }
      }, 30); // Adjust this value to control the scroll speed

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 space-y-4">
          <h1 className="text-gray-50 text-5xl font-bold">Trusted & Reliable</h1>
          <h2 className="text-gray-50 text-5xl font-bold">Better Healthcare for the World</h2>
          <p className="text-gray-50 text-lg max-w-2xl">
            CuraSync is a comprehensive virtual care program designed to support your journey to better health.
            The program focuses on helping you achieve meaningful health improvements with ease and convenience.
            With CuraSync, you have a trusted partner dedicated to empowering you to live a healthier life.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-medium hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Second Image and Philosophy Section */}
      <div className="flex justify-between items-start p-10">
        <img className="w-[500px] h-[400px]" src={SecondImage.src} alt="Second Image" /> {/* Enlarged the image */}
        <div className="bg-blue-100 border border-blue-300 rounded-lg shadow-lg p-10 w-full md:w-3/4 ml-10">
          <p className="text-2xl font-semibold mb-4 text-center">Our Philosophy</p>
          <p className="mb-4 text-center">
            At CuraSync, we believe that healthcare should be simple, accessible, and empowering for everyone. 
            Our platform is built on the principles of connection, innovation, and trust:
          </p>
          <ul className="mb-4 text-center">
            <li><strong>Connection:</strong> Uniting patients, doctors, labs, and pharmacies for seamless healthcare.<br /></li>
            <li><strong>Innovation:</strong> Harnessing technology for personalized insights and communication.<br /></li>
            <li><strong>Trust:</strong> Securing your data and supporting your health journey.</li>
          </ul>
          <p className="mb-4 text-center">
            We are transforming healthcare into a collaborative, transparent process, 
            empowering you to take charge of your well-being. Together, we are building a healthier future.
          </p>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-medium hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Services & Specialties Section */}
      <div className="p-10">
        <p className="text-2xl font-semibold mb-4 text-center">Services & Specialties</p>
        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-6 px-4 py-6">
          {/* Feature Cards */}
          {services.map((service, index) => (
            <div key={index} className="min-w-[300px] bg-white border rounded-lg shadow-lg p-4 space-y-4">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-[150px] object-cover rounded-lg"
                width={300}
                height={150}
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <button className="text-blue-500 text-sm font-medium hover:underline">
                Get Details →
              </button>
            </div>
          ))}
        </div>
        <div className="p-10 mt-10">
          <p className="text-2xl font-semibold mb-4 text-center">Why Choose Us</p>
          <p className='text-center'>At CuraSync, we are redefining healthcare with a 
            platform that prioritizes your well-being by seamlessly connecting patients, doctors, labs, and pharmacies.
             Our goal is to simplify health management, empower users with personalized insights, and ensure a secure, 
             collaborative experience that transforms how you approach your health.</p>

             <div className="bg-blue-100 border border-blue-300 rounded-lg shadow-lg p-10 w-full flex flex-col md:flex-row justify-center items-center mt-10">
               <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-10">
                 <img
                   className="w-[500px] h-[400px] object-cover rounded-lg"
                   src={whychooseus.src}
                   alt="Why Choose Us"
                 />
               </div>
               <div className="flex flex-col justify-center items-center text-center">
                 <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                 <p className="text-sm mb-4">
                   Empowering individuals to manage their health with secure,
                   innovative, and user-friendly digital solutions.
                 </p>
                 <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                 <p className="text-sm mb-4">
                   To revolutionize healthcare by creating a connected, collaborative,
                   and accessible ecosystem for chronic disease management.
                 </p>
                 <h3 className="font-bold text-lg mb-2">Our Values</h3>
                 <p className="text-sm">
                   We value innovation, trust, empathy, collaboration, and excellence
                   in delivering impactful healthcare solutions.
                 </p>
                 <h3 className="font-bold text-lg mb-2">Our Commitment</h3>
                 <p className="text-sm">
                  We are committed to providing patients, doctors, labs, and 
                  pharmacies with tools to simplify and enhance healthcare delivery.
                 </p>
                 <h3 className="font-bold text-lg mb-2">Our Impacts</h3>
                 <p className="text-sm">
                 CuraSync ensures secure, accessible, and empowering healthcare experiences for patients and providers worldwide.
                 </p>
               </div>
             </div>

             <div className="bg-blue-900 border border-blue-300 rounded-xl shadow-lg p-10 w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
              <p className="text-white mb-5 text-left md:mb-1">
                <strong>SEARCH BY SPECIALIST AND DOCTOR</strong>
              </p>

              <div className="bg-white p-5 rounded-lg w-full md:w-1/6">
                <DropdownMenu>
                  <DropdownMenuTrigger>All Specialist</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Specialist 1</DropdownMenuItem>
                    <DropdownMenuItem>Specialist 2</DropdownMenuItem>
                    <DropdownMenuItem>Specialist 3</DropdownMenuItem>
                    <DropdownMenuItem>Specialist 4</DropdownMenuItem>
                    <DropdownMenuItem>Specialist 5</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="bg-white p-5 rounded-lg w-full md:w-1/6">
                <DropdownMenu>
                  <DropdownMenuTrigger>All Doctors</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem> Doctor 1</DropdownMenuItem>
                    <DropdownMenuItem> Doctor 2</DropdownMenuItem>
                    <DropdownMenuItem> Doctor 3</DropdownMenuItem>
                    <DropdownMenuItem> Doctor 4</DropdownMenuItem>
                    <DropdownMenuItem> Doctor 5</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="bg-blue-300 p-5 rounded-lg w-full md:w-1/6 flex items-center justify-center">
                <button className="text-white font-bold">Search by Specialist and Doctor</button>
              </div>
            </div>

            <div className="bg-gray-50 py-10">
              <div className="container mx-auto px-5">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">Blogs and News</h2>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    All Blogs and News
                  </a>
                </div>

                {/* Blog Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Main Blog */}
                  <div className="col-span-1 md:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={news1.src} 
                      alt="Blog Main"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <span className="text-gray-500 text-sm">By Admin</span>
                        <span className="text-gray-400 mx-2">|</span>
                        <span className="text-gray-500 text-sm">28 January 2024</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Characteristics of Diabetes in Young Children to Pay Attention to
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Diabetes can be experienced by anyone, including young people. In
                        fact, diabetes now often occurs in young people, as quoted by the
                        World Health Organization (WHO).
                      </p>
                      <a
                        href="/blog"
                        className="text-blue-600 font-medium hover:underline"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>

                  {/* Other Blogs */}
                  {blogs.map((blog, index) => (
                    <div key={index} className="col-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
                      <Image
                        src={blog.img}
                        alt={`Blog ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <span className="text-gray-500 text-sm">By Admin</span>
                          <span className="text-gray-400 mx-2">|</span>
                          <span className="text-gray-500 text-sm">{blog.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                        <a
                          href="#"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;