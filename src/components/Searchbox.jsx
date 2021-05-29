import React from "react";

const Searchbox = (props) => {
  return (
    <input
      className="form-control my-3"
      type="text"
      name="query"
      value={props.value}
      placeholder="search..."
      onChange={(e) => props.onChangeQuery(e.currentTarget.value)}
    />
  );
};

export default Searchbox;
