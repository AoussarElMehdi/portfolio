import React from 'react'
import styles from './index.module.css'

const ServiceElem = ({icon, desc}) => {
    return (
        <div className={styles.service}>
            {icon}
            <p>{desc}</p>
        </div>
    );
}
 
export default ServiceElem;