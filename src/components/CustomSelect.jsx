import React from "react";
import Select from "react-select";

const CustomSelect = ({ width, placeholder, options, multiValues }) => {
  return (
    <Select
      isMulti={multiValues}
      isClearable={true}
      placeholder={placeholder}
      options={options}
      styles={{
        control: (provided) => ({
          ...provided,
          minWidth: width, // Adjust the width as needed
          fontSize: ".9rem",
        }),
        option: (provided) => ({
          ...provided,
          fontSize: ".9rem", // Adjust the font size as needed
        }),
      }}
    />
  );
};

export default CustomSelect;

// Reusable CustomSelect Component for all the select dropdown 
