import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Home, Star } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Properties Sold",
    description: "Successfully completed transactions"
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Families",
    description: "Satisfied customers across Rourkela"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Trusted expertise in real estate"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    description: "Average rating from our clients"
  }
]

const values = [
  {
    title: "Luxury Redefined",
    description: "We specialize in premium waterfront properties and luxury homes that exceed expectations."
  },
  {
    title: "Local Expertise",
    description: "Deep knowledge of Rourkela's real estate market with insights into the best neighborhoods."
  },
  {
    title: "Transparent Process",
    description: "Complete transparency in all transactions with no hidden costs or surprises."
  },
  {
    title: "Personalized Service",
    description: "Tailored solutions that match your unique requirements and lifestyle preferences."
  }
]

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            About Atlantis
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Partner in
            <span className="text-gradient-atlantis block mt-2">Premium Real Estate</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Atlantis has been the premier choice for luxury real estate in Rourkela, 
            specializing in waterfront properties and premium homes that define sophisticated living.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Redefining Luxury Living in Odisha
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Atlantis stands at the forefront of Rourkela's real estate landscape, offering an 
                exclusive portfolio of waterfront villas, modern apartments, and premium bungalows. 
                Our commitment to excellence has made us the most trusted name in luxury real estate.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that a home is more than just a property—it's where life's most 
                precious moments unfold. That's why we go beyond traditional real estate services 
                to ensure every client finds not just a house, but their perfect sanctuary.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-atlantis-lg">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                alt="Luxury waterfront property in Rourkela"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-atlantis-lg p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-atlantis rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-atlantis rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-atlantis">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="font-semibold text-gray-900">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
