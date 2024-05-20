import React from "react";

import Styles from "./skills.module.css";

import Python from "../assets/skills/Python.png"

import JavaScript from "../assets/skills/JavaScript.png";

import React_js from "../assets/skills/React.png";

import Node_js from "../assets/skills/Node.js.png";

import Express from "../assets/skills/Express.png";

import HTML from "../assets/skills/HTML.png";

import CSS from "../assets/skills/CSS.png";

import MongoDB from "../assets/skills/MongoDB.png";

import Firebase from "../assets/skills/Firebase.png";

import MySQL from "../assets/skills/MySQL.png";

import DBMS from "../assets/skills/DBMS.png";

import Bootstrap from "../assets/skills/Bootstrap.png";

import Redux from "../assets/skills/Redux.png";

import jQuery from "../assets/skills/jQuery.png";

import SystemDesign from "../assets/skills/SystemDesign.png";

import OperatingSystems from "../assets/skills/OperatingSystems.png";

// import JavaScript from "../assets/skills/JavaScript.png";


function Skills(){
  return (
    <div id="skills" className={Styles.skills_section}>
      <p className={Styles.heading_skills}>SKILLS</p>
      <div className={Styles.skills_list}>
        <div className={Styles.skill}>
          <img className={Styles.python_image} src={Python} alt="Python"/>

          <p className={Styles.skill_name}>Python</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.javascript_image} src={JavaScript} alt="JavaScript"/>
          
          <p className={Styles.skill_name}>JavaScript</p>
 
        </div>
        <div className={Styles.skill}>
          <img className={Styles.react_image} src={React_js} alt="React"/>
          
          <p className={Styles.skill_name}>React</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.html_image} src={HTML} alt="HTML"/>
          
          <p className={Styles.skill_name}>HTML</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.css_image} src={CSS} alt="CSS"/>
          
          <p className={Styles.skill_name}>CSS</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.bootstrap_image} src={Bootstrap} alt="Bootstrap"/>
          
          <p className={Styles.skill_name}>Bootstrap</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.redux_image} src={Redux} alt="Redux"/>
          
          <p className={Styles.skill_name}>Redux</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.node_js_image} src={Node_js} alt="Node.js"/>
          
          <p className={Styles.skill_name}>Node.js</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.express_image} src={Express} alt="Express.js"/>
          
          <p className={Styles.skill_name}>Express</p>

        </div>

        <div className={Styles.skill}>
          <img className={Styles.mongodb_image} src={MongoDB} alt="MongoDB"/>
          
          <p className={Styles.skill_name}>MongoDB</p>

        </div>

        <div className={Styles.skill}>
          <img className={Styles.firebase_image} src={Firebase} alt="Firebase"/>
          
          <p className={Styles.skill_name}>Firebase</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.mysql_image} src={MySQL} alt="MySQL"/>
          
          <p className={Styles.skill_name}>MySQL</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.dbms_image} src={DBMS} alt="DBMS"/>
          
          <p className={Styles.skill_name}>DBMS</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.jquery_image} src={jQuery} alt="jQuery"/>
          
          <p className={Styles.skill_name}>jQuery</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.systemdesign_image} src={SystemDesign} alt="SystemDesign"/>
          
          <p className={Styles.skill_name} style={{fontSize:"1.3rem",marginBottom:"35px"}}>System Design</p>

        </div>
        <div className={Styles.skill}>
          <img className={Styles.operatingsystem_image} src={OperatingSystems} alt="OperatingSystems"/>
          
          <p className={Styles.skill_name} style={{fontSize:"1rem",marginBottom:"40px"}}>Operating Systems</p>

        </div>
      </div>
      
    </div>
  )
};

export default Skills;
