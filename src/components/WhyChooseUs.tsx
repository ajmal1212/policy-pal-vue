
import React from 'react';
import { Shield, Clock, Award, HeadphonesIcon, Calculator, FileText } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'IRDAI approved insurance web aggregator with 15+ years of experience'
    },
    {
      icon: Calculator,
      title: 'Best Prices',
      description: 'Compare quotes from 45+ insurers and save up to 85% on premiums'
    },
    {
      icon: Clock,
      title: 'Quick Process',
      description: 'Get instant quotes and buy policies online in just 2 minutes'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Expert assistance available round the clock for all your queries'
    },
    {
      icon: Award,
      title: 'Claims Support',
      description: 'Dedicated claims assistance to ensure hassle-free claim settlement'
    },
    {
      icon: FileText,
      title: 'Easy Renewals',
      description: 'Simple online renewal process with instant policy issuance'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose GoPocket?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most trusted insurance marketplace with millions of satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
