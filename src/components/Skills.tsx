import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw", // 🔑 Full screen width
        height: "50vh", // 🔑 Full screen height
        paddingTop: "10px", // Navbar height
        boxSizing: "border-box", // Include padding in total height
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "1rem",
        }}
      >
        <h1 className="mb-4 fw-bold">My Skills</h1>
        <ul className="list-group d-flex flex-column gap-4">
          <li className="list-group-item d-flex justify-content-center align-items-center gap-4 border-0">
            <FaReact size={70} color="#61DBFB" />
            <span className="fs-4 fw-semibold">React</span>
          </li>
          <li className="list-group-item d-flex justify-content-center align-items-center gap-4 border-0">
            <SiTypescript size={70} color="#3178C6" />
            <span className="fs-4 fw-semibold">TypeScript</span>
          </li>
          <li className="list-group-item d-flex justify-content-center align-items-center gap-4 border-0">
            <FaBootstrap size={70} color="#7952B3" />
            <span className="fs-4 fw-semibold">Bootstrap</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
