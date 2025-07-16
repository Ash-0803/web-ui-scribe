import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate work cards
      const workCards = worksRef.current?.querySelectorAll('.work-card');
      if (workCards) {
        gsap.fromTo(workCards,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: worksRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Section number animation
      const sectionNumber = sectionRef.current?.querySelector('.section-number');
      if (sectionNumber) {
        gsap.fromTo(sectionNumber,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const works = [
    {
      title: 'Everstream Analytics',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      description: 'Data analytics platform redesign',
      tags: ['UX/UI Design', 'Product Strategy']
    },
    {
      title: 'Center',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Enterprise collaboration tool',
      tags: ['Design System', 'UX Research']
    },
    {
      title: 'Flashpoint',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      description: 'AI-powered security platform',
      tags: ['AI UX', 'Visual Design']
    },
    {
      title: 'Mirakl',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      description: 'Marketplace technology solution',
      tags: ['Web Presence', 'UX/UI Design']
    },
    {
      title: 'Intrepid',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      description: 'Travel platform experience',
      tags: ['Product Strategy', 'Visual Design']
    }
  ];

  return (
    <section ref={sectionRef} id="work" className="section-padding bg-background">
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
            <span className="text-caption text-secondary">(01)</span>
          </motion.div>
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="heading-section text-primary mb-8"
            >
              • Our Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-body text-secondary max-w-3xl"
            >
              Global teams trust us to take on complex challenges, push creative boundaries, 
              and move fast when it matters most. We bring clarity, momentum, and a little heat to every project.
            </motion.p>
          </div>
        </div>

        {/* Work Grid */}
        <div ref={worksRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              className="work-card group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full aspect-[4/3] object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-medium text-primary mb-2 group-hover:text-secondary transition-smooth">
                  {work.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-muted bg-border px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary text-primary px-8 py-4 rounded-none font-medium transition-smooth hover:bg-primary hover:text-background"
          >
            View All Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;