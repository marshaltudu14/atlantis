"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/shared/PropertyCard"
import { Grid, List, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 6

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

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            <span className="text-gradient-atlantis">Curated Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Premium properties in Rourkela&apos;s most desirable locations.
          </p>
        </motion.div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {filterOptions.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveFilter(option.value)
                    setShowAll(false) // Reset to initial display when filter changes
                  }}
                  className={cn(
                    "transition-all duration-300 shadow-sm hover:shadow-md",
                    activeFilter === option.value
                      ? "bg-gradient-atlantis text-white"
                      : "text-gray-600 hover:text-gray-900 hover:border-blue-300"
                  )}
                >
                  {option.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={cn(
                "transition-atlantis",
                viewMode === "grid" && "bg-gradient-atlantis text-white"
              )}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={cn(
                "transition-atlantis",
                viewMode === "list" && "bg-gradient-atlantis text-white"
              )}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        <motion.div
          className={cn(
            "grid gap-8 mb-12",
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {displayedProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard
                property={property}
                className={viewMode === "list" ? "max-w-none" : ""}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {hasMoreProperties && !showAll && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-gradient-atlantis hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-sans"
            >
              View More Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
