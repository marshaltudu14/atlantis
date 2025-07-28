import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, TrendingUp, Key, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
  cta: string
}

interface ServiceCardProps {
  service: Service
  className?: string
}

const iconMap = {
  home: Home,
  "trending-up": TrendingUp,
  key: Key,
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home

  return (
    <Card className={cn(
      "group relative overflow-hidden border-0 shadow-atlantis hover:shadow-atlantis-lg transition-atlantis",
      "bg-white rounded-2xl h-full hover:-translate-y-2 duration-500",
      className
    )}>
      <CardContent className="p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-atlantis rounded-2xl flex items-center justify-center group-hover:scale-110 transition-atlantis">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-atlantis">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-gradient-atlantis hover:opacity-90 text-white group-hover:bg-gradient-gold group-hover:text-gray-800 transition-atlantis"
        >
          {service.cta}
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-atlantis" />
        </Button>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-75 transition-atlantis" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-gold-50 to-transparent rounded-tl-full opacity-30 group-hover:opacity-50 transition-atlantis" />
      </CardContent>
    </Card>
  )
}
