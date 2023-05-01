import React, { useState, useRef } from "react";

function Rateandcomment() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const commentRef = useRef();

  const handleStarClick = (e) => {
    const newRating = parseInt(e.currentTarget.dataset.value, 10);
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/rateandcomment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: rating, comment: comment }),
    });

    if (response.ok) {
      // Handle success
      console.log("Success");
      setRating(0);
      setComment("");
      commentRef.current.value = "";
    } else {
      // Handle error
      console.log("Error");
    }
  };

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Rate and Comment on the Book</h4>
          <form onSubmit={handleSubmit}>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`star ${index + 1 <= rating ? "selected" : ""}`}
                  data-value={index + 1}
                  onClick={handleStarClick}
                >
                  <i className={`bi ${index + 1 <= rating ? "bi-star-fill" : "bi-star"}`}></i>
                </span>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                onChange={handleCommentChange}
                ref={commentRef}
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

export default Rateandcomment;
