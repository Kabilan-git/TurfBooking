import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 relative">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#d0f0d0_2px,_transparent_2px)] bg-[size:40px_40px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
          {/* Quick Links */}
          <div>
            <h3 className="text-green-600 font-bold text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Find Turf</li>
              <li className="cursor-pointer">Find Teams</li>
              <li className="cursor-pointer">My Account</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-green-600 font-bold text-lg mb-3">Support</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">Help Center</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Terms of Services</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-green-600 font-bold text-lg mb-3">
              Get In Touch
            </h3>

            <div className="space-y-3 text-gray-600">
              {/* ✅ Phone */}
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-green-600" />
                (480) 555-0103
              </p>

              {/* ✅ Address */}
              <p className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-green-600" />
                4517 Washington Ave. Manchester,
                <br />
                Kentucky 39495
              </p>

              {/* ✅ Email */}
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-green-600" />
                debra.holt@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-gray-700">
          <p className="text-sm">All Rights Reserved ©2025</p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm">Connect With Us</span>
            <div className="flex gap-4 text-green-600 cursor-pointer">
              {/* ✅ Social Icons */}
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
