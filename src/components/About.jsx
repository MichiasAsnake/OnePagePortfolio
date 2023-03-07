import React from "react";
import TypeIt from "typeit";

const About = () => {
  const typeItRef = React.useRef(null);
  const LangItRef = React.useRef(null);

  React.useEffect(() => {
    const typeItInstance = new TypeIt(typeItRef.current, {
      lifeLike: false,
      speed: 0,
      loop: true,
    })
      .type("G")
      .pause(481)
      .type("i")
      .pause(285)
      .type("t")
      .pause(498)
      .delete(1)
      .pause(200)
      .delete(1)
      .pause(189)
      .delete(1)
      .pause(1085)
      .type("N")
      .pause(342)
      .type("o")
      .pause(199)
      .type("d")
      .pause(217)
      .type("e")
      .pause(304)
      .delete(1)
      .pause(222)
      .delete(1)
      .pause(206)
      .delete(1)
      .pause(222)
      .delete(1)
      .pause(790)
      .type("S")
      .pause(862)
      .type("a")
      .pause(297)
      .type("s")
      .pause(272)
      .type("s")
      .pause(662)
      .delete(1)
      .pause(228)
      .delete(1)
      .pause(214)
      .delete(1)
      .pause(244)
      .delete(1)
      .pause(688)
      .type("R")
      .pause(464)
      .type("e")
      .pause(245)
      .type("a")
      .pause(227)
      .type("c")
      .pause(274)
      .type("t")
      .pause(533)
      .delete(1)
      .pause(214)
      .delete(1)
      .pause(200)
      .delete(1)
      .pause(215)
      .delete(1)
      .pause(236)
      .delete(1)
      .pause(677)
      .type("B")
      .pause(387)
      .type("o")
      .pause(222)
      .type("o")
      .pause(264)
      .type("t")
      .pause(220)
      .type("s")
      .pause(228)
      .type("t")
      .pause(233)
      .type("r")
      .pause(274)
      .type("a")
      .pause(272)
      .type("p")
      .pause(574)
      .delete(1)
      .pause(217)
      .delete(1)
      .pause(212)
      .delete(1)
      .pause(219)
      .delete(1)
      .pause(237)
      .delete(1)
      .pause(221)
      .delete(1)
      .pause(201)
      .delete(1)
      .pause(199)
      .delete(1)
      .pause(211)
      .delete(1)
      .pause(827)
      .type("F")
      .pause(528)
      .type("i")
      .pause(275)
      .type("g")
      .pause(276)
      .type("m")
      .pause(253)
      .type("a")
      .pause(663)
      .delete(1)
      .pause(239)
      .delete(1)
      .pause(242)
      .delete(1)
      .pause(228)
      .delete(1)
      .pause(219)
      .delete(1)
      .go();

    return () => {
      typeItInstance.destroy();
    };
  }, []);

  React.useEffect(() => {
    const Languages = new TypeIt(LangItRef.current, {
      lifeLike: false,
      speed: 0,
      loop: true,
    })
      .type("J")
      .pause(391)
      .type("a")
      .pause(198)
      .type("v")
      .pause(102)
      .type("a")
      .pause(386)
      .type("S")
      .pause(418)
      .type("c")
      .pause(200)
      .type("r")
      .pause(95)
      .type("i")
      .pause(200)
      .type("p")
      .pause(227)
      .type("t")
      .pause(520)
      .delete(1)
      .pause(207)
      .delete(1)
      .pause(181)
      .delete(1)
      .pause(200)
      .delete(1)
      .pause(185)
      .delete(1)
      .pause(194)
      .delete(1)
      .pause(195)
      .delete(1)
      .pause(228)
      .delete(1)
      .pause(185)
      .delete(1)
      .pause(746)
      .delete(1)
      .pause(422)
      .type("C")
      .pause(386)
      .type("s")
      .pause(201)
      .type("s")
      .pause(622)
      .delete(1)
      .pause(183)
      .delete(1)
      .pause(198)
      .delete(1)
      .pause(1672)
      .type("P")
      .pause(422)
      .type("y")
      .pause(139)
      .type("t")
      .pause(118)
      .type("h")
      .pause(89)
      .type("o")
      .pause(127)
      .type("n")
      .pause(402)
      .delete(1)
      .pause(200)
      .delete(1)
      .pause(189)
      .delete(1)
      .pause(193)
      .delete(1)
      .pause(219)
      .delete(1)
      .pause(189)
      .delete(1)
      .pause(588)
      .type("P")
      .pause(236)
      .type("H")
      .pause(212)
      .type("P")
      .pause(838)
      .delete(1)
      .pause(207)
      .delete(1)
      .pause(210)
      .delete(1)
      .go();

    return () => {
      Languages.destroy();
    };
  }, []);

  return (
    <div className="abtcont">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "400", fontSize: "20px" }}>
          Technologies and Tools
        </h1>
        <span>Here are some of the tools and technologies I use</span>
      </div>
      <div style={{ display: "flex" }}>
        <div className="abtbox">
          <div className="abtflex">
            <div className="abtimg">
              <img src="\images\html5.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img src="\images\git.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img src="\images\js.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img src="\images\node.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img src="\images\react.svg" class="filter-grey" />
            </div>
          </div>
          <div className="abtflex">
            <div className="abtimg">
              <img src="\images\bootstrap.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img src="\images\sass.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img
                src="\images\figma.svg"
                class="filter-grey"
                style={{ width: "35px" }}
              />
            </div>
            <div className="abtimg">
              <img src="\images\python.svg" class="filter-grey" />
            </div>
            <div className="abtimg">
              <img src="\images\php.svg" class="filter-grey" />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="abtwrd">
            <h1>Languages</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {<h2 ref={LangItRef} />}
            </div>
          </div>
          <div className="abtwrd">
            <h1>Tools</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2 ref={typeItRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
