import React from "react";
import "./style.css";

 
function SearchForm({search, handleFormSubmit, handleInputChange}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Book Name:</label>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type in a book name to begin"
          id="search"
        />
           {console.log(search)}
        <button onClick={handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
