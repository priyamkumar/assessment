import React from "react";

export default function Body() {
    function buttonHandler() {
        alert("Thank you for downloading my CV.")
    }

    function contactHandler() {
        alert("Contact me on priyamkumar976@gmail.com")
    }

  return (
    <div className="main-section">
      <img src="/photo.png"></img>
      <div className="info-container">
        <p>Web Developer</p>
        <h1>Priyam Kumar</h1>
        <p>
          Passionate MERN Stack Developer with hands-on experience in building
          scalable and responsive full-stack web applications. Skilled in
          developing user-friendly interfaces, optimizing database queries, and
          deploying applications efficiently. A quick learner with strong
          problem-solving skills and a commitment to continuous learning.
        </p>
        <button onClick={buttonHandler}>Download CV</button>
        <button onClick={contactHandler}>Contact</button>
      </div>
    </div>
  );
}
