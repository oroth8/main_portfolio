import React, { useState } from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import styled from "styled-components";
import { webdevelopment, salesforce } from '../api/Services';
// import { motion } from 'framer-motion';

const Services = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);

    let barVar = {};
    if (isOn === true) {
        barVar = salesforce;
    } else {
        barVar = webdevelopment;
    }
    return (
        <body>
            <Navbar />
            <div className="header-container">
                <h1 className="h1-base">SERVICES</h1>
                <div className="p-base">I will work with you to create a <span className="text-span">fully custom</span> product. Tell me what you envision and I will build it. Not matter how big or small.</div>
                <div className="pricing-switch-block">
                    <div className="pricing-switch-block-text">Web Development</div>
                    <div className="switch-block">
                        <CheckBoxWrapper>
                            <CheckBox id="checkbox" type="checkbox" data-isOn={isOn} onClick={toggleSwitch} />
                            <CheckBoxLabel htmlFor="checkbox" />
                        </CheckBoxWrapper>
                        {/* <div data-w-id="30a0ebcb-e139-61f3-c401-17293a48bba7" className="off">
                            <div data-w-id="30a0ebcb-e139-61f3-c401-17293a48bba8" className="div-block-6"></div>
                        </div>
                        <div data-w-id="30a0ebcb-e139-61f3-c401-17293a48bba9" className="on"></div> */}
                    </div>
                    <div className="pricing-switch-block-text">Salesforce</div>
                </div>
                <div className="pricing-row">
                    <div className="pricing-second-block"><img src={barVar.box1.pic} alt="frontend" className="pkg-img" />
                        <div className="pricing-box">
                            <h2 className="pkg-name">{barVar.box1.title}</h2>
                            <div className="pkg-description"><span className="text-span">{barVar.box1.disc1Span}</span> {barVar.box1.disc1}<br /><span className="text-span">{barVar.box1.disc2Span}</span> {barVar.box1.disc2}<br />{barVar.box1.disc3}<br />{barVar.box1.disc4}</div>
                            <a href="!#" className="pkg-link">Get Started</a>
                        </div>
                    </div>
                    <div className="pricing-second-block middle"><img src={barVar.box2.pic} alt="fullstack" className="pkg-img" />
                        <div className="pricing-box bottom-round-corner">
                            <h2 className="pkg-name">{barVar.box2.title}</h2>
                            <div className="pkg-description"><span className="text-span">{barVar.box2.disc1Span}</span> {barVar.box2.disc1}<br /><span className="text-span">{barVar.box2.disc2Span}</span> {barVar.box2.disc2}<br />{barVar.box2.disc3}<br />{barVar.box2.disc4}</div>
                        </div>
                        <a href="!#" className="bottom-btn w-inline-block">
                            <div className="bottom-btn__link">Get Started</div>
                        </a>
                    </div>
                    <div className="pricing-second-block"><img src={barVar.box3.pic} alt="backend" className="pkg-img" />
                        <div className="pricing-box">
                            <h2 className="pkg-name">{barVar.box3.title}</h2>
                            <div className="pkg-description"><span className="text-span">{barVar.box3.disc1Span}</span> {barVar.box3.disc1}<br /><span className="text-span">{barVar.box3.disc2Span}</span> {barVar.box3.disc2}<br />{barVar.box3.disc3}<br />{barVar.box3.disc4}</div>
                            <a href="!#" className="pkg-link">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    )
}

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

export default Services
