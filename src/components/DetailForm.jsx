import React from "react";

export const DetailInput = ({ type, label, id, dataValue, updateForm }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[12px] ">
        {label} <span className="text-red-600 text-xs">*</span>
      </label>
      <input
        type={type}
        id={id}
        value={dataValue}
        className="w-full px-2 py-3 border-2 border-gray-300 rounded-md text-sm"
        onChange={(e) => {
          updateForm({ [id]: e.target.value });
        }}
      />
    </div>
  );
};

const DetailForm = ({
  fullName,
  dateOfBirth,
  email,
  mobileNo,
  address,
  city,
  state,
  country,
  pinCode,
  updateForm,
}) => {
  return (
    <div
      className="sm:grid-cols-[repeat(2,minmax(auto,_200px))] max-sm:grid-cols-[repeat(1,minmax(0,_1fr))]"
      style={{
        display: "grid",
        gap: "1rem 2rem",
        // marginBottom: "2rem",
        placeContent: "center",
      }}>
      {/* <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="text-[12px] ">
          Full Name <span className="text-red-600 text-xs">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          className="w-full p-2 border-2 border-gray-300 rounded-md"
          onChange={(e) => updateForm({ fullName: e.target.value })}
        />
      </div> */}
      <DetailInput
        type="text"
        id="fullName"
        dataValue={fullName}
        label="Full Name"
        updateForm={updateForm}
      />
      <DetailInput
        type="date"
        id="dateOfBirth"
        dataValue={dateOfBirth}
        label="Date of Birth"
        updateForm={updateForm}
      />
      <DetailInput
        type="email"
        id="email"
        dataValue={email}
        label="Email"
        updateForm={updateForm}
      />
      <DetailInput
        type="text"
        id="mobileNo"
        dataValue={mobileNo}
        label="Mobile Number"
        updateForm={updateForm}
      />
      <div className="col-span-full">
        <DetailInput
          type="text"
          id="address"
          dataValue={address}
          label="Address"
          updateForm={updateForm}
        />
      </div>
      <DetailInput
        type="text"
        id="pinCode"
        dataValue={pinCode}
        label="Pin Code"
        updateForm={updateForm}
      />
      <DetailInput
        type="text"
        id="city"
        dataValue={city}
        label="City"
        updateForm={updateForm}
      />
      <DetailInput
        type="text"
        id="state"
        dataValue={state}
        label="State"
        updateForm={updateForm}
      />
      <DetailInput
        type="text"
        id="country"
        dataValue={country}
        label="Country"
        updateForm={updateForm}
      />
    </div>
  );
};

export default DetailForm;
