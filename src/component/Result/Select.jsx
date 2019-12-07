import React from "react";
import Select from "react-select";

const options = [
  { value: "departure_time", label: "출발시간" },
  { value: "needed_time", label: "소요시간" },
  { value: "cost", label: "비용" }
];

const customStyles = {
  option: (base, state) => ({
    ...base,
    width: 150,
    background: state.isSelected ? "#bdabff" : "white",
    "&:hover": {
      background: "#e6dfff"
    }
  }),
  control: (base, state) => ({
    ...base,
    width: 150,
    height: 20,
    background: "transparent",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  }),
  menu: (base, state) => ({
    ...base,
    width: 150,
  })
};

const SortedBy = props => {
  return (
    <Select
      isSearchable={false}
      defaultValue={options[0]}
      onChange={props.handleSelected}
      options={options}
      styles={customStyles}
    />
  );
};

export default SortedBy;
