import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format price in Indian currency
export function formatPrice(price: string): string {
  return price.replace(/₹/, "₹ ")
}

// Format area with proper units
export function formatArea(area: string): string {
  return area
}

// Generate WhatsApp URL
export function getWhatsAppUrl(message: string = "Hi, I'm interested in Atlantis properties"): string {
  const phoneNumber = "919876543210" // Replace with actual number
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

// Generate phone call URL
export function getPhoneUrl(): string {
  return "tel:+919876543210" // Replace with actual number
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Check if element is in viewport
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
