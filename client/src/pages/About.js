import React, { Fragment } from "react";
import hellweek from "../images/hellweek.png";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../Animation";

import Grad from "../layout/Grad";
import Work from "../layout/Work";
import Certificate from "../layout/Certificate";
import Flag from "../layout/Flag";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <motion.section
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          id="feature-section"
          className="feature-section-2"
        >
          <div className="flex-container w-container">
            <div className="feature-image-mask">
              <motion.img
                variants={photoAnim}
                src={hellweek}
                alt="hellweek"
                className="feature-image"
              />
            </div>
            <div className="div-block-3">
              <h4 className="heading-4">GET TO KNOW ME</h4>
              <h1 className="heading-5">I&#x27;M OWEN ROTH</h1>
              <p className="paragraph-2">
                Selected as one of 72 candidates from a class 300+ people for
                the prestigious Navy SEAL training program. Spent 2 years in the
                Navy after being medically discharged due to injuries resulting
                from training. Attended Northwestern University Full-Stack Web
                Development Program. Became a Certified Salesforce Administrator
                working towards Platform App Builder and Developer Salesforce
                Certifications. Created system to streamline server pay at
                Trifecta Bar and Grill, resulting in time saved, and increased
                employee satisfaction. Helped generate 6.8% YOY growth in
                restaurant revenue by recalculating menu price points,
                cultivating positive relationships with clients and colleagues,
                leveraging user-generated content.
              </p>
              <div className="div-block-4 hide">
                <h4 className="info-heading">Age: 26</h4>
                <h4 className="info-heading">Phone: (847)-800-5666</h4>
                <h4 className="info-heading">Location: Chicago, IL</h4>
                <h4 className="info-heading">Github: oroth8</h4>
                <motion.a
                  variants={photoAnim}
                  id="w-node-9ede16908eb0-1086c41b"
                  href="!#"
                  className="about-btn btn-title w-button"
                >
                  Download CV
                </motion.a>
                <h4 className="info-heading">Degree: Economics</h4>
                <h4 className="info-heading">Language: English</h4>
              </div>
            </div>
          </div>
        </motion.section>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12232E", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
            date="2020-2020"
            iconStyle={{ background: "#007cc7", color: "#fff" }}
            icon={<Certificate />}
          >
            <h1 className="vertical-timeline-element-title">
              Full Stack Web Developer Certification Program
            </h1>
            <h4
              className="vertical-timeline-element-title"
              style={{ color: " #007cc7" }}
            >
              Northwestern University
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Chicago, IL</h5>
            <p>
              A 24-week intensive program focused on gaining technical
              programming skills in full-stack web development. Areas covered:
              HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, NodeJS,
              MySQL, MongoDB, Express, and ReactJS. FSF
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12232E", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
            date="2020-2020"
            iconStyle={{ background: "#007cc7", color: "#fff" }}
            icon={<Certificate />}
          >
            <h1 className="vertical-timeline-element-title">
              Salesforce Certified Administrator Course
            </h1>
            <h4
              className="vertical-timeline-element-title"
              style={{ color: " #007cc7" }}
            >
              SF Trailhead
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Online</h5>
            <p>
              Earned over 60 badges in trailhead. 5 Superbadges. More than
              70,000 trailhead points.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12232E", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
            date="2018-2020"
            iconStyle={{ background: "#007cc7", color: "#fff" }}
            icon={<Flag />}
          >
            <h1 className="vertical-timeline-element-title">
              United States Navy SEAL Candidate
            </h1>
            <h4
              className="vertical-timeline-element-title"
              style={{ color: " #007cc7" }}
            >
              United States Navy
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              San Diego, CA
            </h5>
            <p>
              Studied at Naval Special Warfare, San Diego, receiving an
              education in mental toughness, dive physics, basic combat
              patrolling, and attention to detail from decorated Navy SEALs.
              Qualified to enter BUD/S Preparatory School and BUD/s selection by
              meeting physical and mental qualifications. Secured Hell Week
              August 2nd 2019 as a squad (boat crew) leader: 5.5 days(132 hours)
              of no sleep|240+ miles in boots/sand
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12232E", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
            date="2015, 2017 - 2018"
            iconStyle={{ background: "#007cc7", color: "#fff" }}
            icon={<Work />}
          >
            <h1 className="vertical-timeline-element-title">General Manager</h1>
            <h4
              className="vertical-timeline-element-title"
              style={{ color: " #007cc7" }}
            >
              Trifecta Bar and Grill
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Chicago, IL</h5>
            <p>
              Helped generate 6.8% YOY growth in restaurant revenue by
              recalculating menu price points. Managed schedules and maintained
              inventory for the restaurant serving 350 customers daily.
              Developed and executed marketing plans and determined menu
              pricing. Tracked expenditures and revenues, recording necessary
              financial data. Assisted in creating new menu items to maximize
              restaurant profitability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12232E", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
            date="2013 - 2017"
            iconStyle={{ background: "#007cc7", color: "#fff" }}
            icon={<Grad />}
          >
            <h1 className="vertical-timeline-element-title">
              B.A. in Economics with a Mathmatical Emphasis
            </h1>
            <h4
              className="vertical-timeline-element-title"
              style={{ color: " #007cc7" }}
            >
              University of Wisconsin-Madison
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Madison, WI</h5>
            <p>
              Relevant Coursework: Econometrics, Advanced Calculus, Healthcare
              Economics, Statistics Awards/Honors: Defensive Captain, BIG 10
              Tournament Champions Clubs/Activities: Men’s Varsity Lacrosse
              Relevant Projects: Health Services Economic Research Assistant
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12232E", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
            date="2016 - 2016"
            iconStyle={{ background: "#007cc7", color: "#fff" }}
            icon={<Work />}
          >
            <h1 className="vertical-timeline-element-title">
              Consulting Intern
            </h1>
            <h4
              className="vertical-timeline-element-title"
              style={{ color: " #007cc7" }}
            >
              Healthscape Advisors
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Chicago, IL</h5>
            <p>
              Performed data analysis and prepared proposal for a government
              bid. Evaluated and developed SWOT analysis for a proposed merger
              of two health insurance companies. Collaborated with team members
              on the development of an internal business case, and white paper
              involving (MACRA) Medicare Access and CHIP Reauthorization Act.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
