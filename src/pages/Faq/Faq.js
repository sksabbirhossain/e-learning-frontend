import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container mt-3 mt-sm-5">
      <h1 className="text-center mb-3">FAQ</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why E-Learning?</Accordion.Header>
          <Accordion.Body>
            E-learning is learning Platform. E-Learning provides scalability
            which helps in providing training. All students can receive the same
            type of syllabus, study materials, and train through E-Learning.
            Through E-Learning, you can save time, and money and reduced
            transportation costs. so, E-Learning is cost-effective compared to
            traditional learning.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
