import React from "react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  return (
    <section className="">
      <div className="container">
        <div className="text-center my-5">
          <h3 className="shadow py-3">Recent Blogs</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg"
                className="card-img-top img-fluid"
                alt="learn"
                style={{ width: "100%", height: "170px" }}
              />
              <div className="card-body">
                <h5 className="card-title">what is cors?</h5>
                <p className="card-text">
                  CORS stands for Cross-Origin Resource Sharing . It allows us
                  to relax the security applied to an API...
                </p>
                <Link to="/blogs">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://blog.loginradius.com/static/a53096b6796dd3d1e3f3df8bc77a6689/03979/index.png"
                className="card-img-top img-fluid"
                alt="learn"
                style={{ width: "100%", height: "170px" }}
              />
              <div className="card-body">
                <h5 className="card-title">How does the private route work?</h5>
                <p className="card-text">
                  The private route component is similar to the public route,
                  the only change is that redirect URL..
                </p>
                <Link to="/blogs">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.turing.com/blog/wp-content/uploads/2021/11/node-js-logo.png"
                className="card-img-top img-fluid"
                alt="learn"
                style={{ width: "100%", height: "170px" }}
              />
              <div className="card-body">
                <h5 className="card-title">What is Node? </h5>
                <p className="card-text">
                  this is used for server-side programming, and primarily
                  deployed for non-blocking, event-driven servers...
                </p>
                <Link to="/blogs">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
