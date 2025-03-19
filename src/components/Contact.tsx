import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4">Contact Me</h2>
      <ul className="list-group list-group-flush text-center w-100" style={{ maxWidth: "400px" }}>
        <li className="list-group-item d-flex align-items-center justify-content-center">
          <FaEnvelope size={30} className="me-4" />
          <a href="mailto:princelorenzmentino189@gmail.com" className="text-decoration-none">
            princelorenzmentino189@gmail.com
          </a>
        </li>
        <li className="list-group-item d-flex align-items-center justify-content-center">
          <FaPhone size={30} className="me-4" />
          <a href="tel:+1234567890" className="text-decoration-none">
            +1234567890
          </a>
        </li>
        <li className="list-group-item d-flex align-items-center justify-content-center">
          <FaLinkedin size={30} className="me-4" />
          <a href="https://www.linkedin.com/in/prince-lorenz-mentino-a44b3730a/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-decoration-none">
            LinkedIn Profile
          </a>
        </li>
        <li className="list-group-item d-flex align-items-center justify-content-center">
          <FaGithub size={30} className="me-4" />
          <a href="https://github.com/pmentino" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-decoration-none">
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
