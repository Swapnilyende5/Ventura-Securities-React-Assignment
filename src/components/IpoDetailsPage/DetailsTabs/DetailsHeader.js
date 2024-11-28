import React from "react";

const DetailsHeader = () => {
  return (
    <div className="details-header details-header_elements">
      <div className="details-header_elements">
        <p className="elements-border">&lt;</p>
        <div className="issueDate">
          <img src="/images/oyo.png" alt="oyoLogo" />
          <div>
            <p className="primaryText">OYO</p>
            <p className="secondaryText">OYO Private Limited</p>
          </div>
        </div>
      </div>
      <div className="details-header_elements">
        <p className="elements-border" style={{ border: "2px solid black" }}>
          ↓
        </p>
        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  );
};

export default DetailsHeader;
