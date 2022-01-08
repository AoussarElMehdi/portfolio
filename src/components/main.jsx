import React from "react";
import {socialLinks} from "../constants/socialLinks";
import homeImg from "../assets/images/homePng.png";
import styles from "../assets/styles/main.module.css";
const Main = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container_section}>
        <article className={styles.home_info}>
            <h2 class="title-text">Hey there</h2>
            <h1 class="title-text text-uppercase">I'm EL MEHDI!</h1>
            <h3 class="title-text text-uppercase">
            Full Stack Developer
            </h3>
            <a href="#contact" className={styles.contact_btn}>
              contact me
            </a>
            <div className={styles.social_links}>
              {socialLinks.map((link) => {
                return (
                  <a
                    href={link.url}
                    key={link.id}
                    target='_blank'
                    className={styles.social_link} rel="noreferrer"
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
        </article>
        <img src={homeImg}  alt="home ilustrations" loading="lazy" className={styles.home_img} />
      </section>
    </div>
  );
};

export default Main;
