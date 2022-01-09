import React from "react";
import styles from "../assets/styles/footer.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer_section}>
        <div className={styles.footer_rows}>
          <div className={styles.footer_row}>
            <h2>About</h2>
            <p>
              The expert in anything <br />
              was once a beginner.
            </p>
          </div>
          <div className={styles.footer_row}>
            <h2>Links</h2>
            <ul className={styles.footer_links}>
              <li className={styles.footer_link}>
                <a href="#">Home</a>
              </li>
              <li className={styles.footer_link}>
                <a href="#">About</a>
              </li>
              <li className={styles.footer_link}>
                <a href="#">Services</a>
              </li>
              <li className={styles.footer_link}>
                <a href="#">Projects</a>
              </li>
              <li className={styles.footer_link}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_row}>
            <h2>Services</h2>
            <ul className={styles.footer_links}>
              <li className={styles.footer_link}>
                <a href="">Web Design</a>
              </li>
              <li className={styles.footer_link}>
                <a href="">Software Development</a>
              </li>
              <li className={styles.footer_link}>
                <a href="">Business Strategy</a>
              </li>
              <li className={styles.footer_link}>
                <a href="">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_row}>
            <h2>Have a Questions?</h2>
            <ul>
              <li className={styles.footer_elem}>
                <IoLocationOutline className={styles.footer_icons} />
                <span>Sale , Hay Al Amal Karia Morroco</span>
              </li>
              <li className={styles.footer_elem}>
                <ImPhone className={styles.footer_icons} />
                <span>+212 (0) 6 97 70 42 55</span>
              </li>
              <li className={styles.footer_elem}>
                <IoIosMail className={styles.footer_icons} />
                <span>elmehdiaoussar.contact@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
          <a
            href="https://www.linkedin.com/in/elmehdiaoussar/"
            target="_blank"
            rel="noreferrer"
          >
            LocalDev
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
