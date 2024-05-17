import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to bringing you the best quiz experience. Our goal is to provide fun and engaging quizzes for everyone.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h2>Contact</h2>
          <p>Email: chafik-mouram_student2023@wilder.school</p>
          <p>Phone: +33 7 67 83 48 72</p>
        </div>
        <div className={styles.footerSection}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <Link to="https://www.linkedin.com/in/chafik-mouram/" className={styles.icon}><FaLinkedin /></Link>
            <Link to="#" className={styles.icon}><FaXTwitter /></Link>
            <Link to="#" className={styles.icon}><FaInstagram /></Link>
            <Link to="https://github.com/MouramChafik" className={styles.icon}><FaGithub /></Link>

          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 API Quiz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
