import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import FeaturedProperties from "@/components/sections/FeaturedProperties"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - The Grand Entrance */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section - The Living Room */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Featured Properties - The Gallery */}
      <section id="properties">
        <FeaturedProperties />
      </section>

      {/* Testimonials - The Guest Stories */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Services - The Study/Office */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Contact - The Communication Hub */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
