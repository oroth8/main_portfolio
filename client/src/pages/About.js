import React from "react";
import hellweek from "../images/hellweek.png";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="body-2"
    >
      <Navbar />
      <section id="feature-section" className="feature-section-2">
        <div className="flex-container w-container">
          <div className="feature-image-mask">
            <img src={hellweek} alt="hellweek" className="feature-image" />
          </div>
          <div className="div-block-3">
            <h4 className="heading-4">GET TO KNOW ME</h4>
            <h1 className="heading-5">I&#x27;M OWEN ROTH</h1>
            <p className="paragraph-2">
              Selected as one of 72 candidates from a class 300+ people for the
              prestigious Navy SEAL training program. Spent 2 years in the Navy
              after being medically discharged due to injuries resulting from
              training. Attended Northwestern University Full-Stack Web
              Development Program. Became a Certified Salesforce Administrator
              working towards Platform App Builder and Developer Salesforce
              Certifications. Created system to streamline server pay at
              Trifecta Bar and Grill, resulting in time saved, and increased
              employee satisfaction. Helped generate 6.8% YOY growth in
              restaurant revenue by recalculating menu price points, cultivating
              positive relationships with clients and colleagues, leveraging
              user-generated content.
            </p>
            <div className="div-block-4 hide">
              <h4 className="info-heading">Age: 26</h4>
              <h4 className="info-heading">Phone: (847)-800-5666</h4>
              <h4 className="info-heading">Location: Chicago, IL</h4>
              <h4 className="info-heading">Github: oroth8</h4>
              <a
                id="w-node-9ede16908eb0-1086c41b"
                href="!#"
                className="about-btn btn-title w-button"
              >
                Download CV
              </a>
              <h4 className="info-heading">Degree: Economics</h4>
              <h4 className="info-heading">Language: English</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="resume">
        <h1 className="resume-heading title1">
          Education &amp; Certifications
        </h1>
        <h1 className="resume-heading title2">Experiences</h1>
        {/* <div className="resume-item"> */}
        <div className="resume-item-area navyseal">
          <h2 className="resume-title">United States Navy SEAL Candidate</h2>
          <h4 className="resume-h4">
            <strong className="bold-text">SAN DIEGO, CA</strong>
          </h4>
          <h4 className="resume-date">
            <strong className="bold-text-2">2018-2020</strong>
          </h4>
          <p className="resume-paragraph">
            Studied at Naval Special Warfare, San Diego, receiving an education
            in mental toughness, dive physics, basic combat patrolling, and
            attention to detail from decorated Navy SEALs.
            <br />
            Qualified to enter BUD/S Preparatory School and BUD/s selection by
            meeting physical and mental qualifications.
            <br />
            Secured Hell Week August 2nd 2019 as a squad (boat crew) leader: 5.5
            days(132 hours) of no sleep|240+ miles in boots/sand
          </p>
        </div>
        {/* </div> */}
        <div
          // id="w-node-49c5b11caad8-1086c41b"
          className="resume-item-area nu"
        >
          <h2 className="resume-title">
            Full Stack Web Developer Certification Program
          </h2>
          <h4 className="resume-h4">
            <strong className="bold-text">NORTHWESTERN UNIVERSITY</strong>
          </h4>
          <h4 className="resume-date">
            <strong className="bold-text-2">2020 - 2020</strong>
          </h4>
          <p className="resume-paragraph">
            Created over 20 detailed project repos while engaging daily in
            technology lessons full-time. Learned to collaborate on code in
            groups, debug, and develop projects from scratch. Check out my
            github profile for more information.
          </p>
        </div>
        <div
          //   id="w-node-b8ece355bd80-1086c41b"
          className="resume-item-area salesforce"
        >
          <h2 className="resume-title">
            Salesforce Certified Administrator Course
          </h2>
          <h4 className="resume-h4">
            <strong classNameName="bold-text">SALESFORCE TRAILHEAD</strong>
          </h4>
          <h4 className="resume-date">
            <strong className="bold-text-2">2020 - 2020</strong>
          </h4>
          <p className="resume-paragraph">
            Earned over 60 badges in trailhead. 5 Superbadges. More than 70,000
            trailhead points.
          </p>
        </div>
        <div
          //   id="w-node-c371913370bf-1086c41b"
          className="resume-item-area trifect"
        >
          <h2 className="resume-title">GENERAL MANAGER</h2>
          <h4 className="resume-h4">
            <strong className="bold-text">
              Trifecta Bar and Grill
              <br />
            </strong>
          </h4>
          <h4 className="resume-date">
            <strong className="bold-text-2">2017 - 2018</strong>
          </h4>
          <p className="resume-paragraph">
            Helped generate 6.8% YOY growth in restaurant revenue by
            recalculating menu price points.
            <br />
            Managed schedules and maintained inventory for the restaurant
            serving 350 customers daily.
            <br />
            Developed and executed marketing plans and determined menu pricing.
            <br />
            Tracked expenditures and revenues, recording necessary financial
            data.
            <br />
            Assisted in creating new menu items to maximize restaurant
            profitability.
          </p>
        </div>
        <div
          //   id="w-node-eaa73abf5996-1086c41b"
          className="resume-item-area wisco"
        >
          <h2 className="resume-title">
            <strong>B.A. in Economics with a Mathmatical Emphasis</strong>
          </h2>
          <h4 className="resume-h4">
            <strong className="bold-text">
              UNIVERSITY OF WISCONIN-MADISON
            </strong>
          </h4>
          <h4 className="resume-date">
            <strong className="bold-text-2">2015 - 2017</strong>
          </h4>
          <p className="resume-paragraph">
            Relevant Coursework: Econometrics, Advanced Calculus, Healthcare
            Economics, Statistics
            <br />
            Awards/Honors: Defensive Captain, BIG 10 Tournament Champions
            <br />
            Clubs/Activities: Men’s Varsity Lacrosse
            <br />
            Relevant Projects: Health Services Economic Research Assistant
          </p>
        </div>
        <div
          //   id="w-node-79d14fa09083-1086c41b"
          className="resume-item-area healthscape"
        >
          <h2 className="resume-title">Consulting Intern</h2>
          <h4 className="resume-h4">
            <strong className="bold-text">Healthscape Advisors</strong>
          </h4>
          <h4 className="resume-date">
            <strong className="bold-text-2">2020 - 2020</strong>
          </h4>
          <p className="resume-paragraph">
            Performed data analysis and prepared proposal for a government bid.
            <br />
            Evaluated and developed SWOT analysis for a proposed merger of two
            health insurance companies.
            <br />
            Collaborated with team members on the development of an internal
            business case, and white paper involving (MACRA) Medicare Access and
            CHIP Reauthorization Act.
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
