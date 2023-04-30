import React, { useState, useEffect } from "react";

function Filter() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getAuthors")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
      });
    
    fetch("http://localhost:4000/search")
  }, []);

  return (
    <div id="filter">
      <form id="searchForm">
        <div class="form-group d-flex">
          <input id="search-bar" class="form-control  me-2 mx-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button id="search-button" class="btn btn-outline-success mx-2" type="submit">Search</button>
        </div>
        <div class="form-group d-flex my-4 mx-2 align-items-center">
          <label class="form-label">Genre:</label>
          <select class="form-select w-50 " aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="form-group d-flex my-4 mx-2 align-items-center">
          <label class="form-label">Author:</label>
          <select class="form-select w-50 " aria-label="Default select example">
            <option selected>Open this select menu</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
        <div class="form-group d-flex my-4 mx-2 align-items-center">
          <label class="form-label">Year:</label>
          <select className="form-select w-50" aria-label="Year" menuPosition="fixed">
            <option>Year</option>
            {Array.from({ length: new Date().getFullYear() - 1900 }, (_, index) => (
              <option key={index}>{new Date().getFullYear() - index}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filter;
