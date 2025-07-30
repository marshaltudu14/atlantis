"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
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
  const titleRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLSpanElement>(null)

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

  // GSAP reveal animations for title and subtitle (one-time page load)
  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      // Set initial state - hidden with clip-path
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        y: 30
      })

      // Create timeline for fire/blur reveal animation
      const tl = gsap.timeline({ delay: 1 })

      // Title reveal with fire effect
      tl.to(titleRef.current, {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        duration: 1.5,
        ease: "power4.out"
      })
      // Subtitle reveal with stagger
      .to(subtitleRef.current, {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.8") // Start 0.8 seconds before the previous animation ends

      // Add a subtle glow effect after reveal
      .to([titleRef.current, subtitleRef.current], {
        textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
      .to([titleRef.current, subtitleRef.current], {
        textShadow: "0 0 0px rgba(255, 255, 255, 0)",
        duration: 1,
        ease: "power2.out"
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section - Half Height */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Video Background with Rounded Corners Only */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="mb-8 leading-tight">
            <span
              ref={titleRef}
              className="block font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-wider"
            >
              ATLANTIS
            </span>
            <span
              ref={subtitleRef}
              className="block font-display text-lg sm:text-xl lg:text-2xl font-light mt-4 opacity-90 tracking-widest"
            >
              LUXURY REDEFINED
            </span>
          </h1>
        </div>
      </section>

      {/* Search Bar Anchor - Positioned at exact vertical center between video end and next section */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8" style={{
        transform: 'translateY(-50%)',
        marginBottom: '20px' // Reduced spacing for mobile
      }}>
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 sm:p-6 max-w-5xl mx-auto shadow-2xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Single Line Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            {/* City Input (Fixed to Rourkela) */}
            <div className="flex-1 min-w-0">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-4 w-4" />
                <Input
                  type="text"
                  value="Rourkela"
                  readOnly
                  placeholder="City"
                  className="pl-10 pr-4 py-3 bg-gray-50 border-gray-200 text-gray-800 font-medium font-sans rounded-xl h-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-gray-100 transition-colors"
                />
              </div>
            </div>

            {/* Locality Combobox */}
            <div className="flex-1 min-w-0">
              <Popover open={isComboboxOpen} onOpenChange={setIsComboboxOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={isComboboxOpen}
                    className={cn(
                      "w-full px-3 py-3 pl-10 pr-10 text-left bg-gray-50 border border-gray-200 rounded-xl h-12",
                      "text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      "transition-colors duration-200 font-sans justify-between"
                    )}
                  >
                    <div className="flex items-center min-w-0">
                      <MapPin className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{selectedLocality || "Select Locality"}</span>
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-400 flex-shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[var(--radix-popover-trigger-width)] p-0 z-[9999] bg-white border border-gray-200 shadow-lg"
                  align="start"
                  sideOffset={4}
                >
                  <Command className="bg-white">
                    <CommandInput
                      placeholder="Search locality..."
                      className="h-9 border-none focus:ring-0 bg-white text-gray-800"
                    />
                    <CommandList className="bg-white">
                      <CommandEmpty className="text-gray-500 py-2 text-center">No locality found.</CommandEmpty>
                      <CommandGroup className="bg-white">
                        {localities.map((locality) => (
                          <CommandItem
                            key={locality}
                            value={locality}
                            onSelect={(currentValue) => {
                              setSelectedLocality(currentValue === selectedLocality ? "" : currentValue)
                              setIsComboboxOpen(false)
                            }}
                            className="font-sans text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4 text-blue-500",
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

            {/* Enhanced Premium Search Button with GSAP */}
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-gradient-atlantis hover:shadow-lg text-white px-6 sm:px-8 py-3 h-12 transition-all duration-300 font-sans font-semibold rounded-xl shadow-lg hover:scale-105 w-full sm:w-auto group relative overflow-hidden"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.08,
                    duration: 0.3,
                    ease: "power2.out"
                  })
                  gsap.to(e.currentTarget.querySelector('.search-icon'), {
                    rotation: 360,
                    duration: 0.5,
                    ease: "power2.out"
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                  })
                  gsap.to(e.currentTarget.querySelector('.search-icon'), {
                    rotation: 0,
                    duration: 0.5,
                    ease: "power2.out"
                  })
                }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <Search className="h-4 w-4 mr-2 search-icon relative z-10" />
                <span className="relative z-10">Discover</span>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
