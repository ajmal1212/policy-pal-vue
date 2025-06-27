
import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, MapPin, Car, Heart, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    medicalHistory: 'no',
    familyMemberDetails: [] as Array<{
      name: string;
      dateOfBirth: string;
      gender: string;
      relation: string;
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
        relation: relations[index] || `Member ${index + 1}`
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
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                <Shield className="inline h-5 w-5 mr-2" />
                Select Insurance Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: 'car', label: 'Car Insurance', icon: Car },
                  { value: 'health', label: 'Health Insurance', icon: Heart },
                  { value: 'life', label: 'Life Insurance', icon: User },
                  { value: 'travel', label: 'Travel Insurance', icon: MapPin }
                ].map((type) => (
                  <label key={type.value} className="relative">
                    <input
                      type="radio"
                      name="insuranceType"
                      value={type.value}
                      checked={formData.insuranceType === type.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      formData.insuranceType === type.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <type.icon className={`h-8 w-8 mx-auto mb-2 ${
                        formData.insuranceType === type.value ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <div className="text-sm font-medium text-center text-gray-900">
                        {type.label}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <User className="inline h-5 w-5 mr-2" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter PIN code"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Insurance Specific Fields */}
            {formData.insuranceType === 'car' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Car className="inline h-5 w-5 mr-2" />
                  Vehicle Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Car Make *</label>
                    <select
                      name="carMake"
                      value={formData.carMake}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Make</option>
                      <option value="maruti">Maruti Suzuki</option>
                      <option value="hyundai">Hyundai</option>
                      <option value="tata">Tata</option>
                      <option value="mahindra">Mahindra</option>
                      <option value="honda">Honda</option>
                      <option value="toyota">Toyota</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Car Model *</label>
                    <input
                      type="text"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter car model"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturing Year *</label>
                    <select
                      name="carYear"
                      value={formData.carYear}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Year</option>
                      {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
                    <input
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter registration number"
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.insuranceType === 'health' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Heart className="inline h-5 w-5 mr-2" />
                  Health Details
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Family Members *</label>
                      <select
                        name="familyMembers"
                        value={formData.familyMembers}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="1">Self (1 Member)</option>
                        <option value="2">Self + Spouse (2 Members)</option>
                        <option value="3">Self + Spouse + 1 Child (3 Members)</option>
                        <option value="4">Self + Spouse + 2 Children (4 Members)</option>
                        <option value="5">Self + Spouse + 3 Children (5 Members)</option>
                        <option value="6">Self + Spouse + 4 Children (6 Members)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Any Pre-existing Medical Conditions? *</label>
                      <select
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                  </div>

                  {/* Family Member Details */}
                  {formData.familyMemberDetails.length > 0 && (
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 mb-4">Family Members Information</h4>
                      <div className="space-y-6">
                        {formData.familyMemberDetails.map((member, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                            <h5 className="text-sm font-medium text-gray-700 mb-3">{member.relation}</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                  type="text"
                                  value={member.name}
                                  onChange={(e) => handleFamilyMemberChange(index, 'name', e.target.value)}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Enter full name"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                                <input
                                  type="date"
                                  value={member.dateOfBirth}
                                  onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                                <select
                                  value={member.gender}
                                  onChange={(e) => handleFamilyMemberChange(index, 'gender', e.target.value)}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  required
                                >
                                  <option value="">Select Gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {formData.insuranceType === 'life' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <User className="inline h-5 w-5 mr-2" />
                  Life Insurance Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income *</label>
                    <select
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Income Range</option>
                      <option value="below-3">Below ₹3 Lakhs</option>
                      <option value="3-5">₹3-5 Lakhs</option>
                      <option value="5-10">₹5-10 Lakhs</option>
                      <option value="10-25">₹10-25 Lakhs</option>
                      <option value="25-50">₹25-50 Lakhs</option>
                      <option value="above-50">Above ₹50 Lakhs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Do you smoke? *</label>
                    <select
                      name="smokingStatus"
                      value={formData.smokingStatus}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
              </div>
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
