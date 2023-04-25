import React from "react";

function Filter(){
  return(
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
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="form-group d-flex my-4 mx-2 align-items-center">
            <label class="form-label">Year:</label>
            <select class="form-select w-50 " aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          
        </form>

      </div>
      
  )
}

export default Filter;