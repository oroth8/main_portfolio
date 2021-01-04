import React from "react";
import { salesforce } from "../api/Services";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const barVar = salesforce;

const Salesforce = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="pricing-row"
    >
      <div className="pricing-second-block">
        <img src={barVar.box1.pic} alt="frontend" className="pkg-img" />
        <div className="pricing-box">
          <h2 className="pkg-name">{barVar.box1.title}</h2>
          <div className="pkg-description">
            <span className="text-span">{barVar.box1.disc1Span}</span>{" "}
            {barVar.box1.disc1}
            <br />
            <span className="text-span">{barVar.box1.disc2Span}</span>{" "}
            {barVar.box1.disc2}
            <br />
            {barVar.box1.disc3}
            <br />
            {barVar.box1.disc4}
          </div>
          <a href="!#" className="pkg-link">
            Get Started
          </a>
        </div>
      </div>
      <div className="pricing-second-block middle">
        <img src={barVar.box2.pic} alt="fullstack" className="pkg-img" />
        <div className="pricing-box bottom-round-corner">
          <h2 className="pkg-name">{barVar.box2.title}</h2>
          <div className="pkg-description">
            <span className="text-span">{barVar.box2.disc1Span}</span>{" "}
            {barVar.box2.disc1}
            <br />
            <span className="text-span">{barVar.box2.disc2Span}</span>{" "}
            {barVar.box2.disc2}
            <br />
            {barVar.box2.disc3}
            <br />
            {barVar.box2.disc4}
          </div>
        </div>
        <a href="!#" className="bottom-btn w-inline-block">
          <div className="bottom-btn__link">Get Started</div>
        </a>
      </div>
      <div className="pricing-second-block">
        <img src={barVar.box3.pic} alt="backend" className="pkg-img" />
        <div className="pricing-box">
          <h2 className="pkg-name">{barVar.box3.title}</h2>
          <div className="pkg-description">
            <span className="text-span">{barVar.box3.disc1Span}</span>{" "}
            {barVar.box3.disc1}
            <br />
            <span className="text-span">{barVar.box3.disc2Span}</span>{" "}
            {barVar.box3.disc2}
            <br />
            {barVar.box3.disc3}
            <br />
            {barVar.box3.disc4}
          </div>
          <a href="!#" className="pkg-link">
            Get Started
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Salesforce;
