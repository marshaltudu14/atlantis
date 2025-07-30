"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/shared/PropertyCard"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"
import properties from "@/data/properties.json"

const filterOptions = [
  { label: "All Properties", value: "all" },
  { label: "For Sale", value: "For Sale" },
  { label: "For Rent", value: "For Rent" },
  { label: "Villa", value: "Villa" },
  { label: "Apartment", value: "Apartment" },
  { label: "Bungalow", value: "Bungalow" }
]

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 6
  const headerRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  // Filter properties based on active filter
  const filteredProperties = properties.filter(property => {
    if (activeFilter === "all") return true
    return property.status === activeFilter || property.type === activeFilter
  })

  // Display properties based on showAll state
  const displayedProperties = showAll
    ? filteredProperties
    : filteredProperties.slice(0, initialDisplayCount)

  const hasMoreProperties = filteredProperties.length > initialDisplayCount

  // GSAP animations on component mount
  useEffect(() => {
    const tl = gsap.timeline()

    // Animate header
    if (headerRef.current) {
      tl.fromTo(headerRef.current.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      )
    }

    // Animate tabs
    if (tabsRef.current) {
      tl.fromTo(tabsRef.current.children,
        {
          opacity: 0,
          y: 20,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.5"
      )
    }
  }, [])

  // GSAP animation for grid when filter changes
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      )
    }
  }, [activeFilter, displayedProperties])

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Minimal Style */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            <span className="text-gray-800">Curated</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
              Collection
            </span>
          </h2>
        </div>

        {/* Animated Filter Tabs */}
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option, index) => (
            <motion.button
              key={option.value}
              onClick={() => {
                setActiveFilter(option.value)
                setShowAll(false) // Reset to initial display when filter changes
              }}
              className={cn(
                "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden",
                "border-2 hover:scale-105 active:scale-95",
                activeFilter === option.value
                  ? "border-blue-600 text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                  : "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 bg-white hover:bg-blue-50"
              )}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background animation */}
              {activeFilter === option.value && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                  layoutId="activeTab"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-blue-400 opacity-0 rounded-full"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />

              <span className="relative z-10">{option.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Properties Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedProperties.map((property, index) => (
            <motion.div
              key={property.id}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* View All Properties Button - Visible on Desktop */}
        {hasMoreProperties && !showAll && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-full shadow-lg overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />

              {/* Button content */}
              <span className="relative z-10 flex items-center">
                View All Properties
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                initial={{ x: "-100%", skewX: -45 }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
