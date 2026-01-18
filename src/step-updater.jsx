function StepUpdater({ stepUpdater, currentStep }) {
  return (
    <div>
      <button className="updater" onClick={() => stepUpdater(currentStep - 1)}>
        Previous
      </button>
      <button className="updater" onClick={() => stepUpdater(currentStep + 1)}>
        Next
      </button>
    </div>
  );
}

export default StepUpdater;
