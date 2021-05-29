import React, { Component } from "react";

const Like = (props) => {
  let classes = "fa fa-heart-o";
  if (props.Liked === true) classes = "fa fa-heart";
  return (
    <i
      onClick={() => props.onClick(props.movie)}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
