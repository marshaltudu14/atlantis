"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Crown, Shield, Star, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

// Value Card Component to fix React hooks issue
interface ValueCardProps {
  value: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    gradient: string
  }
  index: number
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const icon = iconRef.current
    const title = titleRef.current

    if (card && icon && title) {
      const handleMouseEnter = () => {
        const tl = gsap.timeline()

        tl.to(card, {
          scale: 1.05,
          y: -12,
          rotationY: 5,
          duration: 0.4,
          ease: "power2.out"
        })
        .to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
          ease: "power2.out"
        }, 0)
        .to(title, {
          x: 8,
          color: "#2563eb",
          duration: 0.3,
          ease: "power2.out"
        }, 0.1)
      }

      const handleMouseLeave = () => {
        const tl = gsap.timeline()

        tl.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "power2.out"
        })
        .to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        }, 0)
        .to(title, {
          x: 0,
          color: "#111827",
          duration: 0.3,
          ease: "power2.out"
        }, 0)
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="relative p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Icon */}
      <div
        ref={iconRef}
        className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
      >
        <value.icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h4 ref={titleRef} className="text-xl font-bold text-gray-900 mb-2 transition-all duration-300">
          {value.title}
        </h4>
        <p className="text-gray-600 leading-relaxed">
          {value.description}
        </p>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <ArrowRight className="w-5 h-5 text-blue-600" />
      </div>
    </motion.div>
  )
}

const values = [
  {
    title: "Luxury Redefined",
    description: "Premium waterfront properties and luxury homes that exceed expectations.",
    mobileDescription: "Premium waterfront properties & luxury homes.",
    icon: Crown,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "Local Expertise",
    description: "Deep knowledge of Rourkela's real estate market with insights into the best neighborhoods.",
    mobileDescription: "Deep knowledge of Rourkela's best neighborhoods.",
    icon: Star,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Transparent Process",
    description: "Complete transparency in all transactions with no hidden costs or surprises.",
    mobileDescription: "Complete transparency, no hidden costs.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Personalized Service",
    description: "Tailored solutions that match your unique requirements and lifestyle preferences.",
    mobileDescription: "Tailored solutions for your lifestyle.",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-600"
  }
]

const luxuryFeatures = [
  { icon: CheckCircle, text: "Waterfront Properties" },
  { icon: CheckCircle, text: "Premium Locations" },
  { icon: CheckCircle, text: "Luxury Amenities" },
  { icon: CheckCircle, text: "Expert Consultation" }
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced entrance animation
      const tl = gsap.timeline()

      // Header animation with stagger
      if (headerRef.current) {
        tl.fromTo(headerRef.current.children,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotationX: 45
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out"
          }
        )
      }

      // Content animation with advanced effects
      if (contentRef.current) {
        tl.fromTo(contentRef.current.children,
          {
            opacity: 0,
            x: -100,
            rotationY: 45
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
          },
          "-=0.5"
        )
      }

      // Image animation with 3D effect
      if (imageRef.current) {
        tl.fromTo(imageRef.current,
          {
            opacity: 0,
            x: 100,
            rotationY: -45,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
          },
          "-=0.8"
        )
      }

      // Features animation
      if (featuresRef.current) {
        tl.fromTo(featuresRef.current.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          },
          "-=0.3"
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 lg:mb-20"
          style={{ opacity }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Crown className="h-10 w-10 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Luxury Redefined
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            <span className="hidden sm:inline">15+ years of excellence in waterfront properties and premium homes.</span>
            <span className="sm:hidden">15+ years of luxury real estate excellence.</span>
          </p>
        </motion.div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Enhanced */}
          <motion.div
            ref={contentRef}
            className="space-y-10"
            style={{ y }}
          >
            {/* Main Content Block */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Redefining Luxury Living
              </h3>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 font-sans leading-relaxed">
                  Atlantis stands at the forefront of Rourkela&apos;s real estate landscape, offering an
                  exclusive portfolio of waterfront villas, modern apartments, and premium bungalows.
                </p>
                <p className="text-lg text-gray-600 font-sans leading-relaxed hidden sm:block">
                  We understand that a home is more than just a property—it&apos;s where life&apos;s most
                  precious moments unfold.
                </p>
                <p className="text-lg text-gray-600 font-sans leading-relaxed sm:hidden">
                  Your dream home awaits with Atlantis.
                </p>
              </div>

              {/* Luxury Features List */}
              <div ref={featuresRef} className="grid grid-cols-2 gap-3 mt-8">
                {luxuryFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <feature.icon className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Values Grid with Advanced GSAP Interactions */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {values.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Right Image with Advanced Parallax */}
          <motion.div
            ref={imageRef}
            className="relative lg:ml-8"
            style={{ y }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                  alt="Luxury waterfront property in Rourkela"
                  width={600}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Crown className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Floating Stats Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 max-w-xs backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 10px 25px rgba(245, 158, 11, 0.3)",
                      "0 15px 35px rgba(245, 158, 11, 0.5)",
                      "0 10px 25px rgba(245, 158, 11, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award className="h-7 w-7 text-white" />
                </motion.div>
                <div>
                  <motion.p
                    className="text-3xl font-serif font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    15+
                  </motion.p>
                  <p className="text-sm font-sans text-gray-600 font-medium">Years of Excellence</p>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Properties Sold</span>
                  <span className="font-semibold text-gray-900">500+</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Happy Families</span>
                  <span className="font-semibold text-gray-900">1000+</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
