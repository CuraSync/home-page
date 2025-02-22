"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Users, FileText, TestTube } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Patient Management",
    description:
      "Streamline patient care coordination with intuitive tools for registration, appointments, and record-keeping.",
    image: "/images/service1.png",
  },
  {
    icon: <FileText className="w-8 h-8 text-green-600" />,
    title: "Electronic Health Records",
    description:
      "Access and manage comprehensive patient histories through secure digital health records.",
    image: "/images/service2.png",
  },
  {
    icon: <TestTube className="w-8 h-8 text-purple-600" />,
    title: "Laboratory Integration",
    description:
      "Seamlessly connect with laboratory systems for efficient test results management.",
    image: "/images/service3.png",
  },
  {
    icon: <Shield className="w-8 h-8 text-slate-600" />,
    title: "Data Security",
    description:
      "Protect sensitive healthcare information with advanced security measures and compliance standards.",
    image: "/images/service4.png",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "Developing cutting-edge solutions for real healthcare challenges",
  },
  {
    title: "Security",
    description: "Prioritizing protection of sensitive healthcare data",
  },
  {
    title: "Accessibility",
    description: "Making healthcare management tools available to everyone",
  },
  {
    title: "Collaboration",
    description:
      "Creating a connected ecosystem for better healthcare delivery",
  },
];

const HomePage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollAmount = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensures it only runs on the client
    const scrollContainer = featuresRef.current;
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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/bg.jpg" // You'll need to add this image to your public folder
          alt="Healthcare professionals"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90" />

        {/* Optional Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 max-w-7xl mx-auto">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-white text-5xl font-bold leading-tight">
              Transform Healthcare Management with CuraSync
            </h1>
            <p className="text-gray-100 text-xl">
              An all-in-one solution that empowers healthcare providers and
              improves patient care through innovative digital tools and
              seamless integration.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Features
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Transforming Healthcare Through Innovation
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Founded with a vision to revolutionize healthcare management,
              CuraSync emerged from a deep understanding of the challenges faced
              by healthcare providers and patients.
            </p>
            <p className="text-gray-600 text-lg">
              Our platform brings together expertise in healthcare, technology,
              and user experience design to create a unified solution that
              addresses real-world healthcare challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Comprehensive Healthcare Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose CuraSync?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                All-in-One Solution
              </h3>
              <p className="text-gray-600">
                Integrate all your healthcare management needs in a single,
                unified platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Customizable Platform
              </h3>
              <p className="text-gray-600">
                Adapt the system to your specific healthcare facility&apos;s
                requirements and workflows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Access round-the-clock technical support and training for your
                team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
