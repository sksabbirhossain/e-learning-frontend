import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css";

const Courses = () => {
  const [courseCategory, setCourseCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseCategory(data));
  }, [id]);

  return (
    <div className="container">
      <h3 className="text-center mt-2 mt-md-3">Our Courses </h3>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <div className="row mt-3 mt-md-0">
            {courseCategory.map((items) => (
              <div className="col-sm-6 col-lg-4" key={items._id}>
                <div className="card mb-3">
                  <img src={items.img} className="card-img" alt="..." />
                  <div className="card-body">
                    <p className="card-title">{items.title}</p>
                    <Link to={`/category/${items._id}`} className="btn btn-success w-100">
                      Learn more <FaArrowRight/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
