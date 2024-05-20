import React from "react";

import Styles from "./findme.module.css";

import Github from "../assets/findme/Github.png";

import Code360 from "../assets/findme/Code360.png";

import Linkedin from "../assets/findme/Linkedin.png";

import Gmail from "../assets/findme/Gmail.png";

import Facebook from "../assets/findme/Facebook.png";

import Instagram from "../assets/findme/Instagram.png";

import Leetcode from "../assets/findme/Leetcode.png";



function Findme (){

  return (

    <div id="find_me_in" className={Styles.findme_section}>

        <p className={Styles.findme_heading}>
            FIND ME
        </p>

        <div className={Styles.findme_list}>

            <div className={Styles.Github}>

                <a href="https://github.com/sakthivel-programmer" target="_blank">

                    <img src={Github} alt="Github"/>

                </a>

            </div>

            <div className={Styles.Code360}>

                <a href="https://www.naukri.com/code360/profile/coder_sakthi" target="_blank">

                    <img src={Code360} alt="Code360"/>
                </a>
            </div>

            <div className={Styles.Linkedin}>

                <a href="https://www.linkedin.com/in/k-sakthivel/" target="_blank">

                    <img src={Linkedin} alt="Linkedin"/>

                </a>

            </div>

            <div className={Styles.Leetcode}>

                <a href="https://leetcode.com/u/K_SAKTHIVEL/" target="_blank">

                    <img src={Leetcode} alt="Leetcode"/>
                </a>
            </div>

            <div className={Styles.Gmail}>

                <a href="mailto:klsakthi333@gmail.com" target="_blank">

                    <img src={Gmail} alt="Gmail"/>

                </a>

            </div>

            <div className={Styles.Facebook}>

                <a href="https://www.facebook.com/KLSakthi.333/" target="_blank">

                    <img src={Facebook} alt="Facebook"/>

                </a>

            </div>

            <div className={Styles.Instagram}>

                <a href="https://www.instagram.com/haha__sakthi/" target="_blank">

                    <img src={Instagram} alt="Instagram"/>

                </a>

            </div>

        </div>

    </div>

  )

};

export default Findme;
