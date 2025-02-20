"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const services = [
  {
    title: "AI Powered Report Visualization",
    description:
      "Simplifies lab reports with AI, showing data in easy-to-understand graphs.",
    image: "/images/service1.png",
  },
  {
    title: "Secure Communication",
    description:
      "Enables private, encrypted messaging between patients, doctors, labs, and pharmacies.",
    image: "/images/service2.png",
  },
  {
    title: "Centralized Medical Records",
    description:
      "Combines medical histories, prescriptions, and reports in one accessible platform.",
    image: "/images/service3.png",
  },
  {
    title: "Health Tracking Dashboard",
    description:
      "Displays health trends and alerts for medications and appointments in an interactive timeline.",
    image: "/images/service4.png",
  },
  {
    title: "Multi-role Integration",
    description:
      "Supports patients, doctors, labs, and pharmacies with tailored tools for each role.",
    image: "/images/service5.png",
  },
  {
    title: "Patient-Doctor Management",
    description:
      "Provides tools for managing patient lists, sharing records, and tracking health updates.",
    image: "/images/service6.png",
  },
];

const blogs = [
  {
    title: "Vitamin injections for a better future",
    date: "22 January, 2024",
    img: "/images/news1.png",
  },
  {
    title: "New advancements in AI technology",
    date: "15 February, 2024",
    img: "/images/news2.png",
  },
  {
    title: "Health benefits of a balanced diet",
    date: "10 March, 2024",
    img: "/images/news3.png",
  },
  {
    title: "The future of renewable energy",
    date: "5 April, 2024",
    img: "/images/news4.png",
  },
  {
    title: "Innovations in medical research",
    date: "20 May, 2024",
    img: "/images/news5.png",
  },
];

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollStep = 1;
      const scrollInterval = setInterval(() => {
        scrollAmount.current += scrollStep;
        scrollContainer.scrollLeft = scrollAmount.current;

        if (
          scrollAmount.current >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount.current = 0;
        }
      }, 30);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/backimg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 space-y-4">
          <h1 className="text-gray-50 text-5xl font-bold">
            Trusted & Reliable
          </h1>
          <h2 className="text-gray-50 text-5xl font-bold">
            Better Healthcare for the World
          </h2>
          <p className="text-gray-50 text-lg max-w-2xl">
            CuraSync is a comprehensive virtual care program designed to support
            your journey to better health. The program focuses on helping you
            achieve meaningful health improvements with ease and convenience.
            With CuraSync, you have a trusted partner dedicated to empowering
            you to live a healthier life.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-medium hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Second Image and Philosophy Section */}
      <div className="flex justify-between items-start p-10">
        <Image
          src="/images/secondimg.png"
          alt="Second Image"
          width={500}
          height={400}
        />
        <div className="bg-blue-100 border border-blue-300 rounded-lg shadow-lg p-10 w-full md:w-3/4 ml-10">
          <p className="text-2xl font-semibold mb-4 text-center">
            Our Philosophy
          </p>
          <p className="mb-4 text-center">
            At CuraSync, we believe that healthcare should be simple,
            accessible, and empowering for everyone. Our platform is built on
            the principles of connection, innovation, and trust:
          </p>
          <ul className="mb-4 text-center">
            <li>
              <strong>Connection:</strong> Uniting patients, doctors, labs, and
              pharmacies for seamless healthcare.
            </li>
            <li>
              <strong>Innovation:</strong> Harnessing technology for
              personalized insights and communication.
            </li>
            <li>
              <strong>Trust:</strong> Securing your data and supporting your
              health journey.
            </li>
          </ul>
          <p className="mb-4 text-center">
            We are transforming healthcare into a collaborative, transparent
            process, empowering you to take charge of your well-being. Together,
            we are building a healthier future.
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
        <p className="text-2xl font-semibold mb-4 text-center">
          Services & Specialties
        </p>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 px-4 py-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white border rounded-lg shadow-lg p-4 space-y-4"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <button className="text-blue-500 text-sm font-medium hover:underline">
                Get Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
