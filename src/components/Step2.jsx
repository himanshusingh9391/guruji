import React from 'react';

const Step2 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Address Information</h2>
      <div className="mb-4">
        <h5>Address</h5>
        <input
          type="text"
          name="address1"
          placeholder='Enter Address'
          value={formData.address1}
          onChange={handleChange}
          className={`w-full p-2 border ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.address1 && <p className="text-red-500">{errors.address1}</p>}
      </div>
      <div className="mb-4">
        <h5>City</h5>
        <input
          type="text"
          name="city"
          placeholder='Enter CityName'
          value={formData.city}
          onChange={handleChange}
          className={`w-full p-2 border-2 rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.city && <p className="text-red-500">{errors.city}</p>}
      </div>
      <div className="mb-4">
        <h5>State</h5>
        <input
          type="text"
          name="state"
          placeholder='Enter StateName'
          value={formData.state}
          onChange={handleChange}
          className={`w-full p-2 border-2 rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.state && <p className="text-red-500">{errors.state}</p>}
      </div>
      <div className="mb-4">
        <h5>Zip Code</h5>
        <input
          type="text"
          name="zip"
          placeholder='Enter ZipCode'
          value={formData.zip}
          onChange={handleChange}
          className={`w-full p-2 border-2 rounded-md ${errors.zip ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.zip && <p className="text-red-500">{errors.zip}</p>}
      </div>
    </div>
  );
};

export default Step2;
