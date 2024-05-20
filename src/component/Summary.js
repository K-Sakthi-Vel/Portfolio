import React from "react"
import Styles from "./summary.module.css"

import ProfilePicture from "../assets/images/Sakthivel.jpg"
const Summary = () => {
  return (
    <div className={Styles.summary}>
        <img className={Styles.profile_pic} src={ProfilePicture} alt="Sakthivel"/>
        <p className={Styles.name}>K Sakthivel</p>
        <p className={Styles.role}>MERN Stack Web Developer</p>
        <p className={Styles.description}>Dynamic and enthusiastic, with a passion for technology and innovation. 
            Aspiring MERN Stack Web Developer with a strong foundation in both front-end and back-end technologies. 
            I thrive on crafting seamless, user-centric experiences by leveraging my expertise in 
            HTML, CSS, JavaScript and responsive design for the front end, as well as Node.js and various databases for the back end. 
            With a creative mindset and a problem-solving attitude, I am committed to continuous learning and eagerly embrace new technologies. 
            As an IT enthusiast, I am super excited to leverage my abilities in the tech industry.
        </p>
      
    </div>
  )
};

export default Summary;
