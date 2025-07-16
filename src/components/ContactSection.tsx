import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate form elements
      const formElements = formRef.current?.querySelectorAll('.form-element');
      if (formElements) {
        gsap.fromTo(formElements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-section text-primary mb-8">
              Thanks for reaching out!
            </h2>
            <p className="text-body text-secondary">
              We'll be in touch shortly to talk about your project and explore an opportunity to work together.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-section text-primary mb-8"
          >
            • Contact us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-secondary max-w-2xl mx-auto"
          >
            Have a project you'd like to talk about?
          </motion.p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              className="form-element"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-3">
                What is your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none transition-smooth placeholder-muted"
                placeholder="Enter your name"
              />
            </motion.div>

            <motion.div
              className="form-element"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-3">
                What is your email?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none transition-smooth placeholder-muted"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div
              className="form-element"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="company" className="block text-sm font-medium text-primary mb-3">
                What is the name of your company?
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none transition-smooth placeholder-muted"
                placeholder="Enter your company name"
              />
            </motion.div>

            <motion.div
              className="form-element"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="project" className="block text-sm font-medium text-primary mb-3">
                Tell us a bit more about your project
              </label>
              <textarea
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none transition-smooth placeholder-muted resize-none"
                placeholder="Describe your project..."
              />
            </motion.div>

            <motion.div
              className="form-element"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-background px-8 py-4 rounded-none font-medium transition-smooth hover:bg-accent-hover"
              >
                Send message
              </motion.button>
            </motion.div>
          </form>
        </div>

        {/* Decorative Bottom Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 border border-border rounded-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;