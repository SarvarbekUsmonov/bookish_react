import React, { useState, useEffect } from "react";
import Spinner from "react-spinkit";

function ViewBook(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      fetch(`https://localhost:4000/viewBookData/${props.id}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          // Comment out or remove the following line to keep the Loader running
          // setLoading(false);
          loading = false;
          console.log(data); // log the fetched data
        })
        .catch((error) => console.error(error));
    }, 1000);
  }, [props.id]);

  if (loading) {
    return (
        <div
           style={{
              display: "flex",
              marginTop: "100px",
              marginBottom: "100px",
              marginLeft: "50%",
              justifyContent: "space-between",}}>
           <Spinner name="circle" style={{ width: 100, height: 100 }} />
        </div>
     );
  }

  return (
    <div className="container">
      <div className="card mb-3" style={{ maxWidth: "auto" }}>
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://m.media-amazon.com/images/I/41K8NV99juL.jpg"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name of The Book</h5>
              <div className="form-group">
                <label for="">Rating</label>
                <div className="">
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
              </div>
              <p className="card-text">{data.title}</p>
              <p className="card-text">
                <q id="book-description-text">{data.desc}</q>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Published: {data.publishedDate}
                </small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <cite>©️Copyright</cite>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
