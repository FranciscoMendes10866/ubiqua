import React from "react";
import "./step.css";

type Props = {
  label: string;
  index: number;
  setCurrentStep: (arg: number) => void;
  selected: boolean;
};

const Step: React.FC<Props> = ({ label, index, setCurrentStep, selected }) => {
  return (
    <div className={"step-block " + (selected ? "selected" : "")}>
      <div className="circle-wrapper" onClick={() => setCurrentStep(index + 1)}>
        <div className="circle">{index + 1}</div>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Step;
