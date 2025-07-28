"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl("Hi! I'm interested in your properties. Can you help me?"), '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Message */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-atlantis-lg p-4 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Atlantis Real Estate</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-atlantis"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-gray-700 text-sm mb-3">
            Hi there! 👋 Looking for your dream property? We're here to help!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="sm"
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Start Chat
          </Button>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="lg"
          className={cn(
            "w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-atlantis-lg",
            "transition-all duration-300 hover:scale-110",
            isExpanded && "bg-green-600"
          )}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </div>
    </div>
  )
}
