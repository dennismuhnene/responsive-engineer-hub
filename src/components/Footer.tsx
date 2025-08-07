import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-warm-dark via-sage/10 to-warm-dark/80 text-warm-light border-t border-sage/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-warm-light mb-4">
              Contact Information
            </h3>
            <div className="space-y-3 text-sm text-warm-light/80">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage" />
                <a
                  href="mailto:jseph.namu@gmail.com"
                  className="hover:text-sage transition-colors"
                >
                  jseph.namu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage" />
                <a
                  href="tel:+254 702 096799"
                  className="hover:text-sage transition-colors"
                >
                  +254 702 096799
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-sage" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>

          {/* Professional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-warm-light mb-4">
              Professional
            </h3>
            <div className="space-y-3 text-sm text-warm-light/80">
              <a
                href="#about"
                className="block hover:text-sage transition-colors"
              >
                About Me
              </a>
              <a
                href="#experience"
                className="block hover:text-sage transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block hover:text-sage transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block hover:text-sage transition-colors"
              >
                Skills
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-warm-light mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/joseph-muriithi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-warm-light/10 hover:bg-sage/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-warm-light/80 group-hover:text-sage transition-colors" />
              </a>
              <a
                href="https://github.com/joseph-muriithi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-warm-light/10 hover:bg-sage/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-warm-light/80 group-hover:text-sage transition-colors" />
              </a>
              <a
                href="mailto:joseph.muriithi@example.com"
                className="p-2 rounded-lg bg-warm-light/10 hover:bg-sage/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-warm-light/80 group-hover:text-sage transition-colors" />
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-warm-light/20">
              <p className="text-sm text-warm-light/60">
                Available for technical project collaborations
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-warm-light/20 text-center"
        >
          <p className="text-sm text-warm-light/60">
            © {new Date().getFullYear()} Joseph Muriithi, G.Eng. All rights
            reserved.
          </p>
          <p className="text-warm-light/40 mt-2 text-sm">
            Graduate Civil & Structural Engineer
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
