"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, MapPin, ChevronDown, Check } from "lucide-react"
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
  const [isComboboxOpen, setIsComboboxOpen] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // YouTube-like progressive loading - start playing as soon as enough data is available
    const handleLoadStart = () => {
      // Video starts loading - no spinner, just let it stream
      console.log('Video loading started')
    }

    const handleProgress = () => {
      // Video is buffering - let it play progressively
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1)
        const duration = video.duration
        if (duration > 0) {
          const bufferedPercent = (bufferedEnd / duration) * 100
          console.log(`Video buffered: ${bufferedPercent.toFixed(1)}%`)
        }
      }
    }

    const handleCanPlay = () => {
      // Enough data to start playing - similar to YouTube
      setVideoReady(true)
      video.play().catch(console.error)
    }

    const handleWaiting = () => {
      // Video is waiting for more data - pause until buffered
      console.log('Video waiting for more data')
    }

    const handlePlaying = () => {
      // Video resumed playing after buffering
      console.log('Video playing')
    }

    // Add event listeners for progressive loading
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('progress', handleProgress)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('waiting', handleWaiting)
    video.addEventListener('playing', handlePlaying)

    return () => {
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('progress', handleProgress)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('waiting', handleWaiting)
      video.removeEventListener('playing', handlePlaying)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video Background with Rounded Corners Only */}
      <div className="absolute inset-0 z-0 rounded-b-[3rem] overflow-hidden">
        {/* Progressive Video Loading - YouTube Style */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/hero-section-videeo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle background for when video is loading */}
        {!videoReady && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-50" />
        )}

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
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto shadow-2xl border border-white/20 relative z-50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* City Input (Fixed to Rourkela) */}
            <div className="w-full lg:flex-1">
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

            {/* Locality Combobox */}
            <div className="w-full lg:flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3 font-sans">
                Locality
              </label>
              <Popover open={isComboboxOpen} onOpenChange={setIsComboboxOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={isComboboxOpen}
                    className={cn(
                      "w-full px-4 py-3 pl-12 pr-12 text-left bg-gray-50 border border-gray-200 rounded-xl h-12",
                      "text-gray-800 font-medium hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      "transition-all duration-200 font-sans justify-between"
                    )}
                  >
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                      {selectedLocality}
                    </div>
                    <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 z-[9999]" align="start">
                  <Command>
                    <CommandInput placeholder="Search locality..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No locality found.</CommandEmpty>
                      <CommandGroup>
                        {localities.map((locality) => (
                          <CommandItem
                            key={locality}
                            value={locality}
                            onSelect={(currentValue) => {
                              setSelectedLocality(currentValue === selectedLocality ? "" : currentValue)
                              setIsComboboxOpen(false)
                            }}
                            className="font-sans"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedLocality === locality ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {locality}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Premium Search Button */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-atlantis hover:shadow-lg text-white px-8 py-3 h-12 transition-all duration-300 font-sans font-semibold rounded-xl shadow-lg hover:scale-105 w-full lg:w-auto"
              >
                <Search className="h-5 w-5 mr-2" />
                Discover
              </Button>
            </div>
          </div>
        </motion.div>


      </motion.div>
    </section>
  )
}
