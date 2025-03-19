import React from "react";
import "./Projects.css"; // Import the CSS file for hover effects

const Projects: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project-card">
            <img
              src="https://market-resized.envatousercontent.com/previews/files/505069493/preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=2d54647cade314db481733584fc0641ef4484f4069103a533d58b630a42eb91d"
              alt="Project 1"
              className="card-img-top project-img"
            />
            <div className="card-body">
              <h5 className="card-title">Project 1: My Portfolio Website</h5>
              <p className="card-text">This is a description of my project.</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project-card">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240409180455/ecommerce-Website-Project.webp"
              alt="Project 2"
              className="card-img-top project-img"
            />
            <div className="card-body">
              <h5 className="card-title">Project 2: E-Commerce Website</h5>
              <p className="card-text">
                An online store built with React, TypeScript, and Bootstrap.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project-card">
            <img
              src="https://www.meistertask.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F289344%2F1521x1001%2F61554d4bfc%2Fui-image_project-management.png%2Fm%2F%3Fv%3D2&w=3840&q=75"
              alt="Project 3"
              className="card-img-top project-img"
            />
            <div className="card-body">
              <h5 className="card-title">Project 3: Task Manager</h5>
              <p className="card-text">
                A simple task manager with CRUD operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
