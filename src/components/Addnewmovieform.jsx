import React, { useState } from "react";
import Inputform from "./Inputform";

const Addnewmovieform = () => {
  let [state, setState] = useState({
    attributes: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: { title: "", genre: "", numberInStock: "", rate: "" },
  });
  return (
    <>
      <div>
        <h1>Movie form</h1>
        <form>
          <Inputform
            label="title"
            name="title"
            value={state.attributes.username}
            handleOnchange={handleOnchange}
            type="text"
            error={state.errors.username}
          ></Inputform>
          <Inputform
            label="genre"
            name="genre"
            value={state.attributes.genre}
            handleOnchange={handleOnchange}
            type="text"
            error={state.errors.genre}
          ></Inputform>
          <Inputform
            label="numberInStock"
            name="numberInStock"
            value={state.attributes.numberInStock}
            handleOnchange={handleOnchange}
            type="text"
            error={state.errors.numberInStock}
          ></Inputform>
          <Inputform
            label="rate"
            name="rate"
            value={state.attributes.rate}
            handleOnchange={handleOnchange}
            type="text"
            error={state.errors.rate}
          ></Inputform>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            save
          </button>
        </form>
      </div>
    </>
  );

  function validate() {
    const errors = {};
    return errors;
  }
  function validateOneInput(name) {
    return "";
  }
  function handleSubmit(e) {
    e.preventDefault();
    state.errors = validate();
    setState({ ...state });
  }
  function handleOnchange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    console.log("in handleonChange", name, value);
    state.attributes[name] = value;
    state.errors[name] = validateOneInput(name);
    setState({ ...state });
  }
};

export default Addnewmovieform;
