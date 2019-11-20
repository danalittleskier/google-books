import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {console.log(props.results)}
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <p>{result.volumeInfo.title} by {result.volumeInfo.authors}</p>
          <p>Published - {result.volumeInfo.publishedDate}</p>
          <img alt="Book" src={result.volumeInfo.imageLinks.thumbnail} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
