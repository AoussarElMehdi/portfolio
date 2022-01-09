import React from 'react'
import styles from './index.module.css'

const ContactElem = ({icon, title, value}) => {
    return (
        <div className={styles.contact}>
            <div className={styles.box}>{icon}</div>
            <span className={styles.contact_title}>{title}</span>
            <p>{value}</p>
        </div>
    );
}
 
export default ContactElem;