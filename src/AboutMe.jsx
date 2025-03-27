import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me-section">
      <div>
        <h2>Skills</h2>
        <p>Frontend Development: React.js, Redux, React Hooks, Bootstrap.</p>
        <p>
          {" "}
          Database Management: MongoDB, Mongoose Additional Skills RESTful APIs,
          Responsive Design, Postman (API Testing)
        </p>{" "}
        <p>Backend Development: Node.js, Express.js, JWT Authentication</p>{" "}
        <p>Version Control: Git, GitHub, Netlify, Vercel, Railway</p>
      </div>
      <div>
        <h2>Hobbies and Interests</h2>
        <p>I like to play chess and workout in the gym.</p>
      </div>

      <div>
        <h2>Passion</h2>
        <p>Programming is my passion.</p>
      </div>

      <div>
        <h2>Education</h2>
        <p>I completed my graduation from GGDSD college, Chandigarh</p>
      </div>

      <div>
        <h2>Certifications</h2>
        <p>
          I completed JavaScript and Data Algorithms certification from
          freeCodeCamp
        </p>
        <p>I completed Problem solving (basic) certification from HackerRank</p>
      </div>
    </div>
  );
}
