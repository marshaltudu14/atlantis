"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const localities = [
  "Koel Nagar",
  "Civil Township", 
  "Panposh",
  "Sector 1",
  "Sector 2",
  "Fertilizer Township"
]

export default function HeroSection() {
  const [selectedLocality, setSelectedLocality] = useState("Koel Nagar")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-section-videeo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Atlantis</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-light mt-2 opacity-90">
            Your Gateway to Dream Homes
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Discover luxury waterfront properties and premium real estate in the heart of Rourkela, Odisha
        </p>

        {/* Search Bar */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* City Input (Fixed to Rourkela) */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  value="Rourkela"
                  readOnly
                  className="pl-10 bg-white/90 border-white/20 text-gray-800 font-medium"
                />
              </div>
            </div>

            {/* Locality Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Locality
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={cn(
                    "w-full px-3 py-2 pl-10 pr-10 text-left bg-white/90 border border-white/20 rounded-md",
                    "text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500",
                    "transition-atlantis"
                  )}
                >
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  {selectedLocality}
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-atlantis-lg border border-gray-200 z-50">
                    {localities.map((locality) => (
                      <button
                        key={locality}
                        onClick={() => {
                          setSelectedLocality(locality)
                          setIsDropdownOpen(false)
                        }}
                        className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md transition-atlantis"
                      >
                        {locality}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button 
                size="lg"
                className="bg-gradient-atlantis hover:opacity-90 text-white px-8 py-3 h-auto transition-atlantis"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Your Home
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-gold text-gray-800 hover:opacity-90 px-8 py-4 text-lg font-semibold transition-atlantis"
          >
            Explore Properties
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-atlantis"
          >
            Contact Us
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
