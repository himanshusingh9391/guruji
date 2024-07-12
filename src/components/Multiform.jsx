import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Swal from "sweetalert2";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zip) newErrors.zip = "Zip Code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      localStorage.removeItem("formData");
      Swal.fire({
        icon: "success",
        title: "Form submitted!",
        text: "Your form data has been successfully submitted.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {currentStep === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 3 && <Step3 formData={formData} />}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="bg-gray-300 text-gray-700 p-2 rounded disabled:opacity-50"
          >
            Back
          </button>
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
