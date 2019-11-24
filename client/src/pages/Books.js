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
    synopsis: "",
    message: "No books available in your library"
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
      .then(res => {
        this.setState({ message: "The book was removed from your library" });
        this.loadBooks();
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
                  deleteButton={true}
                  bookClick={() => this.deleteBook(result._id)}>

                </Book>

              ))}
            </div>
          </div>
        ) : (
            <h3>{this.state.message}</h3>
          )}
      </div>
    )
  }
}

export default Books;