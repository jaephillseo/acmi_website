'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  Factory,
  Globe2,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import AutoScroller from '@/components/autoscroll';
import {
  approvedBrands
} from "../../constants/homeConstants";
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



const stats = [
  {
    icon: Calendar,
    title: "Founded",
    value: "1995",
    description: "Over 25 years of dedication to high-quality mold making."
  },
  {
    icon: Factory,
    title: "Yearly Production",
    value: "20,000 Sets",
    description: "Meeting global demands with state-of-the-art facilities."
  },
  {
    icon: Globe2,
    title: "Global Reach",
    value: "15+ Countries",
    description: "Trusted by leading brands worldwide."
  },
  {
    icon: Users,
    title: "Team",
    value: "500+ Professionals",
    description: "Driven by innovation and expertise."
  },
  {
    icon: Award,
    title: "SLM Innovation",
    value: "First in Indonesia",
    description: "Pioneering 3D metal printing for molds."
  },
  {
    icon: TrendingUp,
    title: "Capacity",
    value: "14,400 Sets Annually",
    description: "Ensuring rapid and efficient production timelines."
  },
  {
    icon: Award,
    title: "SLM Innovation",
    value: "First in Indonesia",
    description: "Pioneering 3D metal printing for molds."
  },
  {
    icon: TrendingUp,
    title: "Capacity",
    value: "14,400 Sets Annually",
    description: "Ensuring rapid and efficient production timelines."
  }
];

const services = [
  {
    title: "Casting Mold",
    description: "Advanced solutions for casting molds",
    image: "images/stock/castingoven.png",
    link: "/services/mold-design"
  },
  {
    title: "SLA Printing and Prototyping",
    description: "SLA manufacturing and solutions for various industries",
    image: "images/stock/slamachine.png",
    link: "/services/manufacturing"
  },
  {
    title: "SLM Printing and Prototyping",
    description: "State-of-the-art SLM Center",
    image: "images/stock/SLM2.png",
    link: "/services/quality"
  },
  {
    title: "Casting Mold",
    description: "Advanced solutions for casting molds",
    image: "images/stock/castingoven.png",
    link: "/services/mold-design"
  },
  {
    title: "SLA Printing and Prototyping",
    description: "SLA manufacturing and solutions for various industries",
    image: "images/stock/slamachine.png",
    link: "/services/manufacturing"
  },
  {
    title: "SLM Printing and Prototyping",
    description: "State-of-the-art SLM Center",
    image: "images/stock/SLM2.png",
    link: "/services/quality"
  }
];


export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone logos to allow seamless infinite scrolling
    const cloneLogos = () => {
      const logos = Array.from(carousel.children);
      logos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        carousel.appendChild(clone);
      });
    };

    cloneLogos();

    const scrollSpeed = 1; // Speed of scrolling
    const totalScrollWidth = carousel.scrollWidth / 2; // Halfway point for seamless scrolling

    const autoScroll = () => {
      carousel.scrollLeft += scrollSpeed;

      // Reset scroll position seamlessly
      if (carousel.scrollLeft >= totalScrollWidth) {
        carousel.scrollLeft = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(autoScroll as unknown as number);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/65 z-10" />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-300">
              Your Trusted Partner in Advanced Mold Solutions
            </h1>
            <h2 className="text-2xl md:text-xl mb-8 text-gray-400 font-bold">
              With over 25 years of expertise, we lead the industry in delivering high-performance molds that drive innovation and efficiency.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-gray-50">
        
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Overview</h2>
          </motion.div>

          {/* Brief Information Section */}
          <div className="container mx-auto px-4 py-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white/30 backdrop-blur-md shadow-lg p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-full w-full flex justify-end items-center opacity-10">
                <Image
                  src="images/stock/innovation.png"
                  alt="Innovation graphic"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl text-gray-700 font-bold leading-relaxed text-left">
                  Founded in 1995, PT. Anugrah Cipta Mould Indonesia started in Tangerang, Indonesia, with a vision to revolutionize mold manufacturing. Over the years, we've built a reputation for precision and quality, becoming a trusted partner for some of the world's leading brands.
                </h3>
                <h3 className="text-xl md:text-2xl text-gray-600 mt-6 leading-relaxed text-left">
                  In 2020, we proudly established Indonesia's first Selective Laser Melting (SLM) Center, showcasing our commitment to innovation. Today, we lead the industry with advanced manufacturing technologies that cater to a global clientele.
                </h3>
              </div>
            </motion.div>
          </div>

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
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
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
                <Card className="overflow-hidden h-[500px] w-full">
                  <div className="relative h-64">
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

       {/* Technology Section */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cutting-Edge Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At ACMI, we leverage advanced technologies like SLM, SLA, and precision casting to deliver top-notch mold solutions. Our investment in innovation ensures efficiency and unparalleled quality for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Wrench className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SLM Technology</h3>
              <p className="text-gray-600">
                The first in Indonesia, our SLM (Selective Laser Melting) technology ensures precision and sustainability in mold production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive in-house testing for mold durability, ensuring superior quality and performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Facilities</h3>
              <p className="text-gray-600">
                Our state-of-the-art facilities feature over 100 units of advanced machinery to meet global demands.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <strong className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading brands worldwide
            </strong>
          </motion.div>

          
          <div className="flex items-center justify-center mt-8">
            <AutoScroller images={approvedBrands} />
          </div>
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


