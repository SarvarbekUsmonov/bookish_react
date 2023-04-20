import React from "react";

function Home(){
  return(
    <div>
      <div id="main" className="row">
        <nav className="navbar navbar-expand-md bg-transparent m-0 py-0">
          <img className="rounded d-block mx-4" id="logo-img" src={require("./images/photo_2023-04-13 23.51.37.jpeg")}></img>
          <form className="d-flex mx-auto" role="search" id="searchForm">
            <input id="search-bar" className="form-control  me-2 mx-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button id="search-button" className="btn btn-outline-success mx-auto" type="submit">Search</button>
          </form>
          <img id="pfp-img" className="rounded mx-4 d-block" alt="user image"></img>
          
        </nav>

        <div id="main-page">
          <div id="text" className="column">
            <p style={{ fontWeight: 500, fontSize: "4em" }}>Bookish</p>
            <p style={{fontWeight: 300, fontSize: "1.5em"}}>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. 
              Tellus elementum sagittis vitae et</p>
          </div>
          <div id="background"><img></img></div>
        </div>

      
      </div>
      <div id="secondary">
        <h2 id="recommended-text">Recommended:</h2>
        <div id="recommended-books" className="container">
          <div className="row">
            <div className="column card mx-auto" style={{width: "18rem"}}>
              <img src={require('./images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
              <div className="card-body">
                <h5 className="card-title">Game of Thrones</h5>
                <p className="card-text">This is really great book even though I have not read this yet.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="column card mx-auto" style={{width: "18rem"}}>
              <img src={require('./images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
              <div className="card-body">
                <h5 className="card-title">Game of Thrones</h5>
                <p className="card-text">This is really great book even though I have not read this yet.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="column card mx-auto" style={{width: "18rem"}}>
              <img src={require('./images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
              <div className="card-body">
                <h5 className="card-title">Game of Thrones</h5>
                <p className="card-text">This is really great book even though I have not read this yet.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home