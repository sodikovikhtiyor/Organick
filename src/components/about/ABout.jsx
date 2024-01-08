import React from "react";
import "./ABout.scss";
import Showcase from "../about-showcase/Showcase";
import Believe from "../believe/Believe";
import Grapes from "../../assets/grapes.webp";
import Whywe from "../whywe/Whywe";
import Experts from "../experts/Experts";
import AboutOffer from "../aboutoffer/AboutOffer";
import Subscribe from "../subscribe/Subscribe";
import aboutShowcase from '../../assets/about-showcase.png'

export const ABout = () => {
  return (
    <div>
      <Showcase  text='About Us'  backgroundImage={aboutShowcase} height='350px'/>
      <Believe
        img={Grapes}
        title="We do Creative 
Things for Success"
      />
      <Whywe />
      <Experts />
      <AboutOffer/>
      <Subscribe/>
    </div>
  );
};
