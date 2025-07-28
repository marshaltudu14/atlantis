"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays immediately when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video Background with Rounded Corners and White Border */}
      <div className="absolute inset-4 z-0 rounded-3xl overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero-section-videeo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main Headline */}
        <motion.h1
          className="mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <span className="block font-serif text-6xl sm:text-7xl lg:text-9xl font-light tracking-wider">
            ATLANTIS
          </span>
          <motion.span
            className="block font-display text-xl sm:text-2xl lg:text-3xl font-light mt-4 opacity-90 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            LUXURY REDEFINED
          </motion.span>
        </motion.h1>

        {/* Premium Search Bar */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto shadow-2xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* City Input (Fixed to Rourkela) */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3 font-sans">
                City
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
                <Input
                  type="text"
                  value="Rourkela"
                  readOnly
                  className="pl-12 pr-4 py-3 bg-gray-50 border-gray-200 text-gray-800 font-medium font-sans rounded-xl h-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Locality Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3 font-sans">
                Locality
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={cn(
                    "w-full px-4 py-3 pl-12 pr-12 text-left bg-gray-50 border border-gray-200 rounded-xl h-12",
                    "text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    "transition-all duration-200 font-sans hover:bg-gray-100"
                  )}
                >
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
                  {selectedLocality}
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </button>

                {isDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {localities.map((locality) => (
                      <button
                        key={locality}
                        onClick={() => {
                          setSelectedLocality(locality)
                          setIsDropdownOpen(false)
                        }}
                        className="w-full px-4 py-3 text-left text-gray-800 hover:bg-blue-50 transition-all duration-200 font-sans font-medium"
                      >
                        {locality}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Premium Search Button */}
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-gradient-atlantis hover:shadow-lg text-white px-8 py-3 h-12 transition-all duration-300 font-sans font-semibold rounded-xl shadow-lg hover:scale-105"
              >
                <Search className="h-5 w-5 mr-2" />
                Discover
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
