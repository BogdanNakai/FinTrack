import React, { useState } from "react";
import Select from "react-select";

const SelectFilter = ({ options, titlePlaceholder, }) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: "44px",
      width: "100%",
      borderRadius: "12px",
      paddingRight: "12px",
      border: "2px solid #e2e8f0",
    }),
    options: () => ({}),
  };

  return (
    <Select
      options={options}
      placeholder={titlePlaceholder}
      classNamePrefix="custom-select"
      styles={customStyles}
    />
  );
};

export default SelectFilter;
