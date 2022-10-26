import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <div className="container mt-2 mt-sm-5">
      <div className="card">
        <img src={details.img} className="card-img-top" alt="card_image" />
        <div className="card-body">
          <h1 className="card-title">{details.title} </h1>
          <h5 className="fw-bold">description:</h5>
          <p className="card-text">{details.details}</p>
          <Link to={`/checkout/${details._id}`} className="btn btn-success">
          Purchase course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
