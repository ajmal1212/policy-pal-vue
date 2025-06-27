
import React from 'react';
import { User } from 'lucide-react';

interface LifeInsuranceFormProps {
  formData: {
    annualIncome: string;
    smokingStatus: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const LifeInsuranceForm: React.FC<LifeInsuranceFormProps> = ({
  formData,
  onInputChange
}) => {
  return (
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LifeInsuranceForm;
