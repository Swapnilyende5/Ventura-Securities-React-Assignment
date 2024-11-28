import React from "react";
import { IPO_TIMELINE } from "../../Schema/TimelineSchema";

const Timeline = () => {
  return (
    <div style={{ margin: "20px 0" }} className="detail">
      <p style={{ marginBottom: "13px" }} className="primaryText">
        IPO timeline
      </p>
      <div className="wrapper">
        <div className="progress-container">
          <div className="progress-line"></div>
          {IPO_TIMELINE.map((step) => (
            <div key={step.id} className={`step ${step.status}`}>
              <div className="circle">✔</div>
            </div>
          ))}
        </div>
        <div className="labels-container">
          {IPO_TIMELINE.map((step) => (
            <div key={step.id} className="label">
              <span>{step.label}</span>
              <p className="secondaryText">{step.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
