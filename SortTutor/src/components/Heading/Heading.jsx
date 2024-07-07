import React from "react";
import "./Heading.css";
const Heading = ({ title }) => {
  return (
    <div className="heading-container">
      <h2>
        {title}
        <hr
          style={{ width: "200px", border: "none", height: "1px" }}
          color="#e7e7e7"
        />
      </h2>
    </div>
  );
};

export default Heading;
