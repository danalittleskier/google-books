import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Book from "../components/Book";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <div className="container">
        {this.state.books.length ? (

          <div className="container">
            <div className="row"  >

              {this.state.books.map(result => (
                <Book key={result.id}
                  title={result.title}
                  authors={result.author}
                  publishedDate={result.publishedDate}
                  description={result.synopsis}
                  thumbnail={result.thumbnail ? result.thumbnail : ""}
                  saveBookClick={() => this.saveBook(result.id, result.volumeInfo)}
                />
              ))}
            </div>
          </div>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )
  }
}

export default Books;