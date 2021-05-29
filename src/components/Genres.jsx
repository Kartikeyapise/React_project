import React, { useState } from "react";
import { getGenres } from "../services/fakeGenreService.js";

const Genres = (props) => {
  let all_genre = getGenres();
  all_genre.unshift({ _id: "null", name: "All Genres" });
  //   console.log(all_genre);
  return (
    <ul className="list-group" style={{ width: "max-content" }}>
      {all_genre.map((v) => {
        let classes = "list-group-item";
        if (v.name === props.currentGenre) classes = "list-group-item active";

        return (
          <li
            style={{ cursor: "pointer" }}
            key={"listofgenre" + v.name}
            onClick={() => props.handleGenre(v.name)}
            className={classes}
          >
            {v.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
