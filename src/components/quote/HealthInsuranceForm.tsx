
import React from 'react';
import { Heart, Shield } from 'lucide-react';

interface FamilyMember {
  name: string;
  dateOfBirth: string;
  gender: string;
  relation: string;
  medicalCondition: string;
  conditionDescription: string;
}

interface HealthInsuranceFormProps {
  formData: {
    sumInsuredPlan: string;
    familyMembers: string;
    familyMemberDetails: FamilyMember[];
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFamilyMemberChange: (index: number, field: string, value: string) => void;
}

const HealthInsuranceForm: React.FC<HealthInsuranceFormProps> = ({
  formData,
  onInputChange,
  onFamilyMemberChange
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        <Heart className="inline h-5 w-5 mr-2" />
        Health Details
      </h3>
      <div className="space-y-6">
        {/* Sum Insured Plan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Shield className="inline h-4 w-4 mr-2" />
            Sum Insured Plan *
          </label>
          <select
            name="sumInsuredPlan"
            value={formData.sumInsuredPlan}
            onChange={onInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select Sum Insured Plan</option>
            <option value="base-5-lac">Base Plan - ₹5 Lac Sum Insured</option>
            <option value="base-10-lac">Base Plan - ₹10 Lac Sum Insured</option>
            <option value="top-up-40-lac">Top Up Plan - ₹40 Lac</option>
            <option value="top-up-45-lac">Top Up Plan - ₹45 Lac</option>
            <option value="base-5-topup-45">Base ₹5 Lac + Top Up ₹45 Lac</option>
            <option value="base-10-topup-40">Base ₹10 Lac + Top Up ₹40 Lac</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Family Members *</label>
          <select
            name="familyMembers"
            value={formData.familyMembers}
            onChange={onInputChange}
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

        {/* Family Member Details - Always show when familyMemberDetails has members */}
        {formData.familyMemberDetails.length > 0 && (
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Family Members Information</h4>
            <div className="space-y-6">
              {formData.familyMemberDetails.map((member, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h5 className="text-sm font-medium text-gray-700 mb-3">{member.relation}</h5>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => onFamilyMemberChange(index, 'name', e.target.value)}
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
                        onChange={(e) => onFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select
                        value={member.gender}
                        onChange={(e) => onFamilyMemberChange(index, 'gender', e.target.value)}
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
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Any Pre-existing Medical Conditions? *</label>
                      <select
                        value={member.medicalCondition}
                        onChange={(e) => onFamilyMemberChange(index, 'medicalCondition', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                    
                    {member.medicalCondition === 'yes' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Describe the Medical Condition(s) *</label>
                        <textarea
                          value={member.conditionDescription}
                          onChange={(e) => onFamilyMemberChange(index, 'conditionDescription', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Please describe all medical conditions/illnesses in detail"
                          rows={3}
                          required
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthInsuranceForm;
