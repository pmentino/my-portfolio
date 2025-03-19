import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">My Skills</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="list-group list-group-horizontal-md d-flex justify-content-center flex-wrap">
            <li className="list-group-item d-flex align-items-center gap-4">
              <FaReact size={30} color="#61DBFB" />
              React
            </li>
            <li className="list-group-item d-flex align-items-center gap-4">
              <SiTypescript size={30} color="#3178C6" />
              TypeScript
            </li>
            <li className="list-group-item d-flex align-items-center gap-4">
              <FaBootstrap size={30} color="#7952B3" />
              Bootstrap
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
