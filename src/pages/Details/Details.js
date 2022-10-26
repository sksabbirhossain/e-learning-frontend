import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "in",
  format: [12, 12],
};

const Details = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  // fetch data
  useEffect(() => {
    fetch(`https://e-learning-backend.vercel.app/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <div className="container mt-2 mb-2 mt-sm-5">
      <Pdf targetRef={ref} filename="course.pdf" options={options}>
        {({ toPdf }) => (
          <button className="btn btn-sm btn-success mb-2" onClick={toPdf}>
            download Course to PDF
          </button>
        )}
      </Pdf>
      <div className="card">
        <div ref={ref}>
          <div className="card-body">
            <h1 className="card-title">{details.title} </h1>
            <img src={details.img} className="card-img-top" alt="card_image" />
            <h5 className="fw-bold mt-3">description:</h5>
            <p className="card-text">{details.details}</p>
          </div>
        </div>
        <div className="card-body">
          <Link to={`/checkout/${details._id}`} className="btn btn-success">
            Purchase course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
