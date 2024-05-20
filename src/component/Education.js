import React from "react";

import Styles from "./education.module.css";

function Education(){

  return (

    <div id="education" className={Styles.education_section}>

        <p className={Styles.education_heading}>
            EDUCATION
        </p>

        <div className={Styles.education_list}>

            <div className={Styles.left_div}>

                <div className={Styles.left_inner_div1}>

                    <p className={Styles.course1}>
                        Mechanical Engineering
                    </p>
                    <p className={Styles.campus_name}>
                        Sakthi Polytechnic College
                    </p>
                    <p className={Styles.campus_location}>
                        Sakthi Nagar, Erode
                    </p>
                    <p className={Styles.description}>
                        Attained a Diploma in Mechanical Engineering with Distinction, 
                        achieving an outstanding mark of <p className={Styles.mark}>88%</p>. 
                        Specialized in advanced concepts of design and manufacturing processes.
                    </p>

                </div>

                <div className={Styles.left_inner_div2}>
                    <p className={Styles.school_duration}>
                        2014 - 2016
                    </p>
                </div>

            </div>

            <div className={Styles.right_div}>

                <div className={Styles.right_inner_div1}>

                    <p className={Styles.college_duration}>
                        2016 - 2019
                    </p>

                </div>

                <div className={Styles.right_inner_div2}>

                    <p className={Styles.course2}>
                        Mathematics - Computer Science
                    </p>
                    <p className={Styles.campus_name}>
                        Govt. Boy's Higher Sec. School
                    </p>
                    <p className={Styles.campus_location}>
                        Anthiyur, Erode
                    </p>
                    <p className={Styles.description}>

                        Completed 12th grade with a specialization in Mathematics and Computer Science, 
                        demonstrating proficiency and dedication to these subjects.

                    </p>

                </div>

            </div>

        </div>
      
    </div>
  )
};

export default Education;
