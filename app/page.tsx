import Header from "@/components/layout/Header"
import BottomNavigation from "@/components/layout/BottomNavigation"
import HeroSection from "@/components/sections/HeroSection"
import PopularLocalitiesSection from "@/components/sections/PopularLocalitiesSection"
import MetricsSection from "@/components/sections/MetricsSection"
import FeaturedProperties from "@/components/sections/FeaturedProperties"
import AboutSection from "@/components/sections/AboutSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
      {/* Hero Section - The Grand Entrance */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Popular Localities - The Neighborhood Guide */}
      <section id="localities">
        <PopularLocalitiesSection />
      </section>

      {/* Metrics Section - The Achievements */}
      <section id="metrics">
        <MetricsSection />
      </section>

      {/* Featured Properties - The Gallery */}
      <section id="properties">
        <FeaturedProperties />
      </section>

      {/* About Section - The Living Room */}
      <section id="about">
        <AboutSection />
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
    <BottomNavigation />
    </>
  );
}
