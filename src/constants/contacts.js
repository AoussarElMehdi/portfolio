import React from "react"
import { IoLocationOutline } from "react-icons/io5"
import { IoIosMail } from "react-icons/io"
import { ImPhone } from "react-icons/im"
import {FaLinkedinIn} from 'react-icons/fa'
import styles from "../assets/styles/contact.module.css";

const contacts = [
  {
    id: 1,
    icon: <IoLocationOutline className={styles.contact_icons}/>,
    title: "Address",
    text: 'Sale , Hay Al Amal Karia Morroco',
  },
  {
    id: 2,
    icon: <IoIosMail className={styles.contact_icons} />,
    title: "Phone Number",
    text: '+212 (0) 7 62 72 70 34',
  },
  {
    id: 3,
    icon: <ImPhone className={styles.contact_icons}/>,
    title: "Email Address",
    text: 'elmehdiaoussar.contact@gmail.com',
  },
  {
    id: 4,
    icon: <FaLinkedinIn className={styles.contact_icons} />,
    title: "LinkedIn",
    text: 'elmehdiaoussar',
  },
]

export default contacts