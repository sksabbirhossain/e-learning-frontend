import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css"

const Courses = () => {
  
  return (
    <div className="container">
      <h3 className="text-center mt-2 mt-md-3">Our Courses </h3>
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-sm-4 col-lg-3">
              <div className="card mb-3">
                <h2>hello</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
