"use client"

import { motion } from "framer-motion"
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Complete
            <span className="text-gradient-royal block mt-2">Solutions</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Atlantis?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just another real estate company. Here&apos;s what makes us different.
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
            Let&apos;s discuss your real estate needs and find the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-atlantis hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
