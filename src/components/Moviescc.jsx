import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import Pagination from "./Pagination.jsx";
import Genres from "./Genres.jsx";
import MoviesTable from "./MoviesTable.jsx";

class Movies extends Component {
  state = {
    all_movies: getMovies(),
    list_movies: getMovies(),
    pageSize: 5,
    pageNo: 1,
    currentGenre: "All Genres",
    sortColoum: undefined,
    numberOfPages: Math.ceil(getMovies().length / 5),
  };
  constructor() {
    super(this.props);
    this.state.numberOfPages = Math.ceil(
      this.state.list_movies.length / this.this.state.pageSize
    );
  }

  handleDelete = (movie) => {
    // console.log(movie);
    let state = { ...this.state };
    state.list_movies = state.list_movies.filter((m) => {
      return m._id !== movie._id;
    });
    state.all_movies = state.all_movies.filter((m) => {
      return m._id !== movie._id;
    });
    this.setState({ ...state });
  };

  handleLike = (movie) => {
    let state = { ...this.state };
    console.log(this.state);
    let index = this.state.list_movies.indexOf(movie);
    if (
      state.list_movies[index].Liked == undefined ||
      state.list_movies[index].Liked == false
    )
      state.list_movies[index].Liked = true;
    else state.list_movies[index].Liked = false;
    // console.log(movie);
    this.setState({ ...state });
  };

  showMoviesOnPage = (pageNo) => {
    let state = { ...this.state };
    let marr = [];
    let s = state.pageSize * (pageNo - 1);
    let e = state.pageSize * pageNo;
    if (state.pageSize * pageNo > state.list_movies.length)
      e = state.list_movies.length;
    for (let i = s; i < e; i++) {
      marr.push(state.list_movies[i]);
    }
    return marr;
  };
  handleSort = (param) => {
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
    let state = { ...this.state };

    state.sortColoum = param;
    if (param === "Jenre") state.list_movies.sort(sortByGenre);
    else state.list_movies.sort(sortByparam);
    this.setState({ ...state });
  };
  handlePagination = (pn) => {
    let state = { ...this.state };
    state.pageNo = pn;
    this.setState({ ...state });
  };

  handleGenre = (genre) => {
    let state = { ...this.state };

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

    this.setState({ ...state });
  };

  addMovie = (m) => {
    this.state.all_movies.push({
      _id: "movie_" + m.title,
      title: m.title,
      genre: { _id: "genre_" + m.genre, name: m.genre },
      numberInStock: m.numberInStock,
      dailyRentalRate: m.dailyRentalRate,
    });
    this.setState({ ...this.state });
  };

  render = () => {
    this.state.numberOfPages = Math.ceil(
      this.state.list_movies.length / this.this.state.pageSize
    );
    // console.log(this.state);
    if (this.state.all_movies.length === 0)
      return <p>There are no movies in the database.</p>;
    return (
      <>
        <div className="row">
          <div className="col-3">
            <Genres
              handleGenre={this.handleGenre}
              currentGenre={this.state.currentGenre}
            ></Genres>
          </div>
          <div className="col">
            <MoviesTable
              state={this.state}
              handleDelete={this.handleDelete}
              handleLike={this.handleLike}
              listMoviesOnPage={this.showMoviesOnPage(this.state.pageNo)}
              handleSort={this.handleSort}
              sortColoum={this.state.sortColoum}
            ></MoviesTable>
            <Pagination
              numberOfPages={this.state.numberOfPages}
              pageSize={this.state.pageSize}
              pageNo={this.state.pageNo}
              handlePagination={this.handlePagination}
            ></Pagination>
          </div>
        </div>
      </>
    );
  };
}

export default Movies;
