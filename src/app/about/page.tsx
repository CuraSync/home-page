"use client";

import React from "react";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen relative mt-10">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center blur-[8px]"
            style={{
              backgroundImage: 'url("/images/stethoscope.jpeg")',
            }}
          />

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100" />

          {/* Medical pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%230066cc' fill-opacity='0.1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Subtle blue overlay */}
          <div className="absolute inset-0 bg-blue-100/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-blue-500">CuraSync</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Transforming healthcare through innovative digital solutions
            </p>
          </section>

          {/* Our Story */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Our <span className="text-blue-500">Story</span>
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <p className="text-gray-700 mb-4">
                Founded with a vision to revolutionize healthcare management,
                CuraSync emerged from a deep understanding of the challenges
                faced by patients and healthcare providers in managing chronic
                conditions.
              </p>
              <p className="text-gray-700">
                Our journey began when we recognized the need for a unified
                platform that could seamlessly connect all stakeholders in the
                healthcare ecosystem while maintaining the highest standards of
                security and privacy.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our <span className="text-blue-500">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We continuously strive to develop cutting-edge solutions that
                  address real healthcare challenges and improve patient
                  outcomes.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Security
                </h3>
                <p className="text-gray-700">
                  We prioritize the protection of sensitive healthcare data
                  through robust security measures and compliance with
                  international standards.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Accessibility
                </h3>
                <p className="text-gray-700">
                  We believe in making healthcare management tools accessible to
                  everyone, regardless of their technical expertise.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Collaboration
                </h3>
                <p className="text-gray-700">
                  We foster meaningful partnerships between patients, healthcare
                  providers, and other stakeholders to create a connected
                  healthcare ecosystem.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our <span className="text-blue-500">Team</span>
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <p className="text-gray-700 mb-4">
                Our diverse team brings together expertise in healthcare,
                technology, and user experience design. We are united by our
                passion for improving healthcare delivery and patient outcomes.
              </p>
              <p className="text-gray-700">
                With backgrounds spanning medical practice, software
                development, data security, and healthcare administration, we
                understand the complexities of the healthcare system and are
                committed to creating solutions that make a real difference.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Want to learn more about CuraSync or join our mission to transform
              healthcare? We'd love to hear from you.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
