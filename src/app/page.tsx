'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  Factory,
  Globe2,
  Users,
  ArrowRight,
  Lightbulb,
  Target,
  Shield
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const partnerLogos = [
  "/images/logo/nike_logo.png",
  "/images/logo/newbalance_logo.png",
  "/images/logo/asics-logo.png",
  "/images/logo/adidas_logo.png",
  "/images/logo/lecoq_logo.png",
  "/images/logo/lacoste-logo.png",
  "/images/logo/dow_logo.png",
  
]

const stats = [
  {
    icon: Calendar,
    title: "Started Since",
    value: "1995",
    description: "Over 25 years of innovation in mold making solutions."
  },
  {
    icon: Factory,
    title: "Yearly Mold Production",
    value: "20,000 Sets",
    description: "State-of-the-art facilities for global production demands."
  },
  {
    icon: Globe2,
    title: "Countries Served",
    value: "15+ Countries",
    description: "Providing solutions to leading brands worldwide."
  },
  {
    icon: Users,
    title: "Team Size",
    value: "500+ Employees",
    description: "A dedicated workforce ensuring top-tier quality."
  }
];

const services = [
  {
    title: "Precision Mold Design",
    description: "Advanced CAD/CAM solutions for complex mold designs",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
    link: "/services/mold-design"
  },
  {
    title: "Custom Manufacturing",
    description: "State-of-the-art manufacturing for various industries",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop",
    link: "/services/manufacturing"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    link: "/services/quality"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries in mold technology"
  },
  {
    icon: Target,
    title: "Precision",
    description: "Unmatched accuracy in every detail"
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Excellence in every product"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <Image
          src="images/factory-images/acmi3.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl text-white p-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Partner in Advanced Mold Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              With over 25 years of expertise, we lead the industry in delivering high-performance molds that drive innovation and efficiency.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of mold solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={service.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading brands worldwide
            </p>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {partnerLogos.map((logo, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-4">
                    <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-32">
                      <img
                        src={logo}
                        alt={`Partner Logo ${index + 1}`}
                        className="w-24 h-24 object-contain"
                      />
                      {/* <div className="w-24 h-24 bg-gray-200 rounded-full" /> */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-100">Ready to Get Started?</h2>
            <p className="text-xl text-base-100 mb-8 opacity-90">
              Let's discuss how we can help with your mold manufacturing needs
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}