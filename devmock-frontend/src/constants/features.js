export const FEATURES = [
  {
    id: 'lightning-fast',
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Create mock endpoints in seconds with our intuitive interface. No complex configuration required.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'configurable',
    icon: '🔧',
    title: 'Highly Configurable',
    description: 'Customize response codes, headers, delays, and error rates to simulate real-world scenarios.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'analytics',
    icon: '📈',
    title: 'Request Analytics',
    description: 'Monitor API usage with detailed logs and analytics to understand traffic patterns.',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'dynamic',
    icon: '🎨',
    title: 'Dynamic Responses',
    description: 'Generate realistic test data with built-in faker integration for various data types.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'export',
    icon: '🚢',
    title: 'Export & Import',
    description: 'Seamlessly export to Postman collections or import existing API configurations.',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'collaboration',
    icon: '🔒',
    title: 'Team Collaboration',
    description: 'Share mock APIs with your team and collaborate on testing strategies.',
    color: 'from-pink-400 to-pink-600'
  }
];

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  card: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }
};