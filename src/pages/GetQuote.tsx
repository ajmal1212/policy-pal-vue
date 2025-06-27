
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InsuranceTypeSelector from '../components/quote/InsuranceTypeSelector';
import PersonalInformation from '../components/quote/PersonalInformation';
import CarInsuranceForm from '../components/quote/CarInsuranceForm';
import HealthInsuranceForm from '../components/quote/HealthInsuranceForm';
import LifeInsuranceForm from '../components/quote/LifeInsuranceForm';
import { useToast } from '@/hooks/use-toast';

const GetQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    sumInsuredPlan: '',
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

  // Initialize family member details when component mounts or insurance type changes
  useEffect(() => {
    if (formData.insuranceType === 'health' && formData.familyMemberDetails.length === 0) {
      const memberCount = parseInt(formData.familyMembers);
      const relations = ['Self', 'Spouse', 'Child 1', 'Child 2', 'Child 3', 'Child 4'];
      const newFamilyMemberDetails = Array.from({ length: memberCount }, (_, index) => ({
        name: '',
        dateOfBirth: '',
        gender: '',
        relation: relations[index] || `Member ${index + 1}`,
        medicalCondition: '',
        conditionDescription: ''
      }));
      
      setFormData(prev => ({
        ...prev,
        familyMemberDetails: newFamilyMemberDetails
      }));
    }
  }, [formData.insuranceType, formData.familyMembers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('https://n8n.codenetic.tech/webhook/get-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'quote-form'
        }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted!",
          description: "We'll get back to you with your personalized quote soon.",
        });
        
        // Optionally reset form or redirect
        console.log('Form submitted successfully');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quotes'}
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
