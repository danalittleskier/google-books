import React, { Component } from "react";
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Book from "../components/Book";



class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  saveBook = id => {
    API.saveBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
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
        {this.state.results.length ? (
          <ul className="list-group search-results">

            {this.state.results.map(result => (
              <Book key={result.id}
                title={result.volumeInfo.title}
                authors={result.volumeInfo.authors}
                publishedDate={result.volumeInfo.publishedDate}
                thumbnail={result.volumeInfo.imageLinks.thumbnail}
                onClick={() => this.saveBook(result.id)}
              />
            ))}
          </ul>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )

  }
}

export default Search;

