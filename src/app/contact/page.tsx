"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    postcode: "",
    phone: "",
    email: "",
    message: "",
    nda: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwKKaX4G_iLoyRuxaqecZ0I6KLG5KVETjsq8Lv3_XU-9ybxIiYrxP0QIoq5zBpEC1UK/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      // Since the response is opaque, you won't be able to access the response body
      setMessage(
        "Thank you for reaching out! We will get back to you shortly."
      );
      setIsError(false);
    } catch {
      setMessage(
        "Submission failed. Please try again later or contact support if the issue persists."
      );
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xl mx-auto">
          <div className="px-4 py-6 sm:p-8">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold mb-3">
                Get in <span className="text-emerald-400">touch</span>
              </h2>
              <p className="text-gray-600 text-base mb-6">
                Drop us a message if you have any questions or concerns.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Contact name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="street"
                      placeholder="Street"
                      className="md:col-span-2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={formData.street}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Postcode"
                      className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={formData.postcode}
                      onChange={handleInputChange}
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Phone"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Let's talk about your idea"
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  />

                  <div className="flex items-center space-x-3 p-1">
                    <input
                      type="checkbox"
                      id="nda"
                      name="nda"
                      className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      checked={formData.nda}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="nda" className="text-gray-600 text-sm">
                      I want to protect my data by signing an NDA
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg text-base font-semibold hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
              {message && (
                <p
                  className={`mt-4 text-sm p-3 rounded-lg shadow-md transition-all duration-300 ${
                    isError
                      ? "text-red-700 bg-red-100 border border-red-300"
                      : "text-green-700 bg-green-100 border border-green-300"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-white rounded-full shadow-md mb-3">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-base font-bold mb-2">HOTLINE</h3>
              <div className="space-y-2 w-full">
                <div className="text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Venul Thisera
                  </p>
                  <p className="text-gray-600 text-sm">(94) 78 550 0112</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Neth Botehju
                  </p>
                  <p className="text-gray-600 text-sm">(94) 77 206 4745</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col items-center h-full justify-center">
              <div className="p-2 bg-white rounded-full shadow-md mb-3">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-base font-bold mb-2">EMAIL</h3>
              <p className="text-gray-600 text-sm break-all text-center">
                curasync.info@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col items-center h-full justify-center">
              <div className="p-2 bg-white rounded-full shadow-md mb-3">
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-base font-bold mb-2">WORKING HOURS</h3>
              <p className="text-gray-600 text-sm">Mon-Fri 08:00-17:00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
