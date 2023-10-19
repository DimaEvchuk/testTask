import React from "react";
import "./Academy.css";
import AcademyJSON from "../Academy.json";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import SchoolIconOutlined from '@mui/icons-material/SchoolOutlined';

const Academy = () => {
  return (
    <>
      <div className="academy">
        <div>Academy</div>
        <div className="data-display">
          {AcademyJSON.sections.map((section, index) => (
            <div className="data-display__section" key={index}>
              <video
                key={index}
                src="/Reels/Rells1(360p21rfSocial).mp4"
                autoPlay
                loop
                muted
              />
              <div class="data-display__section-video-overlay"></div>
              <div className="data-display__section-block">
                <p className="data-display__section-price">
                  Earn {section.sectionPrice}
                </p>
                <p className="data-display__section-icon">
                  <SchoolOutlinedIcon style={{ color: "white" }} />
                </p>
              </div>
              <p className="data-display__section-title">{section.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Academy;
