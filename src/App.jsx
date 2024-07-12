import React from "react";
import MultiStepForm from "./components/Multiform";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4 flex justify-center mt-4">
        Multi-Step Form
      </h1>
      <MultiStepForm />
    </div>
  );
};

export default App;
