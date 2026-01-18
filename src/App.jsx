import Steps from "./steps.jsx";
import StepUpdater from "./step-updater.jsx";
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  function stepUpdater(updatedStep) {
    if (updatedStep < 1 || updatedStep > 3) {
      return;
    }
    setCurrentStep(updatedStep);
  }

  return (
    <div className="parent">
      Progress Step
      <Steps currentStep={currentStep} />
      <div className="step-name">current step</div>
      <StepUpdater stepUpdater={stepUpdater} currentStep={currentStep} />
    </div>
  );
}

export default App;
