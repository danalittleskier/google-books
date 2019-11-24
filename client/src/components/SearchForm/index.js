import React from "react";
import "./style.css";

 
function SearchForm({search, handleFormSubmit, handleInputChange}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="label-icon">Book Name:</label>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type in a book title"
          id="search"
        />

        <button onClick={handleFormSubmit} className="btn waves-effect waves-light">
          Search<i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
