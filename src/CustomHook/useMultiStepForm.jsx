import React, { useState } from "react";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i < steps.length - 1) {
        return i + 1;
      }
      return i;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i > 0) {
        return i - 1;
      }
      return i;
    });
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
