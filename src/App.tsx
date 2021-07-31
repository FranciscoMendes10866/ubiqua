import React, { useState } from "react";
import "./App.css";

import { StepNavigation } from "./components";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const labelList = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="container">
      <StepNavigation
        labelList={labelList}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div>
        {currentStep !== 1 && (
          <button onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </button>
        )}
        {currentStep !== 5 && (
          <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default App;
