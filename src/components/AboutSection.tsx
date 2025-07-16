import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const flowingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate principle cards
      const principles = principlesRef.current?.querySelectorAll('.principle-card');
      if (principles) {
        gsap.fromTo(principles,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: principlesRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate flowing text
      const flowingWords = flowingTextRef.current?.querySelectorAll('.flowing-word');
      if (flowingWords) {
        gsap.fromTo(flowingWords,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: flowingTextRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      number: '01',
      title: 'Embrace Complexity',
      description: 'We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world.'
    },
    {
      number: '02',
      title: 'Insights Before Ideation',
      description: 'We begin every engagement with a deep understanding of your users and goals, letting insights shape ideas that connect and push business forward.'
    },
    {
      number: '03',
      title: 'Partners, Not Hired Hands',
      description: 'We work side-by-side with your team, sharing a commitment to your success and building solutions together.'
    },
    {
      number: '04',
      title: 'Beauty with Purpose',
      description: 'We craft visually stunning designs that serve a strategic intent, merging aesthetic excellence with functional impact.'
    }
  ];

  const flowingText = `Startups. Scale-ups. New bets. Big shifts. We work with teams navigating what's next—launching, evolving, rebuilding. No two challenges are the same, but most share the same ambition. Move with purpose and don't waste time getting there. This is how we show up, every time. Where do we start?`;
  
  const words = flowingText.split(' ');

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-background">
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
            <span className="text-caption text-secondary">(04)</span>
          </motion.div>
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="heading-section text-primary mb-8"
            >
              • About us
            </motion.h2>
          </div>
        </div>

        {/* Principles Grid */}
        <div ref={principlesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              className="principle-card group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <span className="text-caption text-secondary font-mono">
                  ({principle.number})
                </span>
              </div>
              <h3 className="font-playfair text-xl font-medium text-primary mb-4 group-hover:text-secondary transition-smooth">
                {principle.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Flowing Text Section */}
        <div ref={flowingTextRef} className="max-w-5xl mx-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-medium text-primary leading-relaxed">
            {words.map((word, index) => (
              <span key={index} className="flowing-word inline-block mr-3 md:mr-4">
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-background px-8 py-4 rounded-none font-medium transition-smooth hover:bg-accent-hover"
          >
            Contact us
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="relative mt-24 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;