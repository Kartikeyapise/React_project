import React, { useState } from "react";
import Like from "./common/Like.jsx";
import { Link } from "react-router-dom";
const MoviesTable = (props) => {
  return (
    <>
      <p>showing {props.state.list_movies.length} movies in the database</p>
      <h2>Movies Default Component</h2>
      <Link to="/movies/new" className="btn btn-primary mb-1">
        Add New Movie
      </Link>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th
              style={{ cursor: "pointer" }}
              onClick={() => props.handleSort("title")}
              scope="col"
            >
              Title{setIcon("title")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => props.handleSort("Jenre")}
              scope="col"
            >
              Jenre{setIcon("Jenre")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => props.handleSort("numberInStock")}
              scope="col"
            >
              Stock{setIcon("numberInStock")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => props.handleSort("dailyRentalRate")}
              scope="col"
            >
              Rate {setIcon("dailyRentalRate")}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.listMoviesOnPage.map((val) => {
            return (
              <tr key={val._id}>
                <th scope="row">
                  <Link to={`/movies/${val._id}`}>{val.title}</Link>
                </th>
                <td>{val.genre.name}</td>
                <td>{val.numberInStock}</td>
                <td>{val.dailyRentalRate}</td>
                <td>
                  <Like
                    movie={val}
                    Liked={val.Liked}
                    onClick={props.handleLike}
                  ></Like>
                </td>

                <td>
                  <button
                    onClick={() => props.handleDelete(val)}
                    className="btn btn-danger btn.sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  function setIcon(col) {
    if (props.sortColoum === col)
      return <i class="fa fa-sort-asc" aria-hidden="true"></i>;
    else return null;
  }
};

export default MoviesTable;
