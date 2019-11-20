import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";



class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBooks(this.state.search)
      .then(res => {
        // console.log(res.data.items);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div>

          <SearchResults results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Search;

