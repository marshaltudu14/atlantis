import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar: string
  property: string
  date: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300",
      "bg-white rounded-3xl h-full",
      className
    )}>
      <CardContent className="p-6 h-full flex flex-col">
        {/* Quote Icon */}
        <div className="mb-4">
          <div className="w-10 h-10 bg-gradient-atlantis rounded-full flex items-center justify-center">
            <Quote className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                i < testimonial.rating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              )}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600 font-medium">
            {testimonial.rating}.0
          </span>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 leading-relaxed mb-4 flex-grow">
          &quot;{testimonial.text}&quot;
        </blockquote>

        {/* Property Badge */}
        <div className="mb-4">
          <Badge
            variant="outline"
            className="text-xs text-blue-600 border-blue-200 bg-blue-50 rounded-full px-3 py-1"
          >
            {testimonial.property}
          </Badge>
        </div>

        {/* Author Info */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={60}
              height={60}
              className="w-15 h-15 rounded-full object-cover ring-2 ring-gray-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-lg">
              {testimonial.name}
            </h4>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{testimonial.location}</span>
            </div>
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{new Date(testimonial.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50" />
      </CardContent>
    </Card>
  )
}
