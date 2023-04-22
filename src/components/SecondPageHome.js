import React from "react";

function SecondPageHome(){
  return(
    <div id="secondary">
      <h2 id="recommended-text">Recommended:</h2>
      <div id="recommended-books" className="container">
        <div className="row">
          <div className="column card mx-auto" style={{width: "18rem"}}>
            <img src={require('../images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
            <div className="card-body">
              <h5 className="card-title">Game of Thrones</h5>
              <p className="card-text">This is really great book even though I have not read this yet.</p>
              <a href="https://google.com/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="column card mx-auto" style={{width: "18rem"}}>
            <img src={require('../images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
            <div className="card-body">
              <h5 className="card-title">Game of Thrones</h5>
              <p className="card-text">This is really great book even though I have not read this yet.</p>
              <a href="https://google.com/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="column card mx-auto" style={{width: "18rem"}}>
            <img src={require('../images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
            <div className="card-body">
              <h5 className="card-title">Game of Thrones</h5>
              <p className="card-text">This is really great book even though I have not read this yet.</p>
              <a href="https://google.com/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SecondPageHome