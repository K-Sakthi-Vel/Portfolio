import React, { createRef } from "react";

import Styles from "./footer.module.css";

function Footer (){

  const nameRef = createRef();
  const mailRef = createRef();
  const msgRef = createRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    nameRef.current.value =''
    mailRef.current.value =''
    msgRef.current.value =''

  }

  return (

    <div id="footer" className={Styles.footer_section}>

        <p className={Styles.say_thanks}>
          Thanks for viewing my Portfolio
        </p>

        <p className={Styles.lets_connect}>
          Let's Connect
        </p>

        <div className={Styles.contact}>
          <form onSubmit={handleSubmit}>
            <input ref={nameRef} placeholder="Sweet name"/>

            <input ref={mailRef} placeholder="Email"/>

            <textarea ref={msgRef} placeholder="Type a message!!!"></textarea>

            <button type="submit">
              Dispatch message
            </button>
          </form>
        </div>

        <p className={Styles.copyright}>
          @2024 Anthiyur, Erode, Inc. All rights reserved.
        </p>
      
    </div>

  )

};

export default Footer;
