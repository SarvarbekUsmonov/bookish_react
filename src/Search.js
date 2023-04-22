import React from "react";
import Filter from "./components/Filter";
import ContentSearch from "./components/ContentSearch";

function Search(){
  return(
    <div id='main-search'>
      <Filter />
      <ContentSearch />
    </div>
  )
}

export default Search;