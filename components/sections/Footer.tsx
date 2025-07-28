"use client"

import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp
} from "lucide-react"
import { getPhoneUrl } from "@/lib/utils"

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
]

const services = [
  { label: "Buy Properties", href: "#" },
  { label: "Sell Properties", href: "#" },
  { label: "Rent Properties", href: "#" },
  { label: "Property Valuation", href: "#" },
  { label: "Legal Support", href: "#" }
]

const locations = [
  "Koel Nagar",
  "Civil Township",
  "Panposh",
  "Sector 1",
  "Sector 2",
  "Fertilizer Township"
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Atlantis</h3>
              <p className="text-gray-400 text-sm">
                Your Gateway to Dream Homes
              </p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For over 15 years, Atlantis has been the premier choice for luxury real estate 
              in Rourkela, specializing in waterfront properties and premium homes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Sector 1, Rourkela, Odisha 769001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href={getPhoneUrl()} 
                  className="text-sm text-gray-300 hover:text-white transition-atlantis"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@atlantisrealestate.com" 
                  className="text-sm text-gray-300 hover:text-white transition-atlantis"
                >
                  info@atlantisrealestate.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-atlantis text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-atlantis text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Locations We Serve</h4>
            <div className="space-y-2">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="inline-block text-gray-300 border border-gray-600 hover:border-gray-400 transition-atlantis mr-2 mb-2 px-3 py-1 rounded-full text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-atlantis"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Atlantis Real Estate. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-atlantis">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-atlantis">
                Terms of Service
              </a>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 p-0 rounded-full"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
