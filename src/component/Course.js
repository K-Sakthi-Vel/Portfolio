import React from "react";

import Styles from "./course.module.css";

function Course(){

  return (

    <div id="course" className={Styles.course_section}>

        <p className={Styles.course_heading}>
          COURSE
        </p>

        <div className={Styles.course_list}>

            <div className={Styles.course_1}>

                <p className={Styles.course_name}>
                  MERN Stack Web Development
                </p>
                <p className={Styles.course_centre}>
                  Coding Ninjas
                </p>
                <p className={Styles.course_duration}>
                  Dec 2022 - Feb 2024
                </p>
                <p className={Styles.course_chapter_title}>
                  Chapter's
                </p>
                <div className={Styles.chapters_list}>

                    <span className={Styles.chapter}>
                      Data Structures and Algorithms
                    </span>
                    <span className={Styles.chapter}>
                      Front-End Development
                    </span>
                    <span className={Styles.chapter}>
                      React
                    </span>
                    <span className={Styles.chapter}>
                      Operating Systems
                    </span>
                    <span className={Styles.chapter}>
                      Back-End Development
                    </span>
                    <span className={Styles.chapter}>
                      Database's
                    </span>
                    <span className={Styles.chapter}>
                      Database Management Systems
                    </span>
                    <span className={Styles.chapter}>
                      System Design
                    </span>

                </div>

                <p className={Styles.description}>

                  Completed the MERN stack web development course at Coding Ninjas with consistent scores surpassing 80% in each chapter. 
                  Proficient in MongoDB, Express.js, React.js, and Node.js, 
                  poised to apply comprehensive expertise to advance impactful web development projects.

                </p>
                    
            </div>
            
        </div>
      
    </div>
  )
};

export default Course;
