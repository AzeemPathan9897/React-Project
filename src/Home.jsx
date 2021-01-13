import React from 'react';
import web from "../src/Images/img-2.jpg";
import Common from "./Common";
const  Home = () => {
  return (
    <>
      <Common 
        name="Grow your Business with " 
        imgsrc={web}
        visit="/service"
        btname="Get Started" 
      />
    </>
  );
};
 
export default Home;