import React, { Component } from "react";
import Inputform from "./Inputform";
import { Link } from "react-router-dom";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class Addnewmovieform extends Component {
  state = {
    attributes: {
      name: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: { name: "", genre: "", numberInStock: "", dailyRentalRate: "" },
  };

  validate = () => {
    const errors = {};
    return errors;
  };
  validateOneInput = (name) => {
    return "";
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.errors = this.validate();
    console.log("in handlesubmit");
    this.setState({ ...this.state });
    // saveMovie({
    //   _id: this.genre + this.name,
    //   title: this.name,
    //   genre: { _id: this.genre + this.name, name: this.genre },
    //   numberInStock: this.numberInStock,
    //   dailyRentalRate: this.dailyRentalRate,
    // });
    this.props.history.push("/movies");
  };
  handleOnchange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    this.state.attributes[name] = value;
    this.state.errors[name] = this.validateOneInput(name);
    console.log(this.state);
    this.setState({ ...this.state });
  };
  render() {
    return (
      <>
        <div>
          <h1>Movie form</h1>
          <form>
            <Inputform
              label="name"
              name="name"
              value={this.state.attributes.username}
              handleOnchange={this.handleOnchange}
              type="text"
              error={this.state.errors.username}
            ></Inputform>
            <Inputform
              label="genre"
              name="genre"
              value={this.state.attributes.genre}
              handleOnchange={this.handleOnchange}
              type="text"
              error={this.state.errors.genre}
            ></Inputform>
            <Inputform
              label="numberInStock"
              name="numberInStock"
              value={this.state.attributes.numberInStock}
              handleOnchange={this.handleOnchange}
              type="text"
              error={this.state.errors.numberInStock}
            ></Inputform>
            <Inputform
              label="dailyRentalRate"
              name="dailyRentalRate"
              value={this.state.attributes.dailyRentalRate}
              handleOnchange={this.handleOnchange}
              type="text"
              error={this.state.errors.dailyRentalRate}
            ></Inputform>
            <Link to="/movies">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={this.handleSubmit}
              >
                save
              </button>
            </Link>
          </form>
        </div>
      </>
    );
  }
}

export default Addnewmovieform;
