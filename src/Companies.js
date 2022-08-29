import React from "react";

const Companies = ({ companies, onSelect }) => {
  return (
    <div className="btn-container">
      {companies.map((company) => (
        <button
          key={company}
          className="job-btn"
          onClick={() => onSelect(company)}
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default Companies;
