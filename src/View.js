import React from "react";
import viewBook from './components/viewBook';

function View(){
    return(
    <div>
      <viewBook/>
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