import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/shared/ServiceCard"
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react"
import services from "@/data/services.json"

const whyChooseUs = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "All transactions are secure with complete legal documentation and transparency."
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Streamlined processes to help you buy, sell, or rent properties faster."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "15+ years of experience with deep knowledge of Rourkela's real estate market."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated support throughout your real estate journey with customized solutions."
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Real Estate
            <span className="text-gradient-atlantis block mt-2">Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From finding your dream home to selling your property at the best price, 
            we provide comprehensive real estate services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Atlantis?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another real estate company. Here's what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-atlantis rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-atlantis">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-8">
              Our Simple 4-Step Process
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Understand your requirements" },
                { step: "2", title: "Search", desc: "Find matching properties" },
                { step: "3", title: "Visit", desc: "Property tours and inspections" },
                { step: "4", title: "Close", desc: "Complete documentation" }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="w-12 h-12 bg-gradient-atlantis rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  
                  {/* Arrow for desktop */}
                  {index < 3 && (
                    <ArrowRight className="hidden lg:block absolute top-6 -right-3 h-5 w-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your real estate needs and find the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-atlantis hover:opacity-90 text-white px-8 py-4 text-lg font-semibold transition-atlantis"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transition-atlantis"
            >
              View Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
