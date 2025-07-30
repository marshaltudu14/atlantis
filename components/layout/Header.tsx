"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const logoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP animation for logo
  useEffect(() => {
    if (logoRef.current) {
      // Subtle floating animation
      gsap.to(logoRef.current, {
        y: -3,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })

      // Subtle glow effect on hover
      const logo = logoRef.current
      const handleMouseEnter = () => {
        gsap.to(logo, {
          textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          duration: 0.3,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(logo, {
          textShadow: "0 0 0px rgba(59, 130, 246, 0)",
          duration: 0.3,
          ease: "power2.out"
        })
      }

      logo.addEventListener('mouseenter', handleMouseEnter)
      logo.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        logo.removeEventListener('mouseenter', handleMouseEnter)
        logo.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <button
                ref={logoRef}
                onClick={() => scrollToSection("#hero")}
                className={`text-2xl lg:text-3xl font-playfair font-bold hover:scale-105 transition-all duration-300 ${
                  isScrolled
                    ? "text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text"
                    : "text-white drop-shadow-lg"
                }`}
              >
                ATLANTIS
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-atlantis transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </nav>

            {/* Desktop Contact Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  onClick={() => window.open("tel:+919876543210", "_self")}
                  variant="outline"
                  size="sm"
                  className={`border-2 transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      : "border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  onClick={() => window.open("https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20Atlantis%20properties", "_blank")}
                  className="bg-gradient-atlantis hover:shadow-lg text-white transition-all duration-300 hover:scale-105"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 right-4 left-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6">
                {/* Navigation Links */}
                <nav className="space-y-4 mb-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Button
                      onClick={() => {
                        window.open("tel:+919876543210", "_self")
                        setIsMobileMenuOpen(false)
                      }}
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Button
                      onClick={() => {
                        window.open("https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20Atlantis%20properties", "_blank")
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full bg-gradient-atlantis hover:shadow-lg text-white transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
