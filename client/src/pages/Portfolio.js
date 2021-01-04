import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// images
import devcon from "../images/DevConnector.png";
import reactport from "../images/readme.png";
import ecom from "../images/screenshot.PNG";
import github from "../images/githubfinderss.png";
import explorer from "../images/Screenshotexplorer.png";
import contactkeep from "../images/CKscreenshot.png";

import { motion } from "framer-motion";
import { pageAnimation, stagRL, stagLR } from "../Animation";

const Portfolio = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="body-3"
    >
      <Navbar />
      <section id="cards-section" className="cards-section">
        <div className="centered-container w-container">
          <h2 className="project-title">MY PROJECTS</h2>
          <p className="project-paragraph">
            This is a collection of various projects I have personally made or
            contributed to. The projects listed below are featured projects
            chose by me. A full list of my projects and more information about
            them can be seen on my Github page. Feel free to contact me about
            any questions, issues, or contribution requests.
          </p>
          <div className="cards-grid-container">
            <motion.div variants={stagRL} id="w-node-84ac4a2cc32b-358a15f7">
              <div className="cards-image-mask">
                <img
                  src={devcon}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 229.33334350585938px, 286.66668701171875px"
                  srcset={`${devcon} 500w, ${devcon} 800w, ${devcon} 1080w, ${devcon} 1600w, ${devcon} 3840w`}
                  alt="DevConnector"
                  className="cards-image"
                />
              </div>
              <h3 className="card-title">Developer Connector</h3>
              <p className="card-paragraph">
                A MERN stack social media application. Create a developer
                profile, post, comment, and like. A Facebook clone for
                developers.
                <span className="project-icons">
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fab fa-github"
                    ></motion.i>
                  </a>
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fas fa-external-link-alt"
                    ></motion.i>
                  </a>
                </span>
              </p>
            </motion.div>
            <motion.div variants={stagRL} id="w-node-84ac4a2cc332-358a15f7">
              <div className="cards-image-mask">
                <img
                  src={reactport}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 229.33334350585938px, 286.66668701171875px"
                  srcset={`${reactport} 500w, ${reactport} 800w, ${reactport} 1080w, ${reactport} 1376w`}
                  alt="react-portfolio"
                  className="cards-image"
                />
              </div>
              <h3 id="w-node-84ac4a2cc335-358a15f7" className="card-title">
                Dynamic React Portfolio
              </h3>
              <p id="w-node-84ac4a2cc337-358a15f7" className="card-paragraph">
                An example of another custom, personal portfolio website created
                using react. Uses frame-motion animations and styled components.
                <span className="project-icons">
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fab fa-github"
                    ></motion.i>
                  </a>
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fas fa-external-link-alt"
                    ></motion.i>
                  </a>
                </span>
              </p>
            </motion.div>
            <motion.div variants={stagRL} id="w-node-84ac4a2cc339-358a15f7">
              <div className="cards-image-mask">
                <img
                  src={ecom}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 229.33334350585938px, 286.66668701171875px"
                  srcset={`${ecom} 500w, ${ecom} 800w, ${ecom} 978w`}
                  alt=""
                  className="cards-image"
                />
              </div>
              <h3 id="w-node-84ac4a2cc33c-358a15f7" className="card-title">
                E-commerce Store
              </h3>
              <p id="w-node-84ac4a2cc33e-358a15f7" className="card-paragraph">
                An e-commerce site that utilizes SQL and handlebars engine. This
                site is similar to amazon and has a admin dashboard.
                <span className="project-icons">
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fab fa-github"
                    ></motion.i>
                  </a>
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fas fa-external-link-alt"
                    ></motion.i>
                  </a>
                </span>
              </p>
            </motion.div>
          </div>
          <div className="cards-grid-container">
            <motion.div variants={stagLR} id="w-node-d38d16c32e04-358a15f7">
              <div className="cards-image-mask">
                <img
                  src={github}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 229.33334350585938px, 286.66668701171875px"
                  srcset={`${github} 500w, ${github} 800w, ${github} 1080w, ${github} 1600w, ${github} 2000w, ${github} 2543w`}
                  alt="github-finder"
                  className="cards-image"
                />
              </div>
              <h3 className="card-title">Github Finder</h3>
              <p className="card-paragraph">
                Find Github accounts, view repos, and see other Github
                information in one, convenient application. MERN Stack.
                <br />
                <span className="project-icons">
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      id="gf-icon"
                      className="fab fa-github"
                    ></motion.i>
                  </a>
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fas fa-external-link-alt"
                    ></motion.i>
                  </a>
                </span>
              </p>
            </motion.div>
            <motion.div variants={stagLR} id="w-node-d38d16c32e0b-358a15f7">
              <div className="cards-image-mask">
                <img
                  src={explorer}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 229.33334350585938px, 286.66668701171875px"
                  srcset={`${explorer} 500w, ${explorer} 800w, ${explorer} 1080w, ${explorer} 1600w, ${explorer} 1861w`}
                  alt="explorer-game"
                  className="cards-image"
                />
              </div>
              <h3 id="w-node-d38d16c32e0e-358a15f7" className="card-title">
                Explorer Game
              </h3>
              <p id="w-node-d38d16c32e10-358a15f7" className="card-paragraph">
                An educational MERN stack game create for the final project of
                my Northwestern University course. Uses custom built API, JSON
                Webtoken, and bcryptJS for encryption.
                <span className="project-icons">
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fab fa-github"
                    ></motion.i>
                  </a>
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fas fa-external-link-alt"
                    ></motion.i>
                  </a>
                </span>
              </p>
            </motion.div>
            <motion.div variants={stagLR} id="w-node-d38d16c32e12-358a15f7">
              <div className="cards-image-mask">
                <img
                  src={contactkeep}
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 229.33334350585938px, 286.66668701171875px"
                  srcset={`${contactkeep} 500w, ${contactkeep} 800w, ${contactkeep} 1080w, ${contactkeep} 1600w, ${contactkeep} 2000w, ${contactkeep} 2560w`}
                  alt="contact-keeper"
                  className="cards-image"
                />
              </div>
              <h3 id="w-node-d38d16c32e15-358a15f7" className="card-title">
                Contact Keeper
              </h3>
              <p id="w-node-d38d16c32e17-358a15f7" className="card-paragraph">
                A MERN stack application that uses various technologies and
                dynamic elements to store/create contacts.
                <br />
                <span className="project-icons">
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      id="ck-icon"
                      className="fab fa-github"
                    ></motion.i>
                  </a>
                  <a href="!#">
                    <motion.i
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                      className="fas fa-external-link-alt"
                    ></motion.i>
                  </a>
                </span>
              </p>
            </motion.div>
          </div>
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/oroth8"
          className="btn-title btn-project w-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </motion.a>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
