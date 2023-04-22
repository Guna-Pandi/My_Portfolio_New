import React from "react";
import Resume from "../../assets/GunaResume.pdf";
import './Header.css';

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download CV
      </a>
      <a href="#account" className="btn btn-primary">
        Let's Talk😊
      </a>
    </div>
  );
};

export default CTA;
