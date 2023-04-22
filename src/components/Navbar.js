import React from "react";

function Navbar(){
  return(
    <div>
      <nav className="navbar navbar-expand-md sticky-top bg-white m-0 py-0">
        <img className="rounded d-block mx-4" alt="" id="logo-img" src={require("../images/photo_2023-04-13 23.51.37.jpeg")}></img>
        <a class="navbar-brand">Bookish</a>
        <form className="d-flex mx-auto" role="search" id="searchFormNavbar">
          <input id="search-bar" className="form-control  me-2 mx-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button id="search-button" className="btn btn-outline-success mx-auto" type="submit">Search</button>
        </form>
        <img id="pfp-img" className="rounded mx-4 d-block" alt=""></img>
      </nav>
    </div>
  )
}

export default Navbar;