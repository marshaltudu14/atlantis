"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Home, Building2, Info, Phone, Search } from "lucide-react"
import { gsap } from "gsap"

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoaded, setIsLoaded] = useState(false)

  const navItems = useMemo(() => [
    {
      id: "hero",
      name: "Home",
      icon: Home,
      href: "#hero",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: "properties",
      name: "Properties",
      icon: Building2,
      href: "#properties",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      id: "localities",
      name: "Areas",
      icon: Search,
      href: "#localities",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: "about",
      name: "About",
      icon: Info,
      href: "#about",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: "contact",
      name: "Contact",
      icon: Phone,
      href: "#contact",
      gradient: "from-pink-500 to-pink-600"
    }
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + window.innerHeight / 2 // Use middle of viewport for better accuracy

      let currentSection = "hero" // Default to hero

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          // Check if the middle of viewport is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i]
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Initial call to set correct section on load
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  // GSAP initial page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)

      // GSAP animation for initial load
      const tl = gsap.timeline()

      // Animate the bottom navigation container
      tl.fromTo(".bottom-nav-container",
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      )

      // Animate each nav item with stagger
      .fromTo(".nav-item",
        {
          y: 50,
          opacity: 0,
          scale: 0.5,
          rotation: 180
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.4"
      )

      // Animate floating WhatsApp button
      .fromTo(".floating-whatsapp",
        {
          scale: 0,
          rotation: -180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "-=0.2"
      )
    }, 1500) // Delay to let page content load first

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string, id: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(id)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Background with blur effect */}
      <div className="bottom-nav-container bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-2xl" style={{ opacity: isLoaded ? 1 : 0 }}>
        <div className="px-4 py-2">
          <nav className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className="nav-item relative flex flex-col items-center justify-center p-2 min-w-0 flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ opacity: isLoaded ? 1 : 0 }}
                >
                  {/* Active indicator background */}
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-10`}
                      layoutId="activeBackground"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                  
                  {/* Icon container */}
                  <motion.div
                    className={`relative p-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${item.gradient} shadow-lg` 
                        : "bg-gray-100"
                    }`}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      rotateY: isActive ? 360 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`} 
                    />
                    
                    {/* Pulse effect for active item */}
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-30`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Label */}
                  <motion.span
                    className={`text-xs font-medium mt-1 transition-all duration-300 ${
                      isActive 
                        ? "text-transparent bg-gradient-to-r bg-clip-text font-semibold" + ` ${item.gradient}`
                        : "text-gray-600"
                    }`}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      fontWeight: isActive ? 600 : 500
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div
                      className={`absolute -top-1 w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>
        </div>
        
        {/* Bottom safe area for devices with home indicator */}
        <div className="h-safe-area-inset-bottom bg-white/95" />
      </div>
      
      {/* Floating action elements */}
      <div className="absolute -top-6 right-4 flex space-x-2">
        {/* WhatsApp floating button */}
        <motion.button
          onClick={() => window.open("https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20Atlantis%20properties", "_blank")}
          className="floating-whatsapp w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

export default BottomNavigation
