import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <header>
    <nav class="navbar">
        <div class="logo">
            <img src="./public/images/logo.png" alt="Stock Market Logo" />
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Stocks</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Watchlist</a></li>
            <li><a href="#">Portfolio</a></li>
        </ul>
        <div class="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
    </nav>
</header>
  );
}

export default NavBar;
