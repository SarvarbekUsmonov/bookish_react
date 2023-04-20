import React from "react";

function View(){
  const firstScript = () =>{
    const rating = document.querySelector('.rating');
                          const stars = rating.querySelectorAll('.star');
                          const starIcons = rating.querySelectorAll('.star i');

                          let currentRating = 0;

                          stars.forEach((star) => {
                              star.addEventListener('click', () => {
                                  const value = parseInt(star.getAttribute('data-value'));

                                  if (value === currentRating) {
                                      currentRating = 0;
                                  } else {
                                      currentRating = value;
                                  }

                                  updateStars();
                              });
                          });

                          function updateStars() {
                              starIcons.forEach((icon, index) => {
                                  if (index < currentRating) {
                                      icon.classNameList.remove('bi-star');
                                      icon.classNameList.add('bi-star-fill');
                                  } else {
                                      icon.classNameList.remove('bi-star-fill');
                                      icon.classNameList.add('bi-star');
                                  }
                              });
                          }
  }
    return(
    <div>
      
      <nav className="navbar bg-transparent fixed-top mb-2">
          <div className="container-fluid">
              <a className="navbar-brand">Navbar</a>
              <form className="d-flex" role="search" id="searchForm">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <img id="userAccountImg" src="https://www.shareicon.net/data/512x512/2016/02/22/722964_button_512x512.png" className="rounded mx-auto d-block" alt="image user" style={{margin: "0px !important"}}></img>
          </div>
      </nav>
      <div className="justForSpacing">
      </div>
      <div className="container">
          <div className="card mb-3" style={{maxWidth: "auto"}}>
              <div className="row">
                  <div className="col-md-3">
                      <img src="https://m.media-amazon.com/images/I/41K8NV99juL.jpg" className="img-fluid rounded-start" alt="..."></img>
                  </div>
                  <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title">Name of The Book</h5>
                          <div className="form-group">
                              <label for="">Rating</label>
                              <div className="">
                                  <span className="star" data-value="1"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="2"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="3"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="4"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="5"><i className="bi bi-star"></i></span>
                              </div>
                          </div>
                          <p className="card-text">Martin Block</p>
                          <p className="card-text"><q id="book-description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q></p>
                          <p className="card-text"><small className="text-body-secondary">Published: 2010</small></p>
                          <p className="card-text"><small className="text-body-secondary"><cite>©️Copyright</cite></small></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="card mb-3">
              <div className="card-body">
                  <h4 className="card-title">Rate and Comment on the Book</h4>
                  <form>
                      <div className="rating" >
                          <span className="star" data-value="1"><i className="bi bi-star"></i></span>
                          <span className="star" data-value="2"><i className="bi bi-star"></i></span>
                          <span className="star" data-value="3"><i className="bi bi-star"></i></span>
                          <span className="star" data-value="4"><i className="bi bi-star"></i></span>
                          <span className="star" data-value="5"><i className="bi bi-star"></i></span>
                      </div>
                      {firstScript}
                      <div className="form-group">
                          <label for="comment">Comment</label>
                          <textarea className="form-control" id="comment" rows="3"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="card mb-3">
              <div className="row g-0 align-items-center">
                  <div className="col-md-2 text-center">
                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="img-fluid rounded-circle avatar" alt="avatar" style={{width: "50%"}}></img>
                  </div>
                  <div className="col-md-10">
                      <div className="card-body">
                          <h5 className="card-title">John Doe <button className="btn btn-outline-secondary like-button" style={{float:"right"}}><i className="bi bi-heart"></i> Like</button></h5>
                          <div className="form-group">
                              <div className="">
                                  <span className="star" data-value="1"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="2"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="3"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="4"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="5"><i className="bi bi-star"></i></span>
                              </div>
                          </div>
                          <p className="comment-text card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.</p>
                          <button className="read-more-button btn btn-link">Read More</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="card mb-3">
              <div className="row g-0 align-items-center">
                  <div className="col-md-2 text-center">
                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="img-fluid rounded-circle avatar" alt="avatar" style={{width: "50%"}}></img>
                  </div>
                  <div className="col-md-10">
                      <div className="card-body">
                          <h5 className="card-title">John Doe <button className="btn btn-outline-secondary like-button" style={{float:"right"}}><i className="bi bi-heart"></i> Like</button></h5>
                          <div className="form-group">
                              <div className="">
                                  <span className="star" data-value="1"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="2"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="3"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="4"><i className="bi bi-star"></i></span>
                                  <span className="star" data-value="5"><i className="bi bi-star"></i></span>
                              </div>
                          </div>
                          <p className="comment-text card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fringilla odio. Quisque tempor ipsum nec tellus maximus, eu tristique purus sodales. Aliquam congue magna id odio lobortis consequat.</p>
                          <button className="read-more-button btn btn-link">Read More</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default View