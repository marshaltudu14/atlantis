import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, MapPin, Eye } from "lucide-react"
import { cn, formatPrice } from "@/lib/utils"

interface Property {
  id: number
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  features: string[]
  type: string
  status: string
}

interface PropertyCardProps {
  property: Property
  className?: string
}

export default function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <Card className={cn(
      "group overflow-hidden border-0 shadow-atlantis hover:shadow-atlantis-lg transition-atlantis",
      "bg-white rounded-2xl",
      className
    )}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-atlantis duration-500"
        />
        
        {/* Status Badge */}
        <Badge 
          className={cn(
            "absolute top-4 left-4 font-medium",
            property.status === "For Sale" 
              ? "bg-green-500 hover:bg-green-600 text-white" 
              : "bg-blue-500 hover:bg-blue-600 text-white"
          )}
        >
          {property.status}
        </Badge>

        {/* Type Badge */}
        <Badge 
          variant="outline"
          className="absolute top-4 right-4 bg-white/90 text-gray-800 border-white/20"
        >
          {property.type}
        </Badge>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-atlantis flex items-center justify-center">
          <Button 
            size="sm"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-900">
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-atlantis">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-sm">{property.location}</p>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="text-xs text-gray-600 border-gray-200"
            >
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge 
              variant="outline"
              className="text-xs text-gray-600 border-gray-200"
            >
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-gradient-atlantis hover:opacity-90 text-white transition-atlantis"
        >
          View Property
        </Button>
      </CardContent>
    </Card>
  )
}
