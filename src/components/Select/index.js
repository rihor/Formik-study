import React from "react";
import Select from "react-select";

function MySelect(props) {
  function handleChange(value) {
    props.onChange(props.name, value);
  }

  function handleBlur() {
    props.onBlur(props.name, true);
  }

  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={props.name}>{props.label}</label>
      <Select
        id={props.name}
        options={props.options}
        isMulti={props.multiple}
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
        getOptionValue={option => option.id}
      />
      {!!props.error && props.touched && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{props.error}</div>
      )}
    </div>
  );
}

export default MySelect;
