"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    message: "",
    nda: false,
  });

  // Map center coordinates (Hanoi coordinates) - Fix LatLng type error
  const position: [number, number] = [21.0285, 105.8542];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left side - Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-2">
              Get in <span className="text-emerald-400">touch</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Drop us a message if you have any questions or concerns.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Contact name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleInputChange}
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  className="col-span-2 p-3 border border-gray-200 rounded-lg"
                  value={formData.street}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  className="p-3 border border-gray-200 rounded-lg"
                  value={formData.postcode}
                  onChange={handleInputChange}
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Contact Phone"
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={formData.email}
                onChange={handleInputChange}
              />

              <textarea
                name="message"
                placeholder="Let's talk about your idea"
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={formData.message}
                onChange={handleInputChange}
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  className="mr-2"
                  checked={formData.nda}
                  onChange={handleInputChange}
                />
                <label htmlFor="nda" className="text-sm text-gray-600">
                  I want to protect my data by signing an NDA
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right side - Map */}
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              className="rounded-xl"
              scrollWheelZoom={true} // Enables scrolling
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>Our Location <br /> Hanoi, Vietnam</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-6">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <Phone className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">HOTLINE</h3>
            <p className="text-sm">(237) 681-812-255</p>
            <p className="text-sm">(237) 666-331-894</p>
          </div>

          <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
            <MapPin className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">LOCATION</h3>
            <p className="text-sm">Hà Nội</p>
            <p className="text-sm">TP HCM</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <Mail className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">EMAIL</h3>
            <p className="text-sm">fiatinessence@gmail.com</p>
            <p className="text-sm">dolor@gmail.com</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <Clock className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">WORKING HOURS</h3>
            <p className="text-sm">Mon-Fri 08:00-17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
