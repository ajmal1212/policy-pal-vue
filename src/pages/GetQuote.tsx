
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InsuranceTypeSelector from '../components/quote/InsuranceTypeSelector';
import PersonalInformation from '../components/quote/PersonalInformation';
import CarInsuranceForm from '../components/quote/CarInsuranceForm';
import HealthInsuranceForm from '../components/quote/HealthInsuranceForm';
import LifeInsuranceForm from '../components/quote/LifeInsuranceForm';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    insuranceType: 'car',
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    city: '',
    pincode: '',
    // Car insurance specific
    carMake: '',
    carModel: '',
    carYear: '',
    registrationNumber: '',
    // Health insurance specific
    familyMembers: '1',
    familyMemberDetails: [] as Array<{
      name: string;
      dateOfBirth: string;
      gender: string;
      relation: string;
      medicalCondition: string;
      conditionDescription: string;
    }>,
    // Life insurance specific
    annualIncome: '',
    smokingStatus: 'no'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'familyMembers') {
      // Reset family member details when changing number of members
      const memberCount = parseInt(value);
      const relations = ['Self', 'Spouse', 'Child 1', 'Child 2', 'Child 3', 'Child 4'];
      const newFamilyMemberDetails = Array.from({ length: memberCount }, (_, index) => ({
        name: '',
        dateOfBirth: '',
        gender: '',
        relation: relations[index] || `Member ${index + 1}`,
        medicalCondition: '',
        conditionDescription: ''
      }));
      
      setFormData({
        ...formData,
        [name]: value,
        familyMemberDetails: newFamilyMemberDetails
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFamilyMemberChange = (index: number, field: string, value: string) => {
    const updatedFamilyMembers = [...formData.familyMemberDetails];
    updatedFamilyMembers[index] = {
      ...updatedFamilyMembers[index],
      [field]: value
    };
    
    setFormData({
      ...formData,
      familyMemberDetails: updatedFamilyMembers
    });
  };

  const handleInsuranceTypeChange = (value: string) => {
    setFormData({
      ...formData,
      insuranceType: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8">
            <h1 className="text-3xl font-bold text-white mb-2">Get Insurance Quote</h1>
            <p className="text-blue-100">Fill in your details to get personalized insurance quotes</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Insurance Type Selection */}
            <InsuranceTypeSelector
              selectedType={formData.insuranceType}
              onTypeChange={handleInsuranceTypeChange}
            />

            {/* Personal Information - Only show for non-health insurance */}
            {formData.insuranceType !== 'health' && (
              <PersonalInformation
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {/* Insurance Specific Fields */}
            {formData.insuranceType === 'car' && (
              <CarInsuranceForm
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {formData.insuranceType === 'health' && (
              <HealthInsuranceForm
                formData={formData}
                onInputChange={handleInputChange}
                onFamilyMemberChange={handleFamilyMemberChange}
              />
            )}

            {formData.insuranceType === 'life' && (
              <LifeInsuranceForm
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            <div className="flex items-center justify-center pt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get Free Quotes
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetQuote;
