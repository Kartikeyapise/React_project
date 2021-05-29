import React, { useState } from "react";
import Inputform from "./Inputform";

const LoginForm = () => {
  let [state, setState] = useState({
    account: { username: "", password: "", fullname: "" },
    errors: { username: "", password: "", fullname: "" },
  });
  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <Inputform
            label="Username"
            name="username"
            value={state.account.value}
            handleOnchange={handleOnchange}
            type="text"
            error={state.errors.username}
          ></Inputform>
          <Inputform
            label="Password"
            name="password"
            value={state.account.password}
            handleOnchange={handleOnchange}
            type="password"
            error={state.errors.password}
          ></Inputform>
          <Inputform
            label="name"
            name="fullname"
            value={state.account.fullname}
            handleOnchange={handleOnchange}
            type="password"
            error={state.errors.fullname}
          ></Inputform>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );

  function validate() {
    state.errors.isButtonValid = false;
    console.log("in valudate");
    const errors = {};
    if (state.account.username.trim() === "")
      errors.username = "username is required";
    else if (state.account.username.length < 3)
      errors.username = "username needs to be minimum 3 characters";
    else errors.username = "";

    if (state.account.password.trim() === "")
      errors.password = "password is required";
    else if (state.account.password.length < 5)
      errors.password = "password needs to be minimum 5 characters";
    else errors.password = "";
    if (state.account.fullname.trim() === "")
      errors.fullname = "fullname is required";
    else if (state.account.fullname.length < 3)
      errors.fullname = "fullname needs to be minimum 3 characters";
    else errors.fullname = "";
    // if there are no errors we can send the form data to backend otherwise we'll just display errors in form
    return errors;
  }
  function validateOneInput(name) {
    if (name === "username") {
      if (state.account.username.trim() === "") return "username is required";
      else if (state.account.username.length < 3)
        return "username needs to be minimum 3 characters";
      else return "";
    }
    if (name === "password") {
      if (state.account.password.trim() === "") return "password is required";
      else if (state.account.password.length < 5)
        return "password needs to be minimum 5 characters";
      else return "";
    }
    if (name === "fullname") {
      if (state.account.fullname.trim() === "") return "fullname is required";
      else if (state.account.fullname.length < 3)
        return "fullname needs to be minimum 3 characters";
      else return "";
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    state.errors = validate();
    setState({ ...state });
    console.log("in handlesubmit", state.errors);
    console.log("submitted");
  }
  function handleOnchange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    console.log("in handleonChange", name, value);
    state.account[name] = value;
    state.errors[name] = validateOneInput(name);
    setState({ ...state });
  }
};

export default LoginForm;
