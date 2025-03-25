"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Factory,
  Globe2,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
  ShieldCheck,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AutoScroller from "@/components/autoscroll";
import { approvedBrands } from "../../constants/homeConstants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CTASection from "@/components/ctasection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stats = [
  {
    icon: Calendar,
    title: "Founded",
    value: "1995",
    description: "Over 25 years of dedication to high-quality mold making.",
  },
  {
    icon: Factory,
    title: "Yearly Production",
    value: "20,000 Sets",
    description: "Meeting global demands with state-of-the-art facilities.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    value: "15+ Countries",
    description: "Trusted by leading brands worldwide.",
  },
  {
    icon: Users,
    title: "Team",
    value: "500+ Professionals",
    description: "Driven by innovation and expertise.",
  },
];

const services = [
  {
    title: "Casting Mold",
    description: "Advanced solutions for casting molds",
    image: "images/stock/castingoven.png",
    link: "/casting",
  },
  {
    title: "SLA Printing and Prototyping",
    description: "SLA manufacturing and solutions for various industries",
    image: "images/stock/slamachine.png",
    link: "/sla",
  },
  {
    title: "SLM Printing and Prototyping",
    description: "State-of-the-art SLM Center",
    image: "images/stock/SLM2.png",
    link: "/slm",
  },
  {
    title: "CNC Machining",
    description: "Advanced solutions using CNC",
    image: "images/stock/CNCacmi.png",
    link: "/cnc",
  },
  {
    title: "Mold Testing",
    description: "SLA manufacturing and solutions for various industries",
    image: "images/stock/moldtesting.png",
    link: "/moldtesting",
  },
  {
    title: "2D and 3D Modeling",
    description: "Personalized 2D and 3D Modeling",
    image: "images/stock/ACMIstock1.png",
    link: "/services/quality",
  },
];

const milestones = [
  { year: "1995", event: "Company founded in Tangerang, Indonesia." },
  { year: "2020", event: "Established Indonesia's first SLM Center." },
  { year: "2021", event: "Introduced 3D metal printing for molds." },
  { year: "2025", event: "Planned expansion to 11 SLM machines." },
];

const fadeInUpStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

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
        {/* Background Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="images/factory-images/acmi3.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/65 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="max-w-2xl text-white p-4"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeOut",
              }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-300"
            >
              Your Trusted Partner in Advanced Mold Solutions
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6,
                duration: 1,
                ease: "easeOut",
              }}
              className="text-2xl md:text-xl mb-8 text-gray-400 font-bold"
            >
              With over 25 years of expertise, we lead the industry in
              delivering high-performance molds that drive innovation and
              efficiency.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <Button
                size="lg"
                variant="default"
                asChild
                className="bg-blue-600 hover:bg-blue-700 transition-all"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bouncing Chevron */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>
      {/* Quick Overview Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800">Quick Overview</h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3, duration: 0.6 },
                },
              }}
              className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed text-lg"
            >
              Since our founding in 1995 in Tangerang, Indonesia, PT. Anugrah
              Cipta Mould Indonesia has been dedicated to revolutionizing mold
              manufacturing. With over 25 years of excellence, we are recognized
              for precision, quality, and innovation, serving some of the
              world’s most renowned brands.
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2, duration: 0.6 },
                  }),
                }}
                custom={index}
                className="bg-glass bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <stat.icon className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Unique Selling Points Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              What Sets Us Apart
            </h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3, duration: 0.6 },
                },
              }}
              className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed text-lg"
            >
              Discover our key differentiators that have established us as a
              leader in the industry. From innovation to sustainability, we
              excel at delivering excellence.
            </motion.p>
          </motion.div>

          {/* Diagonal Layout Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
              className="bg-blue-600 text-white p-6 rounded-lg shadow-lg relative z-10 transform md:translate-y-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center">
                <ShieldCheck className="h-12 w-12 text-white mr-4" />
                <h3 className="text-xl font-semibold text-white">
                  Largest Mold Manufacturer
                </h3>
              </div>
              <p className="mt-2 text-sm">
                We are the largest mold manufacturer in Indonesia, trusted by
                top global brands.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
              className="bg-white p-6 rounded-lg shadow-lg relative z-20 transform md:-translate-y-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center">
                <Award className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-600">
                  SLM Innovation
                </h3>
              </div>
              <p className="mt-2 text-sm">
                First and largest SLM Center in Indonesia, revolutionizing mold
                production.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.6 },
                },
              }}
              className="bg-blue-600 text-white p-6 rounded-lg shadow-lg relative z-10 transform md:translate-y-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center">
                <TrendingUp className="h-12 w-12 text-white mr-4" />
                <h3 className="text-xl font-semibold text-white">
                  Sustainability
                </h3>
              </div>
              <p className="mt-2 text-sm">
                Environmentally friendly processes that reduce manpower and
                waste.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.6 },
                },
              }}
              className="bg-white p-6 rounded-lg shadow-lg relative z-20 transform md:-translate-y-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center">
                <Globe2 className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-600">
                  Global Reach
                </h3>
              </div>
              <p className="mt-2 text-sm">
                Trusted by over 15 countries worldwide for high-quality molds.
              </p>
            </motion.div>
          </div>

          {/* Background Shapes */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-20 pointer-events-none"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">
              Our Services
            </h2>
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
                <Card className="bg-white overflow-hidden h-[450px] w-full rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
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
                    <Button
                      variant="outline"
                      asChild
                      className="w-full bg-blue-500 hover:bg-blue-700 transition-colors"
                    >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">
              Our Cutting-Edge Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At ACMI, we leverage advanced technologies like SLM, SLA, and
              precision casting to deliver top-notch mold solutions. Our
              investment in innovation ensures efficiency and unparalleled
              quality for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Wrench className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SLM Technology</h3>
              <p className="text-gray-600">
                The first in Indonesia, our SLM (Selective Laser Melting)
                technology ensures precision and sustainability in mold
                production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive in-house testing for mold durability, ensuring
                superior quality and performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Advanced Facilities
              </h3>
              <p className="text-gray-600">
                Our state-of-the-art facilities feature over 100 units of
                advanced machinery to meet global demands.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">
              Our Partners
            </h2>
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
      <CTASection
        title="Let’s Build Together"
        description="Explore how our innovative solutions can elevate your manufacturing process."
        buttonText="Get in Touch"
        buttonLink="/get-started"
      />
      
    </div>
  );
}
