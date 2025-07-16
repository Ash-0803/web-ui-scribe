import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroTextRef.current) {
      const words = heroTextRef.current.querySelectorAll('.word');
      
      gsap.fromTo(words, 
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  const heroText = "We're a design studio for product and brand teams who mean business.";
  const words = heroText.split(' ');

  const handleScrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Hero Text */}
          <h1 
            ref={heroTextRef}
            className="heading-hero text-primary mb-16 text-reveal"
          >
            {words.map((word, index) => (
              <span key={index} className="word inline-block mr-4 md:mr-6">
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-body text-secondary max-w-2xl mx-auto mb-12"
          >
            Global teams trust us to take on complex challenges, push creative boundaries, 
            and move fast when it matters most. We bring clarity, momentum, and a little heat to every project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToWork}
              className="bg-primary text-background px-8 py-4 rounded-none font-medium transition-smooth hover:bg-accent-hover"
            >
              View Our Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-primary text-primary px-8 py-4 rounded-none font-medium transition-smooth hover:bg-primary hover:text-background"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        onClick={handleScrollToWork}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-secondary uppercase tracking-wider mb-4 group-hover:text-primary transition-smooth">
            Scroll
          </span>
          <div className="w-px h-12 bg-secondary group-hover:bg-primary transition-smooth" />
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 right-8 w-2 h-2 bg-primary rounded-full opacity-30"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/3 left-8 w-3 h-3 bg-primary rounded-full opacity-20"
      />
    </section>
  );
};

export default Hero;