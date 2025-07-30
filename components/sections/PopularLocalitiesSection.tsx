"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const localities = [
  {
    name: "Koel Nagar",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Premium waterfront locality"
  },
  {
    name: "Civil Township",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Modern family community"
  },
  {
    name: "Panposh",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Executive residential area"
  },
  {
    name: "Sector 1",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Central business district"
  },
  {
    name: "Sector 2",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Modern residential hub"
  },
  {
    name: "Fertilizer Township",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Established community"
  }
];

export default function PopularLocalitiesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-4 sm:py-6 bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Popular
            </span>{" "}
            <span className="text-gray-900">Neighborhoods</span>
          </h2>
        </motion.div>

        {/* Shadcn Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {localities.map((locality, index) => (
              <CarouselItem 
                key={`${locality.name}-${index}`} 
                className={`pl-2 md:pl-4 ${isMobile ? 'basis-1/2' : 'basis-1/3'}`}
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  {/* Image */}
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <Image
                      src={locality.image}
                      alt={locality.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Location Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {locality.name}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {locality.description}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows - Hidden on Mobile */}
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-blue-300 transition-all duration-300" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-blue-300 transition-all duration-300" />
          </div>
        </Carousel>

        {/* View All Locations Button - Mobile Only */}
        {isMobile && (
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 rounded-xl px-6 py-2 font-medium"
            >
              <span>View All Locations</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
