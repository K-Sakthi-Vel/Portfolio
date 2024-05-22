import React from "react"
import Styles from "./projects.module.css";

import SakthiStores from "../assets/projects/SakthiStores.png";

import Authenticatia from "../assets/projects/Authenticatia.png";

import HeyTHERE from "../assets/projects/HeyTHERE.png";

import WeathaQuest from "../assets/projects/WeathaQuest.png";

import Filmocean from "../assets/projects/Filmocean.png";

import Habicter from "../assets/projects/Habicter.png";

import Todoaster from "../assets/projects/Todoaster.png";

import PicaQuest from "../assets/projects/PicaQuest.png";

import Doraemon from "../assets/projects/DoraemonAI.png";

import Open_app from "../assets/images/open_app.png";

import Open_git from "../assets/images/github.png"
function Projects (){
  return (
    <div id="projects" className={Styles.project_section}>
        <p className={Styles.heading_projects}>PROJECTS</p>
        <div className={Styles.projects_list}>
            {/* SAKTHI STORES */}
            <div className={`${Styles.project} ${Styles.SS_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.SS_app_img}`} src={SakthiStores}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.SS_app_name}`}>Sakthi Stores</p>
                        <p className={Styles.app_desc}>
                            ⭐Amidst the digitalization trend, 
                            I crafted an e-commerce website. 
                            Users can effortlessly browse and purchase products after signing in. 
                            Administrators have access to a dedicated login to manage stocks and product details.
                            <br></br>
                            ⭐Bootstrap utilized for UI, MVC architecture employed for scalable development, 
                            Express.js ontop of Node.js for server construction.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                HTML
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                CSS
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                JavaScript
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                Node.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                Express.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                MongoDB
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                Bootstrap
                            </span>
                            <span className={`${Styles.tech} ${Styles.SStech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.SSarchitecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.SSarchitecture}`}>
                                MVC
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.SSopen_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://sakthi-stores.onrender.com/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.SSopen_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/Sakthi-Stores" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* AUTHENTICATIA */}
            <div className={`${Styles.project} ${Styles.A_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.A_app_img}`} src={Authenticatia}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.A_app_name}`}>Authenticatia</p>
                        <p className={Styles.app_desc}>
                            ⭐Fabricated a social media application, The app allows public posts, enabling users to share photos and statuses, 
                            while also facilitating interactions such as liking, commenting, and sharing posts.
                            <br></br>
                            ⭐Ensured optimal user experience and enhanced page responsiveness. 
                            Application adheres to MVC scalable folder structure. 
                            Server architecture comprises Express.js layered atop Node.js.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                HTML
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                CSS
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                JavaScript
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                Node.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                Express.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                MongoDB
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                Bootstrap
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                Passport.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                OAuth2
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                Noty.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.A_tech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.A_architecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.A_architecture}`}>
                                MVC
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.A_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://authenticatia.onrender.com/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.A_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/Authenticatia" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* Doraemon AI */}
            <div className={`${Styles.project} ${Styles.D_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.D_app_img}`} src={Doraemon}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.D_app_name}`}>DoraemonAI</p>
                        <p className={Styles.app_desc}>
                            ⭐DoraemonAi is a generative ai application powered by gemini-pro and 
                            it is capable of answering question that asked by users.
                            <br></br>
                            ⭐I facilate streamlit python framework for build my AI application and i make use of
                            highly powered ai model google's gemini-pro to ensure seamless conversation experience to users.

                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.D_tech}`}>
                                Python
                            </span>
                            <span className={`${Styles.tech} ${Styles.D_tech}`}>
                                Streamlit
                            </span>
                            <span className={`${Styles.tech} ${Styles.D_tech}`}>
                                Google's Generative AI
                            </span>
                            <span className={`${Styles.tech} ${Styles.D_tech}`}>
                                Google Colaborative
                            </span>
                        
                        </div>
                        <p className={Styles.tech_stack_title}>AI Model</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.D_architecture}`}>
                                Gemini-PRO
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.D_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://doraemonai-gen001.streamlit.app/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.D_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/Doraemon-AI" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* HeyTHERE */}
            <div className={`${Styles.project} ${Styles.H_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.H_app_img}`} src={HeyTHERE}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.H_app_name}`}>HeyTHERE</p>
                        <p className={Styles.app_desc}>
                            ⭐The world is immersed in the online platform, 
                            so constructed a chat application enabling global connectivity. 
                            It emphasizes superior user experience and page responsiveness.
                            <br></br>
                            ⭐Established React Router for seamless
                             page navigation and integrated Redux Toolkit for advanced state management across the application.
                             Utilized React hooks to manage component lifecycle efficiently
                             <br></br>
                            ⭐Facilized bi-directional
                            communication between user's utilizing Socket.io via the Transmission Control Protocol(TCP).

                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                React
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                Node.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                Express.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                Socket.io
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                JSX
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                Redux Toolkit
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                CSS Modules
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                React Hooks
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                React Router
                            </span>
                            <span className={`${Styles.tech} ${Styles.H_tech}`}>
                                Create React App
                            </span>
                        
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.H_architecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.H_architecture}`}>
                                Component-Based
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.H_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://heythere-1xgo.onrender.com/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.H_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/HeyTHERE" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* WeathaQuest */}
            <div className={`${Styles.project} ${Styles.W_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.W_app_img}`} src={WeathaQuest}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.W_app_name}`}>WeathaQuest</p>
                        <p className={Styles.app_desc}>
                            ⭐WeathaQuest, your comprehensive weather companion delivering real-time
                             updates, hourly, daily, and weekly forecasts, advanced radar maps 
                             and users can see weather of their desired location.
                            <br></br>
                            ⭐Implemented modular design by dividing the application into functional components, 
                            reducing UI complexity. Utilized React hooks to manage component lifecycle efficiently.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                React
                            </span>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                JSX
                            </span>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                Redux Toolkit
                            </span>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                CSS Modules
                            </span>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                React Hooks
                            </span>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                Create React App
                            </span>
                            <span className={`${Styles.tech} ${Styles.W_tech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.W_architecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.W_architecture}`}>
                                Component-Based
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.W_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://weatha-quest.vercel.app/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.W_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/WeathaQuest" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* FilmOcean */}
            <div className={`${Styles.project} ${Styles.F_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.F_app_img}`} src={Filmocean}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.F_app_name}`}>Filmocean</p>
                        <p className={Styles.app_desc}>
                            ⭐Filmocean, Your ultimate destination for all things cinema! 
                            Dive into our app to explore an extensive database of movies and TV shows. 
                            stay updated with the latest releases.
                            <br></br>
                            ⭐Ensured optimal user experience and enhanced page responsiveness. 
                            Included add to favotire option users can save their favorite movies. Utilized OMDB open source API for movie results.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                HTML
                            </span>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                CSS
                            </span>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                JavaScript
                            </span>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                Bootstrap
                            </span>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                OMDB Api
                            </span>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                Local Storage
                            </span>
                            <span className={`${Styles.tech} ${Styles.F_tech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.F_architecture}`}>
                                Monolithic
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.F_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://filmocean.vercel.app/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.F_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/Filmocean" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* PicaQuest */}
            <div className={`${Styles.project} ${Styles.P_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.P_app_img}`} src={PicaQuest}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.P_app_name}`}>PicaQuest</p>
                        <p className={Styles.app_desc}>
                            ⭐Picture Quest is an innovative mobile application designed to revolutionize
                             the way people explore and discover the world around them
                              through interactive visual challenges.
                            <br></br>
                            ⭐The application combines elements of gaming, photography, 
                            and exploration to create an engaging and immersive experience for users of all ages.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                        <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                React
                            </span>
                            <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                JSX
                            </span>
                            <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                Redux Toolkit
                            </span>
                            <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                CSS Modules
                            </span>
                            <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                React Hooks
                            </span>
                            <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                Create React App
                            </span>
                            <span className={`${Styles.tech} ${Styles.P_tech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.P_architecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.P_architecture}`}>
                                Component-Based
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.P_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://picaquest.vercel.app/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.P_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/PicaQuest" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* Habicter */}
            <div className={`${Styles.project} ${Styles.HB_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.HB_app_img}`} src={Habicter}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.HB_app_name}`}>Habicter</p>
                        <p className={Styles.app_desc}>
                            ⭐It is really appreciated to keep our habits in our sight, daily basis it is difficult to manage ourhabits imaginarily, 
                            so built an habit tracking application to keep tracking users great habits ondaily basis.
                            <br></br>
                            ⭐Application developed over MVC scalable folder structure, Server built using Express.js on top of Node.js.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                HTML
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                CSS
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                JavaScript
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                Node.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                Express.js
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                MongoDB
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                Bootstrap
                            </span>
                            <span className={`${Styles.tech} ${Styles.HB_tech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.HB_architecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.HB_architecture}`}>
                                MVC
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.HB_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.HB_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/Habicter" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* Todoaster */}
            <div className={`${Styles.project} ${Styles.T_project}`} >
                <div className={Styles.project_details_div}>
                    <img className={`${Styles.app_img} ${Styles.T_app_img}`} src={Todoaster}/>
                    <div className={Styles.project_details}>
                        <p className={`${Styles.app_name} ${Styles.T_app_name}`}>Todoaster</p>
                        <p className={Styles.app_desc}>
                            ⭐Streamline your tasks effortlessly with our Todoaster app!
                             Experience seamless organization with features designed to enhance productivity. 
                             From creating tasks to prioritizing and tracking progress.
                            <br></br>
                            ⭐Included pop up messages on adding or removing task, Ensured better user experience
                             and page responsiveness to cover diverse of users.
                        </p>
                        <p className={Styles.tech_stack_title}>Tech Stack</p>
                        <div className={Styles.tech_list}>
                            <span className={`${Styles.tech} ${Styles.T_tech}`}>
                                HTML
                            </span>
                            <span className={`${Styles.tech} ${Styles.T_tech}`}>
                                CSS
                            </span>
                            <span className={`${Styles.tech} ${Styles.T_tech}`}>
                                JavaScript
                            </span>
                            <span className={`${Styles.tech} ${Styles.T_tech}`}>
                                Bootstrap
                            </span>
                            <span className={`${Styles.tech} ${Styles.T_tech}`}>
                                Local Storage
                            </span>
                            <span className={`${Styles.tech} ${Styles.T_tech}`}>
                                Visual Studio Code
                            </span>
                        </div>
                        <p className={Styles.tech_stack_title}>Architecture's</p>
                        <div className={Styles.architecture_list}>
                            <span className={`${Styles.architecture} ${Styles.T_architecture}`}>
                                Monolithic
                            </span>
                            <span className={`${Styles.architecture} ${Styles.T_architecture}`}>
                                MVC
                            </span>
                        </div>

                    </div>

                </div>
                <div className={Styles.access_app}>
                    <div className={`${Styles.open_app} ${Styles.T_open_app}`}>
                        <img src={Open_app} alt="open"/>
                        &nbsp;
                        <a href="https://todoaster.vercel.app/" target="_blank">
                            Open app
                        </a>
                    </div>
                    <div className={`${Styles.open_code} ${Styles.T_open_code}`}>
                        <img src={Open_git} alt="open"/>
                        &nbsp;
                        <a href="https://github.com/K-Sakthi-Vel/Todoaster" target="_blank">
                            Source code
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Projects;
