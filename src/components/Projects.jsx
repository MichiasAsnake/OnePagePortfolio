import React from "react";

const Projects = () => {
  return (
    <div className="prjcont">
      <div
        style={{
          fontWeight: "400",
          color: "rgb(219, 219, 219)",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: "400", lineHeight: "13px" }}>
          Selected Projects
        </h1>
        <span>Below are links to some of my recent projects</span>
      </div>
      <div className="prjbcont">
        <div
          className="prjbox"
          style={{
            backgroundImage: 'url("/images/news.jpg")',
            backgroundSize: "170%",
            backgroundPosition: "center",
            backgroundPositionX: "-122px",
            backgroundPositionY: "-110px",
          }}
        >
          <div className="prjhid">
            <h1>Newsy</h1>
            <p>
              Displays news articles and article locations using Google Maps
              API.
            </p>
            <a href="https://github.com/MichiasAsnake/Newsy" target={"_blank"}>
              <img src="\images\github.svg" />
            </a>
          </div>
        </div>

        <div
          className="prjbox"
          style={{
            backgroundImage: 'url("/images/Lokalimg.JPG")',
            backgroundSize: "170%",
            backgroundPosition: "center",
            backgroundPositionX: "-118px",
            backgroundPositionY: "-1px",
          }}
        >
          <div className="prjhid">
            <h1>Lokal</h1>
            <p>
              Locates nearby activities and locations using Google Places API.
            </p>
            <div className="prjlink">
              <a
                href="https://github.com/MichiasAsnake/Lokal"
                target={"_blank"}
              >
                <img src="/images/github.svg" />
              </a>
              <a
                href="https://tubular-empanada-06ce57.netlify.app/"
                target={"_blank"}
              >
                <img
                  src="\images\arrow-up-right-from-square-solid(1).svg"
                  style={{ width: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="prjbox"
          style={{
            backgroundImage: 'url("/images/video.jpg")',
            backgroundSize: "170%",
            backgroundPosition: "center",
            backgroundPositionX: "-118px",
            backgroundPositionY: "-110px",
          }}
        >
          <div className="prjhid">
            <h1>WatchNext</h1>
            <p>Find the next movie to put on your watchlist.</p>
            <div className="prjlink">
              <a
                href="https://github.com/MichiasAsnake/MovieWatchlist"
                target={"_blank"}
              >
                <img src="/images/github.svg" />
              </a>
              <a
                href="https://bright-dango-b47753.netlify.app/"
                target={"_blank"}
              >
                <img
                  src="\images\arrow-up-right-from-square-solid(1).svg"
                  style={{ width: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="prjbcont">
        <div
          className="prjbox"
          style={{
            backgroundImage: 'url("/images/jobs.JPG")',
            backgroundSize: "170%",
            backgroundPosition: "center",
            backgroundPositionX: "-122px",
            backgroundPositionY: "-135px",
          }}
        >
          <div className="prjhid">
            <h1>JobsSpot</h1>
            <p>Search and apply to thousands of jobs from across the web.</p>
            <div className="prjlink">
              <a
                href="https://github.com/MichiasAsnake/JobsSpot"
                target={"_blank"}
              >
                <img src="\images\github.svg" />
              </a>
              <a href="https://jobsspot.netlify.app/" target={"_blank"}>
                <img
                  src="\images\arrow-up-right-from-square-solid(1).svg"
                  style={{ width: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="prjbox"
          style={{
            backgroundImage: 'url("/images/color.jpg")',
            backgroundSize: "150%",
            backgroundPosition: "center",
            backgroundPositionX: "-106px",
            backgroundPositionY: "-100px",
          }}
        >
          <div className="prjhid">
            <h1>Coolor</h1>
            <p>Create unique color palettes that can be used in any project.</p>
            <div className="prjlink">
              <a
                href="https://github.com/MichiasAsnake/Coolor-Clone"
                target={"_blank"}
              >
                <img src="\images\github.svg" />
              </a>
              <a
                href="https://cheerful-fenglisu-7444ee.netlify.app/homepage.html"
                target={"_blank"}
              >
                <img
                  src="\images\arrow-up-right-from-square-solid(1).svg"
                  style={{ width: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="prjbox"
          style={{
            backgroundImage: 'url("/images/videoss.jpg")',
            backgroundSize: "150%",
            backgroundPosition: "center",
            backgroundPositionX: "-102px",
            backgroundPositionY: "-97px",
          }}
        >
          <div className="prjhid">
            <h1>VidTube</h1>
            <p>Watch videos in a modern responsive broswer.</p>
            <div className="prjlink">
              <a
                href="https://github.com/MichiasAsnake/Youtube_Clone"
                target={"_blank"}
              >
                <img src="\images\github.svg" />
              </a>
              <a href="https://videotubecom.netlify.app/" target={"_blank"}>
                <img
                  src="\images\arrow-up-right-from-square-solid(1).svg"
                  style={{ width: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
