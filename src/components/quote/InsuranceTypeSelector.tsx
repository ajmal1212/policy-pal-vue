
import React from 'react';
import { Calendar, User, Phone, Mail, MapPin, Car, Heart, Shield } from 'lucide-react';

interface InsuranceTypeSelectorProps {
  selectedType: string;
  onTypeChange: (value: string) => void;
}

const InsuranceTypeSelector: React.FC<InsuranceTypeSelectorProps> = ({
  selectedType,
  onTypeChange
}) => {
  const insuranceTypes = [
    { value: 'car', label: 'Car Insurance', icon: Car },
    { value: 'health', label: 'Health Insurance', icon: Heart },
    { value: 'life', label: 'Life Insurance', icon: User },
    { value: 'travel', label: 'Travel Insurance', icon: MapPin }
  ];

  return (
    <div>
      <label className="block text-lg font-semibold text-gray-900 mb-4">
        <Shield className="inline h-5 w-5 mr-2" />
        Select Insurance Type
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {insuranceTypes.map((type) => (
          <label key={type.value} className="relative">
            <input
              type="radio"
              name="insuranceType"
              value={type.value}
              checked={selectedType === type.value}
              onChange={(e) => onTypeChange(e.target.value)}
              className="sr-only"
            />
            <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedType === type.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <type.icon className={`h-8 w-8 mx-auto mb-2 ${
                selectedType === type.value ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <div className="text-sm font-medium text-center text-gray-900">
                {type.label}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InsuranceTypeSelector;
