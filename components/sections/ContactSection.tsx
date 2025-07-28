"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Building2,
  Shield,
  Crown
} from "lucide-react"
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils"

const contactMethods = [
  {
    icon: Phone,
    title: "Direct Line",
    subtitle: "Immediate Assistance",
    description: "Connect with our luxury property specialists for personalized consultation",
    value: "+91 98765 43210",
    action: "Call Now",
    href: getPhoneUrl(),
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    iconBg: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Instant Messaging",
    description: "Quick responses for all your luxury real estate inquiries",
    value: "+91 98765 43210",
    action: "Message Now",
    href: getWhatsAppUrl(),
    gradient: "from-emerald-600 via-green-700 to-teal-800",
    iconBg: "from-emerald-500 to-green-600"
  }
]

const officeDetails = [
  {
    icon: Building2,
    title: "Headquarters",
    value: "Atlantis Luxury Estates",
    subtitle: "Sector 1, Rourkela, Odisha 769001"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Saturday",
    subtitle: "9:00 AM - 7:00 PM IST"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@atlantis.com",
    subtitle: "24/7 Email Support"
  }
]

const luxuryFeatures = [
  {
    icon: Crown,
    title: "Premium Service",
    description: "Exclusive access to luxury properties"
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "15+ years of excellence in real estate"
  }
]

export default function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Crown className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Contact Atlantis
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-sans leading-relaxed">
            Experience unparalleled luxury in real estate. Our distinguished team awaits to curate your perfect property journey.
          </p>
        </motion.div>

        {/* Premium Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardContent className="p-8 lg:p-12 relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${method.iconBg} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-4 font-sans">
                        {method.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6 font-sans leading-relaxed">
                        {method.description}
                      </p>
                      <div className="space-y-4">
                        <p className="text-xl font-bold text-gray-900 font-sans">
                          {method.value}
                        </p>
                        <Button
                          asChild
                          size="lg"
                          className={`bg-gradient-to-r ${method.gradient} hover:shadow-xl text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                        >
                          <a href={method.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                            <method.icon className="h-5 w-5 mr-2" />
                            {method.action}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Office Information - Premium Design */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl mb-6 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Building2 className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                  Visit Our Headquarters
                </h3>
                <p className="text-lg text-gray-600 font-sans">
                  Experience luxury in person at our premium office location
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {officeDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <detail.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                      {detail.title}
                    </h4>
                    <p className="text-lg font-semibold text-blue-600 mb-1 font-sans">
                      {detail.value}
                    </p>
                    <p className="text-gray-600 font-sans text-sm">
                      {detail.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Luxury Features */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {luxuryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Premium CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <CardContent className="p-8 lg:p-12 text-center relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-6 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Crown className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl mb-8 opacity-90 font-sans leading-relaxed">
                Connect with our luxury property specialists for immediate assistance and personalized service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                >
                  <a href={getPhoneUrl()} className="inline-flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white border-2 border-green-400 hover:border-green-500 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                >
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
