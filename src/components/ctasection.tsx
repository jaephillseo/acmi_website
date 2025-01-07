import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Get Started?",
  description = "Let's discuss how we can help with your mold manufacturing needs.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 opacity-90">
            {description}
          </p>
          <Button size="lg" variant="default" asChild className="bg-white text-blue-800 hover:bg-gray-200 transition-all">
            <Link href={buttonLink}>
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Add Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none ">
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
