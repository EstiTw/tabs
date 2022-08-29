import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobsDetails = ({ job }) => {
  const { title, dates, duties, company } = job;
  return (
    <div className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      <div>
        {duties.map((duty, index) => (
          <section key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default JobsDetails;
