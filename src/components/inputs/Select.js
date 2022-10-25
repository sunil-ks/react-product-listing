import React from "react";

const Select = ({ id, name, options, handleChange }) => (
  <select
    id={id}
    name={name}
    onChange={handleChange}
    className="form-select form-select-sm"
    aria-label="Dropdown"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
