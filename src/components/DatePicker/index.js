import React from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker(props) {
  function handleChange(value) {
    props.onChange(props.name, value);
  }

  function handleBlur() {
    props.onBlur(props.name, true);
  }


  return (
    <>
      <DatePicker
        name={props.name}
        selected={props.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {!!props.error && props.touched && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{props.error}</div>
      )}
    </>
  );
}

export default MyDatePicker;
