"use client"

import { motion } from "framer-motion"
import { Award, Users, Home, Star } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Properties Sold",
    description: "Successfully completed"
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Families",
    description: "Satisfied customers"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Trusted expertise"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    description: "Average rating"
  }
]

export default function MetricsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid - Minimal Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl sm:text-4xl font-serif font-bold text-blue-600 mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-sans text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
