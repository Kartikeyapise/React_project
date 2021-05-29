import React, { useState } from "react";

const Movieform = (props) => {
  return (
    <>
      <h1>MOvie Form: {props.match.params.id}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.history.push("/movies")}
      >
        save
      </button>
    </>
  );
};

export default Movieform;
