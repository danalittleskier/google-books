import React from "react";

function Nav() {
  return (
    <nav className="z-depth-0">
      <div class="nav-wrapper grey darken-3">
        <a href="/" class="brand-logo right">My Little Library</a>
        <ul id="nav-mobile" class="left">
          <li><a href="/search">Search Google API</a></li>
          <li><a href="/books">My Reading List</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
