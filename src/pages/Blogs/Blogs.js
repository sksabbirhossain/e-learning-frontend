import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container mt-3 mb-3">
      <h3 className="text-center">blogs Page</h3>
      <div className="blog-post mt-3 mt-sm-5">
        <h5>01. what is cors?</h5>
        <p>
          CORS stands for Cross-Origin Resource Sharing . It allows us to relax
          the security applied to an API. This is done by bypassing the
          Access-Control-Allow-Origin headers, which specify which origins can
          access the API.
        </p>
      </div>
      <div className="blog-post mt-3 mt-sm-5">
        <h5>
          02. Why are you using firebase? What other options do you have to
          implement authentication?
        </h5>
        <p>
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together.
          <p>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </p>
      </div>
      <div className="blog-post mt-3 mt-sm-5">
        <h5>03. How does the private route work?</h5>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div className="blog-post mt-3 mt-sm-5">
        <h5>04. What is Node? How does Node work?</h5>
        <p>
          t is used for server-side programming, and primarily deployed for
          non-blocking, event-driven servers, such as traditional web sites and
          back-end API services, but was originally designed with real-time,
          push-based architectures in mind. Every browser has its own version of
          a JS engine, and node.
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
