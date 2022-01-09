import React from "react";
import styles from "../assets/styles/service.module.css";
import ServiceElem from "./service/index";
import services from "../constants/services";

const Service = () => {
  return (
    <div className={styles.container}>
      <div className={styles.service_section}>
        {services.map((value) => {
          return (
            <ServiceElem
              icon={value.icon}
              desc={value.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Service;
