import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="mb-3 fw-bold">Hello! 👋 I'm Prince Lorenz Mentino</h1>
        <h4 className="text-muted mb-3">
          A 3rd Year BSCS Student passionate about technology, coding, and innovation.
        </h4>
        <p className="mt-3 fs-5">
          I specialize in <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Bootstrap</strong>, creating dynamic and user-friendly web applications.
          I love learning and building projects that solve real-world problems. 🚀
        </p>
      </div>
    </div>
  );
};

export default Home;
