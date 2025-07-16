import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApproachSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const approachItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate approach cards
      const approachCards = approachItemsRef.current?.querySelectorAll('.approach-card');
      if (approachCards) {
        gsap.fromTo(approachCards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: approachItemsRef.current,
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

  const approaches = [
    {
      number: '01',
      title: 'Sprints',
      description: 'Fast, focused engagements to explore, test, or move a critical piece forward—without getting bogged down. Tightly scoped, clearly defined, and built to create momentum. You\'ll walk away with answers, direction, and something real to build on.'
    },
    {
      number: '02',
      title: 'Projects',
      description: 'End-to-end design support for a product, brand, or web experience—with a defined scope and measurable outcomes. We lead from brief to build, aligning teams, shaping the vision, and driving toward a result you can launch with confidence.'
    },
    {
      number: '03',
      title: 'Partnerships',
      description: 'For companies that need more than a vendor—they want a design partner. We embed with your team, stay close to the work, and evolve alongside the business. The result is consistency, speed, and strategic lift as you grow.'
    }
  ];

  return (
    <section ref={sectionRef} id="approach" className="section-padding bg-border/30">
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
            <span className="text-caption text-secondary">(03)</span>
          </motion.div>
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="heading-section text-primary mb-8"
            >
              • Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-body text-secondary max-w-3xl"
            >
              Teams are different. Needs shift. And not every engagement looks the same. 
              That's why we shape our approach around how you work—and what you're trying to achieve. 
              Then we help you move it forward.
            </motion.p>
          </div>
        </div>

        {/* Approach Cards */}
        <div ref={approachItemsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.number}
              className="approach-card bg-background p-8 lg:p-12 group cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <span className="text-caption text-secondary font-mono">
                  ({approach.number})
                </span>
              </div>
              <h3 className="font-playfair text-2xl font-medium text-primary mb-6 group-hover:text-secondary transition-smooth">
                {approach.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-8">
                {approach.description}
              </p>
              <motion.div
                className="flex items-center text-secondary opacity-0 group-hover:opacity-100 transition-smooth"
                whileHover={{ x: 10 }}
              >
                <span className="text-xs uppercase tracking-wider mr-3">Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="font-playfair text-xl text-secondary italic max-w-3xl mx-auto">
            "Every engagement is different. Our approach isn't—disciplined, intentional, 
            and with a rhythm that keeps things moving."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;