import React from "react";

import Styles from "./certificates.module.css";

import Excellence from "../assets/images/Excellence.png";

import Completion from "../assets/images/Completion.png";

import View from "../assets/images/open_app.png";

function Certificates(){

  return (

    <div id="certificates" className={Styles.certificates_section}>

        <p className={Styles.certificates_section_heading}>
            CERTIFICATES
        </p>
        <div className={Styles.certificates_list}>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    Python
                </p>

                <img className={Styles.emblem} src={Excellence} alt="Python"/>

                <div className={Styles.remark}>
                    Excellence
                </div>

                <a href="https://drive.google.com/file/d/1zI5Uip_o2cqGy7Ptta3jyuOGb8qE9pug/view?usp=drive_link" target="_blank">
                    <div className={Styles.open_link}>
                        <img src={View} alt="View"/>
                        View
                    </div>
                </a>
            </div>
            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    Data Structures and Algorithms
                </p>

                <img className={Styles.emblem} src={Excellence} alt="DSA"/>

                <div className={Styles.remark}>
                    Excellence
                </div>

                <a href="https://drive.google.com/file/d/1XAqwUS9h74k2VOdU6d6qlh7D9yB_x-Vl/view" target="_blank">
                    <div className={Styles.open_link}>
                        <img src={View} alt="View"/>
                        View
                    </div>
                </a>
            </div>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    Front-End Development
                </p>
                <img className={Styles.emblem} src={Excellence} alt="Front-End Development"/>

                <div className={Styles.remark}>Excellence</div>

                <a href="https://drive.google.com/file/d/1pruEpdC6avBONalpEie0JeLgPsHkLS3-/view" target="_blank">

                    <div className={Styles.open_link}>

                        <img src={View} alt="View"/>

                        View

                    </div>

                </a>

            </div>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    React
                </p>

                <img className={Styles.emblem} src={Completion} alt="React"/>

                <div className={Styles.remark}>
                    Completion
                </div>

                <a href="https://drive.google.com/file/d/1pHrKeHmwY76zRoer7R_D7cvm4MLx62UM/view" target="_blank">

                    <div className={Styles.open_link}>

                        <img src={View} alt="View"/>

                        View

                    </div>

                </a>

            </div>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    Back-End Development
                </p>
                <img className={Styles.emblem} src={Completion} alt="Back-End Development"/>

                <div className={Styles.remark}>
                    Completion
                </div>
                <a href="https://drive.google.com/file/d/1blbUsHL1I-Tb4BUp4Irjs-9yUPjiRohq/view" target="_blank">

                    <div className={Styles.open_link}>

                        <img src={View} alt="View"/>

                        View

                    </div>

                </a>

            </div>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    Database Management Systems
                </p>
                <img className={Styles.emblem} src={Completion} alt="Database Management Systems"/>

                <div className={Styles.remark}>
                    Completion
                </div>
                <a href="https://drive.google.com/file/d/1V4MOFZcXQfHHLtSMd2P129ieCBJHZ9KM/view" target="_blank">

                    <div className={Styles.open_link}>

                        <img src={View} alt="View"/>

                        View

                    </div>

                </a>

            </div>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    Operating Systems
                </p>
                <img className={Styles.emblem} src={Excellence} alt="Operating Systems"/>

                <div className={Styles.remark}>
                    Excellence
                </div>

                <a href="https://drive.google.com/file/d/1elP5ODIecsJX3xgqQxlimjF4l28enDok/view" target="_blank">

                    <div className={Styles.open_link}>

                        <img src={View} alt="View"/>

                        View

                    </div>

                </a>

            </div>

            <div className={Styles.certificate}>

                <p className={Styles.chapter_name}>
                    System Design
                </p>

                <img className={Styles.emblem} src={Excellence} alt="System Design"/>

                <div className={Styles.remark}>
                    Excellence
                </div>

                <a href="https://drive.google.com/file/d/1BWBc5DJWw5hypyNalt4Viy1vyVjhCOlv/view" target="_blank">

                    <div className={Styles.open_link}>

                        <img src={View} alt="View"/>

                        View

                    </div>

                </a>

            </div>

        </div>
      
    </div>
  )
};

export default Certificates;
