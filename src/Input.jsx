import React from "react";

function Input({ label, id, type }) {
  const [inputVal, setInputVal] = React.useState("");

  function handleChange({ target }) {
    setInputVal(target.value);
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type ? type : "text"}
        id={id}
        name={label}
        value={inputVal}
        onChange={handleChange}
      />
    </>
  );
}

export default Input;
