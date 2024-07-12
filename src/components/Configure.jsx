import React from 'react';

const Configure = ({ formData }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Confirmation</h2>
      <div className="mb-4">
        <h3 className="font-bold">Personal Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Address Information</h3>
        <p>Address: {formData.address1}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip Code: {formData.zip}</p>
      </div>
    </div>
  );
};

export default Configure;
