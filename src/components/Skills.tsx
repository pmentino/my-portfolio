import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
      <h2 className="mb-4 fw-bold">My Skills</h2>
      <div className="row justify-content-center w-100">
        <div className="col-md-8">
          <ul className="list-group d-flex flex-column align-items-center gap-4">
            <li className="list-group-item d-flex align-items-center gap-4 border-0">
              <FaReact size={50} color="#61DBFB" />
              <span className="fs-4 fw-semibold">React</span>
            </li>
            <li className="list-group-item d-flex align-items-center gap-4 border-0">
              <SiTypescript size={50} color="#3178C6" />
              <span className="fs-4 fw-semibold">TypeScript</span>
            </li>
            <li className="list-group-item d-flex align-items-center gap-4 border-0">
              <FaBootstrap size={50} color="#7952B3" />
              <span className="fs-4 fw-semibold">Bootstrap</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
