import React from "react";
import styles from "../assets/styles/contact.module.css";
import ContactElem from "./contact/index";
import contacts from "../constants/contacts";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact_section}>
        {contacts.map((value) => {
          return (
            <ContactElem
              icon={value.icon}
              title={value.title}
              value={value.text}
            />
          );
        })}
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
