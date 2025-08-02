import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Create mock endpoints in seconds with our intuitive interface. No complex configuration required.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🔧',
    title: 'Highly Configurable',
    description: 'Customize response codes, headers, delays, and error rates to simulate real-world scenarios.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: '📈',
    title: 'Request Analytics',
    description: 'Monitor API usage with detailed logs and analytics to understand traffic patterns.',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: '🎨',
    title: 'Dynamic Responses',
    description: 'Generate realistic test data with built-in faker integration for various data types.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: '🚢',
    title: 'Export & Import',
    description: 'Seamlessly export to Postman collections or import existing API configurations.',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    icon: '🔒',
    title: 'Team Collaboration',
    description: 'Share mock APIs with your team and collaborate on testing strategies.',
    color: 'from-pink-400 to-pink-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-blue-600"> Modern Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and test mock APIs. Built for developers who value simplicity and power.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to revolutionize your API testing?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of developers who trust DevMock for their API testing needs.
            </p>
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-colors inline-block"
            >
              Start Building Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}