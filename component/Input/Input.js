import React from "react";

const Input = ({ type, id, name, onBlur, onChange, value }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
