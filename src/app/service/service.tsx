"use client";

import React from 'react';
import { BarChart3, TestTube, FileText, Shield, Users, Pill } from 'lucide-react';

const HospitalServices = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Patient Management",
      description: "Streamline patient registration, appointments, and record-keeping for improved care coordination."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Electronic Health Records",
      description: "Secure and easily accessible digital health records for comprehensive patient history."
    },
    {
      icon: <TestTube className="w-8 h-8 text-purple-600" />,
      title: "Laboratory Integration",
      description: "Seamless integration with lab systems for quick and accurate test results management."
    },
    {
      icon: <Pill className="w-8 h-8 text-red-600" />,
      title: "Pharmacy Management",
      description: "Efficient inventory control and prescription management for the hospital pharmacy."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-600" />,
      title: "Analytics and Reporting",
      description: "Powerful analytics tools for data-driven decision making and performance monitoring."
    },
    {
      icon: <Shield className="w-8 h-8 text-slate-600" />,
      title: "Data Security",
      description: "Advanced security measures to protect sensitive patient information and ensure compliance."
    }
  ];

  const features = [
    "All-in-one integrated solution",
    "Customizable to fit your hospital's unique needs",
    "Regular updates with latest healthcare tech innovations",
    "User-friendly interface for staff and patients",
    "24/7 technical support and training",
    "Scalable for hospitals of all sizes"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Comprehensive Services</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          CuraSync offers an all-in-one solution for efficient hospital management,
          empowering healthcare providers and improving patient care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your hospital management?</h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Get Started with CuraSync
        </button>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mt-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="text-blue-600">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">Why Choose CuraSync?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="text-green-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalServices;