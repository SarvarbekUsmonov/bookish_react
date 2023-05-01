
import React, { useState, useEffect, useRef } from "react";

function Filter({ updateBooks }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getAuthors")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
      });
    
  }, []);

  const authorRef = useRef(null);
  const genreRef = useRef(null);
  const yearRef = useRef(null);
  const inputRef = useRef(null);

  function filter() {
    let author = authorRef.current.value;
    let genre = genreRef.current.value;
    let year = yearRef.current.value;
    if (author === "Author") {
      author = false;
    }
    if (genre === "Genre") {
      genre = false;
    }
    if (year === "Year") {
      year = false;
    }
    const url = `http://localhost:4000/filter/${author}/${year}/${genre}/${inputRef.current.value}`;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateBooks(data);
      });
  }
  
   
  return (
    <div id="filter">
      <form id="searchForm" onSubmit={(e) => { e.preventDefault(); filter(); }}>
        <div className="form-group d-flex">
          <input ref={inputRef} id="search-bar" className="form-control  me-2 mx-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button id="search-button" className="btn btn-outline-success mx-2" type="submit">Search</button>
        </div>
        <div className="form-group d-flex my-4 mx-2 align-items-center">
          <label className="form-label">Genre:</label>
          <select ref={genreRef} className="form-select w-50 " aria-label="Default select example">
            <option selected>Genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="form-group d-flex my-4 mx-2 align-items-center">
          <label className="form-label">Author:</label>
          <select ref={authorRef}  className="form-select w-50 " aria-label="Default select example">
            <option selected>Author</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group d-flex my-4 mx-2 align-items-center">
          <label className="form-label">Year:</label>
          <select ref={yearRef}  className="form-select w-50" aria-label="Year" menuPosition="fixed">
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

export default Filter
