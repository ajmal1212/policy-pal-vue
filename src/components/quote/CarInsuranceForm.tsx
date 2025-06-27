
import React from 'react';
import { Car } from 'lucide-react';

interface CarInsuranceFormProps {
  formData: {
    carMake: string;
    carModel: string;
    carYear: string;
    registrationNumber: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CarInsuranceForm: React.FC<CarInsuranceFormProps> = ({
  formData,
  onInputChange
}) => {
  return (
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter registration number"
          />
        </div>
      </div>
    </div>
  );
};

export default CarInsuranceForm;
