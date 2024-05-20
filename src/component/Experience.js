import React from "react";

import Styles from "./experience.module.css";

import Rocket from "../assets/images/rocket.png";

import open_link from "../assets/images/open_link.png";

function Experience(){

  return (

    <div id="experience" className={Styles.experience_section}>

        <p className={Styles.heading_projects}>
            EXPERIENCE
        </p>
        <div className={Styles.experience_div}>

            <div className={Styles.left_div}>

                <div className={Styles.left_inner_div1}>
                    <p className={Styles.company_name_quest}>
                        Quest Global Engineering Services
                    </p>
                </div>
                <div className={Styles.left_inner_div2}>

                    <span className={Styles.job_role}>
                        Design Engineer
                    </span>

                    <br></br>

                    <span className={Styles.location}>
                        Bangalore
                    </span>

                    <br></br>

                    <span className={Styles.job_duration}>
                        May 2021 - Oct 2023
                    </span>

                    <br></br>  

                    <div className={Styles.resposibility}>

                        <p>⭐Played a pivotal role in the Research and Development department, 
                            specializing inconceptual 3D modeling, detailing, andassembly for off-road machines using CREO.</p>

                        <p>⭐Oversaw 120+ sub-assembly and 7+ fullmachine Bill Of Materials, while efficiently managing stock operations with SAP.</p>

                        <p>⭐Lead the Design team on PLM leveraging Windchill and SAP for Bill Of Materials.</p>

                    </div>

                    <p className={Styles.products_worked_title}>
                        Product's worked on
                    </p>

                    <div className={Styles.products_list}>

                        <span className={Styles.work_product_cadopt}>
                            Motor Grader- 32Ton
                        </span>

                        <span className={Styles.work_product_cadopt}>
                            Motor Grader- 15Ton
                        </span>

                        <span className={Styles.work_product_cadopt}>
                            Motor Grader- 20Ton
                        </span>

                        <span className={Styles.work_product_cadopt}>
                            Crawler Drill Rig - 32Ton
                        </span>

                        <span className={Styles.work_product_cadopt}>
                            Water Sprayer - 12Ton
                        </span>

                        <span className={Styles.work_product_cadopt}>
                            Container Handler's
                        </span>

                    </div>

                    <p className={Styles.skills_title}>
                        Skill's
                    </p>

                    <div className={Styles.products_list}>

                        <span className={Styles.skills_cadopt}>
                            CREO
                        </span>

                        <span className={Styles.skills_cadopt}>
                            Windchill - PLM
                        </span>

                        <span className={Styles.skills_cadopt}>
                            S A P
                        </span>

                        <span className={Styles.skills_cadopt}>
                            Draft Sight
                        </span>

                        <span className={Styles.skills_cadopt}>
                            Bill of Materials
                        </span>

                        <span className={Styles.skills_cadopt}>
                            Product Lifecycle Management
                        </span>

                    </div>
                    
                    <div className={Styles.company_profile}>

                        <a href="https://www.quest-global.com/" target="_blank">

                            <img className={Styles.open_link} src={open_link} alt="profile"/>

                        </a>

                    </div>

                </div>

            </div>

            <img src={Rocket} className={`${Styles.rocket}`} alt="Rocket"/>

            <div className={Styles.right_div}>

                <div className={Styles.right_inner_div1}>

                    <span className={Styles.job_role}>
                        Trainee Engineer
                    </span>

                    <br></br>

                    <span className={Styles.location}>
                        Bangalore
                    </span>

                    <br></br>

                    <span className={Styles.job_duration}>
                        Aug 2019 - Oct 2020
                    </span>

                    <br></br>  

                    <div className={Styles.resposibility}>

                        <p>⭐Engineered permanent and retrieval packers for the oil and gas sector utilizing SolidWorks and Autodesk Inventor design tools.</p>
                        
                        <p>⭐Focused on 15+ task included test procedure writing, failure analysis & drawing checking.</p>

                    </div>

                    <div className={Styles.company_profile}>

                        <a href="https://www.quest-global.com/" target="_blank">

                            <img className={Styles.open_link} src={open_link} alt="profile"/>

                        </a>

                    </div>

                    <p className={Styles.products_worked_title}>
                        Product's worked on
                    </p>

                    <div className={Styles.products_list}>

                        <span className={Styles.work_product_quest}>
                            Permanent Packer
                        </span>

                        <span className={Styles.work_product_quest}>
                            Retrieval Packer
                        </span>

                        <span className={Styles.work_product_quest}>
                            Fixture Design
                        </span>

                        <span className={Styles.work_product_quest}>
                            Crude Oil Pump's
                        </span>

                    </div>

                    <p className={Styles.skills_title}>
                        Skill's
                    </p>

                    <div className={Styles.products_list}>

                        <span className={Styles.skills_quest}>
                            Autodesk Inventor
                        </span>

                        <span className={Styles.skills_quest}>
                            SolidWorks
                        </span>

                        <span className={Styles.skills_quest}>
                            3D Modeling
                        </span>

                        <span className={Styles.skills_quest}>
                            Procdure Writing
                        </span>

                        <span className={Styles.skills_quest}>
                            Drawing Checking
                        </span>

                        <span className={Styles.skills_quest}>
                            Stress Analysis
                        </span>

                    </div>

                </div>

                <div className={Styles.right_inner_div2}>
                    <p className={Styles.company_name_cadopt}>
                        CADOpt Technologies
                    </p>
                </div>

            </div>
            
            <div className={`${Styles.dot_div} ${Styles.dot_div1}`}>
                2019
            </div>

            <div className={`${Styles.dot_div} ${Styles.dot_div2}`}>

                <p>2021</p>

            </div>
            
        </div>
      
    </div>
  )
};

export default Experience;
