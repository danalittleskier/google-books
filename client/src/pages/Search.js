import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Book from "../components/Book";



class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    message: "No Results to Display"
  };

  saveBook = (id, bookInfo) => {
    const book = {
      id: id,
      title: bookInfo.title,
      author: bookInfo.authors[0],
      publishedDate: bookInfo.publishedDate,
      synopsis: bookInfo.description,
      thumbnail: bookInfo.imageLinks.thumbnail
    }
    API.saveBook(book)
      .then(res => {
        this.setState({ results: [], search: "", message: "Your book was saved to the reading list" });
        console.log(book);
      })
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
        console.log(res.data.items);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        res.data.items ?
          this.setState({ results: res.data.items }) :
          this.setState({ results: [] });

      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div className="container">
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        {this.state.results.length ? (
          <div className="container">
            <div className="row"  >
              {this.state.results.map(result => (
                <Book key={result.id}
                  title={result.volumeInfo.title}
                  authors={result.volumeInfo.authors}
                  publishedDate={result.volumeInfo.publishedDate}
                  thumbnail={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : ""}
                  description={result.volumeInfo.description ? result.volumeInfo.description : ""}
                  deleteButton={false}
                  bookClick={() => this.saveBook(result.id, result.volumeInfo)}
                />
              ))}
            </div>
          </div>
        ) : (
            <h5>{this.state.message}</h5>
          )}
      </div>
    )

  }
}

export default Search;

