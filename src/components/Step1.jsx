import React from 'react';

const Step1 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Personal Information</h2>
      <div className="mb-4">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          placeholder='Enter Name'
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border-2 rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border-2 rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <h5>Phone</h5>
        <input
          type="tel"
          name="phone"
          placeholder='Enter PhoneNumber'
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-2 border-2 rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Step1;
