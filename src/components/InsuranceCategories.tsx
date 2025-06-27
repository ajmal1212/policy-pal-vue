
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Heart, User, Plane, Home, Briefcase } from 'lucide-react';

const InsuranceCategories = () => {
  const categories = [
    {
      icon: Car,
      title: 'Car Insurance',
      description: 'Comprehensive coverage for your vehicle',
      link: '/car-insurance',
      color: 'bg-blue-500',
      savings: 'Save up to 85%'
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Medical coverage for you and your family',
      link: '/health-insurance',
      color: 'bg-green-500',
      savings: 'Save up to 70%'
    },
    {
      icon: User,
      title: 'Life Insurance',
      description: 'Financial security for your loved ones',
      link: '/life-insurance',
      color: 'bg-purple-500',
      savings: 'Save up to 60%'
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Protection for your journeys',
      link: '/travel-insurance',
      color: 'bg-orange-500',
      savings: 'Save up to 50%'
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description: 'Protect your home and belongings',
      link: '/home-insurance',
      color: 'bg-red-500',
      savings: 'Save up to 65%'
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      description: 'Coverage for your business needs',
      link: '/business-insurance',
      color: 'bg-indigo-500',
      savings: 'Save up to 75%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Insurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare quotes from leading insurance companies and find the perfect policy for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {category.savings}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                  Get Quote →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
