import React from "react";

function Radio({ id, options, pergunta, resposta, onChange, active }) {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              id={id}
              checked={resposta === option}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
}

export default Radio;
