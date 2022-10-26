import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg"
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://previews.123rf.com/images/tul/tul1706/tul170600012/79563966-concepto-de-dise%C3%B1o-de-moda-educaci%C3%B3n-banner-estilo-moderno-con-iconos-de-arte-de-l%C3%ADnea-fina-en-gradi.jpg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/007/424/408/original/e-learning-innovative-online-education-technology-concept-world-map-point-and-line-composition-earth-planet-globe-in-hand-webinar-online-training-courses-skill-development-illustration-vector.jpg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
