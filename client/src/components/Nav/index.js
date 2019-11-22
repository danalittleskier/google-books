import React from "react";

function Nav() {
  return (
    <nav className="z-depth-0">
      <div class="nav-wrapper grey darken-3">
      <a className="brand-logo left" href="/search">
        Google Books Search
      </a>
      <a className="brand-logo right" href="/books">
        Saved Books
      </a>
      </div>
    </nav>
  );
}

export default Nav;
