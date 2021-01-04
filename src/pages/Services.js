import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import WebDev from "../layout/WebDev";
import Salesforce from "../layout/Salesforce";

const Services = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <div className="header-container">
        <h1 className="h1-base">SERVICES</h1>
        <div className="p-base">
          I will work with you to create a{" "}
          <span className="text-span">fully custom</span> product. Tell me what
          you envision and I will build it. Not matter how big or small.
        </div>
        <div className="pricing-switch-block">
          <div className="pricing-switch-block-text">Web Development</div>
          <div className="switch-block">
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" onClick={toggleSwitch} />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </div>
          <div className="pricing-switch-block-text">Salesforce</div>
        </div>
        {isOn === true ? <Salesforce /> : <WebDev />}
      </div>
      <Footer />
    </motion.div>
  );
};

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #007cc7;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4da8da;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default Services;
