import React from "react";
import { useState } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import Pagination from "./Pagination.jsx";
import Genres from "./Genres.jsx";
import MoviesTable from "./MoviesTable.jsx";
import Searchbox from "./Searchbox";

function Movies() {
  let [state, setState] = useState({
    all_movies: getMovies(),
    list_movies: getMovies(),
    pageSize: 5,
    pageNo: 1,
    currentGenre: "All Genres",
    sortColoum: undefined,
  });
  state.numberOfPages = Math.ceil(state.list_movies.length / state.pageSize);

  if (state.all_movies.length === 0)
    return <p>There are no movies in the database.</p>;
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Genres
            handleGenre={handleGenre}
            currentGenre={state.currentGenre}
          ></Genres>
        </div>
        <div className="col">
          <MoviesTable
            state={state}
            handleDelete={handleDelete}
            handleLike={handleLike}
            listMoviesOnPage={showMoviesOnPage(state.pageNo)}
            handleSort={handleSort}
            sortColoum={state.sortColoum}
          ></MoviesTable>
          <Pagination
            numberOfPages={state.numberOfPages}
            pageSize={state.pageSize}
            pageNo={state.pageNo}
            handlePagination={handlePagination}
          ></Pagination>
        </div>
      </div>
    </>
  );

  function handleDelete(movie) {
    // console.log(movie);
    state.list_movies = state.list_movies.filter((m) => {
      return m._id !== movie._id;
    });
    state.all_movies = state.all_movies.filter((m) => {
      return m._id !== movie._id;
    });
    setState({ ...state });
  }

  function handleLike(movie) {
    let index = state.list_movies.indexOf(movie);
    if (
      state.list_movies[index].Liked == undefined ||
      state.list_movies[index].Liked == false
    )
      state.list_movies[index].Liked = true;
    else state.list_movies[index].Liked = false;
    // console.log(movie);
    setState({ ...state });
  }

  function showMoviesOnPage(pageNo) {
    let marr = [];
    let s = state.pageSize * (pageNo - 1);
    let e = state.pageSize * pageNo;
    if (state.pageSize * pageNo > state.list_movies.length)
      e = state.list_movies.length;
    for (let i = s; i < e; i++) {
      marr.push(state.list_movies[i]);
    }
    return marr;
  }
  function handleSort(param) {
    function sortByGenre(a, b) {
      if (a.genre.name < b.genre.name) {
        return -1;
      }
      if (a.genre.name > b.genre.name) {
        return 1;
      }
      return 0;
    }
    function sortByparam(a, b) {
      if (a[param] < b[param]) {
        return -1;
      }
      if (a[param] > b[param]) {
        return 1;
      }
      return 0;
    }
    state.sortColoum = param;
    if (param === "Jenre") state.list_movies.sort(sortByGenre);
    else state.list_movies.sort(sortByparam);
    setState({ ...state });
  }
  function handlePagination(pn) {
    state.pageNo = pn;
    setState({ ...state });
  }

  function handleGenre(genre) {
    state.currentGenre = genre;
    console.log(genre);

    if (genre === "All Genres") {
      state.list_movies = state.all_movies;
    } else {
      state.list_movies = state.all_movies.filter((m) => {
        if (m.genre.name === genre) return true;
        return false;
      });
    }

    setState({ ...state });
  }

  function addmovie(m) {
    state.all_movies.push({
      _id: "movie_" + m.title,
      title: m.title,
      genre: { _id: "genre_" + m.genre, name: m.genre },
      numberInStock: m.numberInStock,
      dailyRentalRate: m.dailyRentalRate,
    });
  }

  // func movies end
}

export default Movies;
