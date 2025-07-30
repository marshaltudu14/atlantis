"use client"

import { useInView } from "framer-motion"
import { Award, Users, Home, Star } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

const stats = [
  {
    icon: Home,
    value: 500,
    suffix: "+",
    label: "Properties Sold",
    description: "Successfully completed"
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Happy Families",
    description: "Satisfied customers"
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted expertise"
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Customer Rating",
    description: "Average rating"
  }
]

// Clock component with GSAP enhanced animations
interface StatType {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  description: string
}

function ClockMetric({ stat, index }: { stat: StatType; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      // GSAP Timeline for coordinated animations
      const tl = gsap.timeline()

      // Animate the container with a bounce effect
      tl.fromTo(ref.current,
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.15
        }
      )

      // Animate the icon with a spin and scale effect
      if (iconRef.current) {
        tl.fromTo(iconRef.current,
          { scale: 0, rotation: -360 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(2)"
          },
          "-=0.4"
        )
      }

      // Animate counter from 0 to target value with GSAP
      const counterObj = { value: 0 }
      tl.to(counterObj, {
        value: stat.value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          const currentValue = counterObj.value
          setCount(stat.value === 4.9 ?
            Math.round(currentValue * 10) / 10 :
            Math.floor(currentValue)
          )
        }
      }, "-=1.5")

      // Add micro interactions on hover
      const handleMouseEnter = () => {
        gsap.to(ref.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(iconRef.current, {
          rotation: 360,
          duration: 0.5,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(ref.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(iconRef.current, {
          rotation: 0,
          duration: 0.5,
          ease: "power2.out"
        })
      }

      const element = ref.current
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
        tl.kill()
      }
    }
  }, [isInView, stat.value, index])

  const circumference = 2 * Math.PI * 35 // radius = 35
  const progress = (count / stat.value) * circumference

  return (
    <div
      ref={ref}
      className="flex flex-col items-center cursor-pointer group"
    >
      {/* Clock Circle with Enhanced Styling */}
      <div className="relative w-24 h-24 mb-3">
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-sm group-hover:blur-md transition-all duration-300"></div>

        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="35"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-gray-200 group-hover:text-gray-300 transition-colors duration-300"
          />
          {/* Progress Circle with Gradient */}
          <circle
            ref={circleRef}
            cx="48"
            cy="48"
            r="35"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            className="transition-all duration-300 drop-shadow-sm"
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Icon with Enhanced Styling */}
        <div
          ref={iconRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <stat.icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Enhanced Clock Markers */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-3 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              style={{
                top: '4px',
                left: '50%',
                transformOrigin: '50% 44px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`
              }}
            />
          ))}
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Value Display */}
      <div
        ref={valueRef}
        className="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300"
      >
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-1">
          {stat.value === 4.9 ? count.toFixed(1) : Math.floor(count)}{stat.suffix}
        </div>
        <div className="text-sm font-medium text-gray-600 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {stat.label}
        </div>
        <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {stat.description}
        </div>
      </div>
    </div>
  )
}

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      // GSAP animation for the entire section
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        }
      )

      // Add subtle floating animation to the section
      gsap.to(sectionRef.current, {
        y: -5,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-8 relative z-10 overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <ClockMetric key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Subtle Connecting Lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 200">
            <path
              d="M 100 100 Q 300 50 500 100 T 900 100"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
