import React from "react";

const AmountBtn = ({ amount, donationAmount, updateForm }) => {
  return (

    console.log(donationAmount),
    <button
      type="button"
      data-name={amount}
      className={`${
        donationAmount === amount ? "bg-orange-500 text-white" : "text-orange-500"
      } py-4 w-full rounded-md text-sm font-semibold text-gray-800 border border-orange-500`}
      onClick={(e) => {
        updateForm({ donationAmount: e.target.dataset.name });
        console.log(e.target.dataset.name);
      }}>
      {amount}
    </button>
  );
};

export default AmountBtn;
