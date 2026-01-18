function Steps({ currentStep }) {
  return (
    <div>
      <Step stepNumber="1" currentStep={currentStep} />
      <Step stepNumber="2" currentStep={currentStep} />
      <Step stepNumber="3" currentStep={currentStep} />
    </div>
  );
}

function Step({ stepNumber, currentStep }) {
  return (
    <button className={`step ${currentStep >= stepNumber ? "active" : ""}`}>
      {stepNumber}
    </button>
  );
}

export default Steps;
