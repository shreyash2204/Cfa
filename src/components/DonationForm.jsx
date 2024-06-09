import React, { useState } from "react";
import useMultiStepForm from "../CustomHook/useMultiStepForm";
import AmountForm from "../components/AmountForm";
import DetailForm from "../components/DetailForm";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    mobileNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    donationAmount: "100",
  });

  const changeHandler = (fields) => {
    setFormData({ ...formData, ...fields });
  };

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <AmountForm {...formData} updateForm={changeHandler} />,
      <DetailForm {...formData} updateForm={changeHandler} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Form Submitted");
    console.log(formData);
  };

  //   console.log(step);
  return (
    <div
      className="border-[1px] border-[#f47445] p-4 max-sm:w-full pt-2 rounded-lg">
      <form className="" onSubmit={onSubmit}>
        <div className="h-[30px] relative py-4 mb-4 flex items-center">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <div
            className="absolute text-sm font-medium text-gray-600 top-1/2 right-0 "
            style={{ transform: "translateY(-50%)" }}>
            Step {currentStepIndex + 1} of {steps.length}
          </div>
        </div>
        {step}
        <div className="mt-4 flex gap-2 justify-end"></div>
        <button className="w-full py-3 rounded-md bg-orange-500 text-white text-lg mt-4">
          {!isLastStep ? "Next" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
