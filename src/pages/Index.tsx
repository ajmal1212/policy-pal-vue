
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InsuranceCategories from '../components/InsuranceCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InsuranceCategories />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
