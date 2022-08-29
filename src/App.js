import React, { useState, useEffect } from "react";
import Companies from "./Companies";
import JobsDetails from "./JobsDetails";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");
  const [companies, setCompanies] = useState([]);

  const getJobs = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const jobs = data.sort((a, b) => b.order - a.order);
      const companies = [...new Set(jobs.map((job) => job.company))];
      setJobs(jobs);
      setJob(jobs[0]);
      setCompanies(companies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const selectCompany = (company) => {
    const index = jobs.findIndex((job) => job.company === company);
    setJob(jobs[index]);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) return <section className="loading">Loading</section>;

  return (
    <div className="section">
      <div className="title">
        <h3>Experience</h3>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Companies companies={companies} onSelect={selectCompany} />
        <JobsDetails job={job} />
      </div>
    </div>
  );
}

export default App;
