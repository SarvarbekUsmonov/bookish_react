import React from "react";
import ViewBook from './components/ViewBook';
import Rateandcomment from './components/Rateandcomment';
import Bookcomments from './components/Bookcomments';
import Navbar from "./components/Navbar";

function View(){
    return(
    <div>
        <Navbar />
        <ViewBook />
        <Rateandcomment />
        <Bookcomments /> 
    </div>
  )
}

export default View