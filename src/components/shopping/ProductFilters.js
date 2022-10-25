import React from "react";
import { useDispatch } from "react-redux";
import Select from "../inputs/Select";
import { filterProducts } from "../../redux/modules/shoppingSlice";
import { sizeOptions } from "../../utils" 

const ProductFilters = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const selectedDropdownValue = e.target.value;
    dispatch(filterProducts(selectedDropdownValue));
  };

  return (
    <Select
      id="sizes"
      name="sizes"
      options={sizeOptions}
      handleChange={handleChange}
    />
  );
};

export default ProductFilters;
