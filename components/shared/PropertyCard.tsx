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
      "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300",
      "bg-white rounded-3xl",
      className
    )}>
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
        />

        {/* Status Badge */}
        <Badge
          className={cn(
            "absolute top-4 left-4 font-medium rounded-full px-3 py-1",
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
          className="absolute top-4 right-4 bg-white/95 text-gray-800 border-white/30 rounded-full px-3 py-1"
        >
          {property.type}
        </Badge>

        {/* Always Visible Quick Action */}
        <div className="absolute bottom-4 right-4">
          <Button
            size="sm"
            className="bg-white/90 text-gray-900 hover:bg-white rounded-full px-4 py-2 shadow-lg"
          >
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
        </div>
      </div>

      <CardContent className="p-5 space-y-3">
        {/* Price and Title Row */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-all">
            {property.title}
          </h3>
          <p className="text-xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <p className="text-sm">{property.location}</p>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl text-gray-700 text-sm">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1 text-blue-500" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-blue-500" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1 text-blue-500" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mt-1">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs text-gray-600 border-gray-200 rounded-full px-2 py-0"
            >
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs text-gray-600 border-gray-200 rounded-full px-2 py-0"
            >
              +{property.features.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button
          className="w-full bg-gradient-atlantis hover:opacity-90 text-white rounded-xl shadow-md"
        >
          View Property
        </Button>
      </CardContent>
    </Card>
  )
}
