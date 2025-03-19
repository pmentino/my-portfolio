import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="/images/webbasedportfolio.png"
              alt="Project 1"
              className="img-fluid rounded shadow-sm"
            />
            <div className="card-body">
              <h5 className="card-title">Project 1 My Portfolio Website</h5>
              <p className="card-text">This is a description of my project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
