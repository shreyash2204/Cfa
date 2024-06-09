import React, { useEffect, useState } from "react";
import AmountBtn from "../components/AmountBtn.jsx";

const AmountForm = ({ donationAmount, updateForm }) => {
  const [customAmount, setCustomAmount] = useState("");
  // const [disabled, setDisabled] = useState(true);

  return (
    <div
      className="sm:grid-cols-[repeat(3,minmax(auto,_120px))] max-sm:grid-cols-[repeat(3,minmax(0,_1fr))]"
      style={{
        display: "grid",
        gap: "1rem",
        placeContent: "center",
      }}>
      <p className="text-sm col-span-full">Choose an amount to donate</p>

      <AmountBtn
        amount={"100"}
        donationAmount={donationAmount}
        updateForm={updateForm}
      />
      <AmountBtn
        amount={"250"}
        donationAmount={donationAmount}
        updateForm={updateForm}
      />
      <AmountBtn
        amount={"500"}
        donationAmount={donationAmount}
        updateForm={updateForm}
      />

      <p className="text-sm col-span-full">Or Custom Amout</p>
      <input
        type="text"
        id="customAmount"
        value={customAmount}
        className="w-full py-3 px-2 border-2 col-span-3 border-gray-300 rounded-md"
        onClick={(e) => {
          updateForm({ donationAmount: e.target.value });
        }}
        onChange={(e) => {
          setCustomAmount(e.target.value);
          updateForm({ donationAmount: e.target.value });
        }}
      />
    </div>
  );
};

export default AmountForm;
