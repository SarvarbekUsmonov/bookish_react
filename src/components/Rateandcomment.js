function Rateandcomment() {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Rate and Comment on the Book</h4>
          <form>
            <div className="rating">
              <span className="star" data-value="1">
                <i className="bi bi-star"></i>
              </span>
              <span className="star" data-value="2">
                <i className="bi bi-star"></i>
              </span>
              <span className="star" data-value="3">
                <i className="bi bi-star"></i>
              </span>
              <span className="star" data-value="4">
                <i className="bi bi-star"></i>
              </span>
              <span className="star" data-value="5">
                <i className="bi bi-star"></i>
              </span>
            </div>
            <div className="form-group">
              <label for="comment">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rateandcomment
