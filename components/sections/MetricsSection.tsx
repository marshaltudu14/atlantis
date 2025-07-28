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
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid - Stunning Visual Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-500 group hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Value */}
              <motion.p
                className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.p>

              {/* Label */}
              <p className="text-sm font-sans font-semibold text-gray-700 mb-1">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-xs font-sans text-gray-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
