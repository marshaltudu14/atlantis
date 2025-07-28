"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/shared/PropertyCard"
import { ChevronLeft, ChevronRight, Grid, List } from "lucide-react"
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
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  // Filter properties based on active filter
  const filteredProperties = properties.filter(property => {
    if (activeFilter === "all") return true
    return property.status === activeFilter || property.type === activeFilter
  })

  // Paginate properties
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)
  const currentProperties = filteredProperties.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Featured Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Your
            <span className="text-gradient-atlantis block mt-2">Perfect Home</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium properties in Rourkela's most desirable locations. 
            From luxury waterfront villas to modern apartments, find your ideal living space.
          </p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveFilter(option.value)
                  setCurrentPage(0) // Reset to first page when filter changes
                }}
                className={cn(
                  "transition-atlantis",
                  activeFilter === option.value
                    ? "bg-gradient-atlantis text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {option.label}
              </Button>
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
        <div className={cn(
          "grid gap-8 mb-12",
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        )}>
          {currentProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              className={viewMode === "list" ? "max-w-none" : ""}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="transition-atlantis"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i)}
                  className={cn(
                    "w-10 h-10 p-0 transition-atlantis",
                    currentPage === i && "bg-gradient-atlantis text-white"
                  )}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="transition-atlantis"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-gold text-gray-800 hover:opacity-90 px-8 py-4 text-lg font-semibold transition-atlantis"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
