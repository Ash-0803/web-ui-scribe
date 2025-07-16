import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service items
      const serviceItems = servicesRef.current?.querySelectorAll('.service-item');
      if (serviceItems) {
        gsap.fromTo(serviceItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      number: '01',
      title: 'UX/UI Design',
      description: 'Digital product experiences that engage, convert, and keep users coming back. Every interface is crafted to bridge user needs with business goals—clear, functional, and shaped to raise the bar in your space.'
    },
    {
      number: '02',
      title: 'AI UX',
      description: 'AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.'
    },
    {
      number: '03',
      title: 'Digital Product Strategy',
      description: 'From first insight to first build, we help teams get clear on priorities, align fast, and move with purpose. When the stakes are high, clarity around what—and why—you\'re building makes all the difference.'
    },
    {
      number: '04',
      title: 'UX Research',
      description: 'We dig into real user behavior to uncover the patterns, needs, and moments that shape better products. It\'s how we turn assumptions into alignment—and decisions into outcomes.'
    },
    {
      number: '05',
      title: 'Design Systems',
      description: 'Scalable systems that bring consistency to design, efficiency to engineering, and alignment across teams. They speed up the work without watering down the craft.'
    },
    {
      number: '06',
      title: 'Visual Design',
      description: 'Brand systems that express who you are—and how you want to be seen. Great design builds trust, drives recall, and moves your story forward.'
    },
    {
      number: '07',
      title: 'Web Presence',
      description: 'High-performing websites that anchor your go-to-market efforts and create a foundation for growth. Built for clarity, speed, and impact—with a CMS your marketing team will actually love.'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-start mb-20">
          <motion.div
            className="section-number mr-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-caption text-secondary">(02)</span>
          </motion.div>
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="heading-section text-primary mb-8"
            >
              • Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-body text-secondary max-w-3xl"
            >
              Whatever we take on, whether it's a product, website, or brand, it's never just for show. 
              It's designed to work hard, deliver real value, and never coast on aesthetics.
            </motion.p>
          </div>
        </div>

        {/* Services List */}
        <div ref={servicesRef} className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="service-item group"
              whileHover={{ x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-8 md:gap-16 border-b border-border pb-12">
                <div className="text-caption text-secondary font-mono">
                  ({service.number})
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl md:text-3xl font-medium text-primary mb-6 group-hover:text-secondary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-body text-secondary max-w-4xl">
                    {service.description}
                  </p>
                </div>
                <motion.div
                  className="hidden md:block text-secondary opacity-0 group-hover:opacity-100 transition-smooth"
                  whileHover={{ x: 10 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rotating Service Tags */}
        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: [-100, -2000] }}
            transition={{ 
              x: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                {services.map((service, index) => (
                  <span key={`${i}-${index}`} className="text-sm text-muted font-medium">
                    {service.title} •
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;