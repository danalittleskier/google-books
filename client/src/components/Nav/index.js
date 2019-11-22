import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/search">
        Google Books Search
      </a>
      <a className="navbar-brand" href="/books">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
