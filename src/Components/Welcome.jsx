import React from "react";
import "./Style.css";


const Welcome = () => {
 
  return (
    <>
    <div className="container">
      <div className="mycontainer">
        <video autoPlay loop muted>
          <source src="/src/assets/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="heading">
          <div className="top">Welcome</div>
          <div className="mid">In</div>
          <div id="bottom">NewsSphere</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Welcome;
