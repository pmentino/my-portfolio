import React from "react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        paddingTop: "80px", // offset for navbar
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        <h1 className="mb-5 fw-bold display-3">
          Hello! 👋 I'm Prince <br /> Lorenz Mentino
        </h1>
        <h4 className="text-muted mb-3">
          A 3rd Year BSCS Student passionate about technology, coding, and
          innovation.
        </h4>
        <p className="text-secondary">
          I specialize in <strong>React</strong>, <strong>TypeScript</strong>,
          and <strong>Bootstrap</strong>, creating dynamic and user-friendly web
          applications. I love learning and building projects that solve
          real-world problems. 🚀
        </p>
      </div>
    </div>
  );
};

export default Home;
