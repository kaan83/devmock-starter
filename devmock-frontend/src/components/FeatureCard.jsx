import { memo } from 'react';
import { motion } from 'framer-motion';

const FeatureCard = memo(({ feature, variants }) => {
  return (
    <motion.div
      variants={variants}
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
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;