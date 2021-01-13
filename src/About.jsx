import React from 'react';
import web from "../src/Images/S2.jpg";
import Common from "./Common";
const  About = () => {
  return (
    <>
      <Common 
       name="we to about page" 
       imgsrc={web}
       visit="/contact"
       btname="Contact Now" />
    </>
  );
};
 
export default About;