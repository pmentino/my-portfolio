import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="container mt-5 text-center">
      <h2>Contact Me</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <FaEnvelope />  
          <a href="mailto:princelorenzmentino189@gmail.com" className="ms-2 text-decoration-none">
            princelorenzmentino189@gmail.com
          </a>
        </li>
        <li className="list-group-item">
          <FaPhone />  
          <a href="tel:+1234567890" className="ms-2 text-decoration-none">
            +1234567890
          </a>
        </li>
        <li className="list-group-item">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/prince-lorenz-mentino-a44b3730a/" target="_blank" rel="noopener noreferrer" className="ms-2 text-decoration-none">
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
