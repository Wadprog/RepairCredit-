import React from "react";
import CreatableSelect from "react-select/creatable";

const SelectCreatable = ({ items, HandleChange, label, ...otherProps }) => {
  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted #fff",
      color: state.isSelected ? "blue" : "",
      fontSize: 16,
      backgroundColor: state.isSelected ? "#eee" : "",
      textAlign: "left",
      cursor: "pointer",
    }),
    container: (base) => ({
      ...base,
      width: "100%",
    }),
    control: (base) => ({
      ...base,
      position: "absolute",
      top: -2,
      left: -2,
      height: "100%",
      backgroundColor: "none",
      padding: "auto 20",
      paddingLeft: 15,
      fontSize: 16,
      borderRadius: 5,
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      border: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
      paddingLeft: 2,
    }),
  };

  return (
    <CreatableSelect
      className='creatable'
      onChange={HandleChange}
      onInputChange={(inputValue = null, actionMeta = null) => {
        console.group("Input Changed");
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      }}
      {...otherProps}
      options={items}
      styles={selectStyles}
    />
  );
};

export default SelectCreatable;
