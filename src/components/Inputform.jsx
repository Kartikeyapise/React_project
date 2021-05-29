import React, { useState } from "react";

const Inputform = ({ name, value, handleOnchange, type, label, error }) => {
  return (
    <>
      <div className="mb-0">
        <label HtmlFor={"input" + name} className="form-label">
          {label}
        </label>
        <input
          autoFocus
          name={name}
          value={value}
          onChange={handleOnchange}
          type={type}
          className="form-control"
          id={"input" + name}
        />
      </div>
      {errorMessage()}
    </>
  );

  function errorMessage() {
    // console.log(error);
    if (error === "") return null;
    else return <div className="alert alert-danger">{error}</div>;
  }
};

export default Inputform;
