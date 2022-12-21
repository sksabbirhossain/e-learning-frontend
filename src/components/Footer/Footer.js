import React from "react";
import logo from "../../logo.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.footerContent}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footerContent py-3 d-flex flex-column justify-content-center align-items-center">
                <img src={logo} className="img-fluid" alt="" />
                <p className="text-center">
                  This is a react Learning Application. Here you will find many
                  Courses. <br /> and if you click on a Course, you can see manny
                  course categories. <br /> if you click any category then you can see
                  this category details. and you can this.
                </p>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>Copyright © 2022 Daily Food. All rights reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
