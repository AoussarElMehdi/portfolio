import React from "react";
import AboutImg from "../assets/images/about-image.jpg";
import styles from "../assets/styles/about.module.css";
import { FiDownload } from "react-icons/fi";
import { cvUrl } from "../constants/socialLinks";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container_section}>
        <div className={`${styles.section_center} ${styles.about_center}`}>
          <article className={styles.about_img}>
            <img
              src={AboutImg}
              className={styles.hero_photo}
              loading="lazy"
              alt="about img"
            />
          </article>
          <article className={styles.hero_info}>
            <div className={`${styles.section_title}`}>
              <h2>About Me</h2>
            </div>
            <p>
              As a Full Stack Developer , I love to come up with new, innovative
              ideas. React, Spring Boot, and Express are the most common
              frameworks I use.
            </p>
            <ul className={styles.about_info}>
              <li>
                <span className={styles.about_title}>Name:</span>
                <span>El Mehdi Aoussar</span>
              </li>
              <li>
                <span className={styles.about_title}>Address:</span>
                <span>Hay Amal Karia Sale, Rabat Morroco</span>
              </li>
              <li>
                <span className={styles.about_title}>Zip code:</span>
                <span>11000</span>
              </li>
              <li>
                <span className={styles.about_title}>Email:</span>
                <span>elmehdiaoussar.contact@gmail.com</span>
              </li>
              <li>
                <span className={styles.about_title}>Phone:</span>
                <span>+212 762 727 034</span>
              </li>
            </ul>
            <a href={cvUrl} target={`pdf-frame`} className={styles.about_btn}>
              Download CV <FiDownload />
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
