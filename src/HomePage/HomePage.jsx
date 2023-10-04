import React from "react";
import "./HomePage.css";
import QA from "./QA/QA.jsx";
import Events from "./Events/Events.jsx";
import Academy from "./Academy/Academy.jsx";
import Blinks from "./Blinks/Blinks.jsx";

const HomePage = () => {
  return (
    <div className="home">
      <div className="background">
        <div className="homePage">
          <div className="title">Сommunity</div>
          <div className="blocks">
            <QA />
            <Events />
            <Academy />
            <Blinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
