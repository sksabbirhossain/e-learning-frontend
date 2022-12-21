import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className="d-flex mb-4 mb-sm-0">
      <a href="https://www.facebook.com/sksabbirhossain4/" className={styles.socialIcon}>
        <FaFacebookF />
      </a>
      <a href="https://github.com/sksabbirhossain" className={styles.socialIcon}>
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/sk-sabbir-hossain/" className={styles.socialIcon}>
        <FaLinkedinIn />
      </a>
      <a href="https://twitter.com/sksabbir393" className={styles.socialIcon}>
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;
