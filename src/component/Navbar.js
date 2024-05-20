import Styles from "./navbar.module.css";

import Profile from "../assets/images/Sakthivel.jpg";

function Navbar(props){

  const {scrollHeight} = props;
 

  return (
    <>
    <div className={Styles.navbar}>
      <div className={Styles.profile_and_name}>
      {
        scrollHeight>=900?
          <img className={Styles.profile_pic} src={Profile} alt="Pic"/>
          :
          null
      }
      <p className={Styles.portfolio_name}>Portfolio</p>
      </div>
      
      <div className={Styles.quick_links}>
        <div className={Styles.scroll_to} onClick={()=>{
          const element = document.querySelector("#skills");
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }}>
          SKILLS
        </div>
        <div className={Styles.scroll_to} onClick={()=>{
          const element = document.querySelector("#projects");
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }}>
          PROJECTS
        </div>
        <div className={Styles.scroll_to} onClick={()=>{
          const element = document.querySelector("#education");
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }}>
          EDUCATION
        </div>
        <div className={Styles.scroll_to} onClick={()=>{
          const element = document.querySelector("#course");
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }}>
          COURSE
        </div>
        <div className={Styles.scroll_to} onClick={()=>{
          const element = document.querySelector("#certificates");
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }}>
          CERTIFICATES
        </div>
        <div className={Styles.scroll_to} onClick={()=>{
          const element = document.querySelector("#find_me_in");
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }}>
          FIND ME IN
        </div>
      </div>
    </div>
    </>
  )
};

export default Navbar;
