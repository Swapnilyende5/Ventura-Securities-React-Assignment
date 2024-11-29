import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ company, logo }) => {
  return (
    <div className="details-header details-header_elements">
      <div className="details-header_elements">
        <Link to="/" style={{textDecoration:"none"}} className="elements-border">&lt;</Link>
        <div className="issueDate">
          <img src={logo} alt={`${company}Logo`} />
          <div>
            <p className="primaryText">{company}</p>
            <p className="secondaryText">{company} Private Limited</p>
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
