import React, { useState } from "react";
import Select from "react-select";


const MySelect = ({ options, titlePlaceholder}) => {



  return (
    <Select
      options={options}
      placeholder={titlePlaceholder}
      classNamePrefix="custom-select"
    />
  );
};

export default MySelect
 