"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Users,
  Award
} from "lucide-react"
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    value: "+91 98765 43210",
    action: "Call Now",
    href: getPhoneUrl(),
    color: "bg-gradient-atlantis"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat for instant responses",
    value: "+91 98765 43210",
    action: "Chat Now",
    href: getWhatsAppUrl(),
    color: "bg-gradient-emerald"
  }
]

const officeInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "Sector 1, Rourkela, Odisha 769001"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM"
  },
  {
    icon: Phone,
    title: "Office Phone",
    value: "+91 98765 43210"
  }
]

const socialProof = [
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience"
  }
]

export default function ContactSection() {

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2 font-sans">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Connect With
            <span className="text-gradient-royal block mt-2">Atlantis</span>
          </h2>
        </motion.div>

        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group border-0 shadow-atlantis hover:shadow-atlantis-lg transition-atlantis">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-atlantis`}>
                  <method.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 font-sans">
                  {method.description}
                </p>
                <p className="font-semibold text-gray-900 text-lg mb-6 font-sans">
                  {method.value}
                </p>
                <Button
                  asChild
                  size="lg"
                  className={`w-full ${method.color} hover:opacity-90 text-white transition-atlantis font-sans font-medium`}
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Information */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-atlantis">
            <CardContent className="p-8">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                Visit Our Office
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {officeInfo.map((info, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-atlantis rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-serif font-semibold text-gray-900 mb-2 text-lg">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 font-sans">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-atlantis">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
                Trusted by Thousands
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {socialProof.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-royal rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 font-serif">
                      {item.value}
                    </p>
                    <p className="text-gray-600 font-sans">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-gradient-atlantis rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Our team is available for urgent property inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-atlantis"
            >
              <a href={getPhoneUrl()}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-atlantis"
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
