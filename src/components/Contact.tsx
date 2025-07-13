import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        paddingTop: "20px", // Offset for fixed navbar
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="text-center shadow p-4 rounded"
        style={{
          maxWidth: "450px",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="mb-4 fw-bold">Contact Me</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <FaEnvelope size={24} className="mb-2" />
            <div>
              <a
                href="mailto:princelorenzmentino189@gmail.com"
                className="text-decoration-none text-primary"
              >
                princelorenzmentino189@gmail.com
              </a>
            </div>
          </li>
          <li className="mb-3">
            <FaPhone size={24} className="mb-2" />
            <div>
              <a
                href="tel:+1234567890"
                className="text-decoration-none text-primary"
              >
                +1234567890
              </a>
            </div>
          </li>
          <li className="mb-3">
            <FaLinkedin size={24} className="mb-2" />
            <div>
              <a
                href="https://www.linkedin.com/in/prince-lorenz-mentino-a44b3730a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                LinkedIn Profile
              </a>
            </div>
          </li>
          <li className="mb-3">
            <FaGithub size={24} className="mb-2" />
            <div>
              <a
                href="https://github.com/pmentino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                GitHub Profile
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
