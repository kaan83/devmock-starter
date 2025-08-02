import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center items-center space-x-2 mb-6">
            <span className="text-2xl">🚀</span>
            <h3 className="text-2xl font-bold">DevMock</h3>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Simplifying API testing for developers worldwide. Create powerful mock APIs in minutes, not hours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </motion.a>
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Join Waitlist
            </motion.a>
            <motion.a
              href="mailto:hello@devmock.com"
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </motion.a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 DevMock. Built with ❤️ for developers.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}