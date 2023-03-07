import React from "react";

const Landing = () => {
  return (
    <div className="ldgbox">
      <div className="ldgtext">
        <h1>Hi, I'm Michias</h1>
        <h2>Student and Developer living in Mpls, MN</h2>
      </div>
      <div className="ldgimg">
        <img src="\images\Header Picture.svg" />
      </div>
      <button>
        <a href="\images\Michias Asnake Resume.pdf" download>
          <p>Download Resume</p>
        </a>
      </button>
    </div>
  );
};

export default Landing;
