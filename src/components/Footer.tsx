import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-background py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-4xl md:text-5xl font-medium mb-6">
                BlinkPath
              </h3>
              <p className="text-background/70 text-lg max-w-xl">
                We're a design studio for product and brand teams who mean business. 
                Global teams trust us to take on complex challenges and move fast when it matters most.
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-background/50 text-sm uppercase tracking-wider mb-8">
                Navigation
              </h4>
              <nav className="space-y-4">
                {footerLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="block text-background/70 hover:text-background transition-smooth"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <p className="text-background/50 text-sm">
                © {currentYear} BlinkPath. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <button className="text-background/50 hover:text-background transition-smooth text-sm">
                  Privacy Policy
                </button>
                <button className="text-background/50 hover:text-background transition-smooth text-sm">
                  Terms of Service
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['LinkedIn', 'Twitter', 'Dribbble'].map((social, index) => (
                <motion.button
                  key={social}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center text-background/50 hover:text-background hover:border-background/40 transition-smooth"
                >
                  <span className="text-xs">{social[0]}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animated Element */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <div className="w-8 h-8 border border-background/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-background/30 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;