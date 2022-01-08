import React from "react"
import {
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa"

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/elmehdiaoussar/",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/AoussarElMehdi",
  }
]

const cvUrl = "https://drive.google.com/file/d/1zEclnr2Taha0KF773hPEXBxOq5ZixlH6/view?usp=sharing"

export { socialLinks, cvUrl }