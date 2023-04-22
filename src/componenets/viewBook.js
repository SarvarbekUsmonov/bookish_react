function viewBook() {
    return (
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
    )
}

export default viewBook