import React from "react";
import "./stepNavigation.css";

import Step from "../step";

type Props = {
  labelList: string[];
  currentStep: number;
  setCurrentStep: (arg: number) => void;
};

const StepNavigation: React.FC<Props> = ({
  labelList,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="step-wrapper">
      {labelList.map((el, i) => (
        <Step
          key={i}
          label={el}
          index={i}
          setCurrentStep={setCurrentStep}
          selected={currentStep === i + 1}
        />
      ))}
    </div>
  );
};

export default StepNavigation;
