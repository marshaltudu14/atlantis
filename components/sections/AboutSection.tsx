"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

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
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            <span className="text-gradient-atlantis">Luxury Redefined</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans">
            15+ years of excellence in waterfront properties and premium homes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6">
                Redefining Luxury Living
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-6">
                Atlantis stands at the forefront of Rourkela&apos;s real estate landscape, offering an
                exclusive portfolio of waterfront villas, modern apartments, and premium bungalows.
              </p>
              <p className="text-gray-600 font-sans leading-relaxed">
                We understand that a home is more than just a property—it&apos;s where life&apos;s most
                precious moments unfold.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-serif font-semibold text-gray-900 text-lg">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image with Parallax */}
          <motion.div
            className="relative"
            style={{ y: 0 }}
            whileInView={{ y: [-20, 20] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            viewport={{ once: false }}
          >
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
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-atlantis-lg p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-gray-900">15+</p>
                  <p className="text-sm font-sans text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
