import React from "react";
import "./MainApp.css";
import IndividualRepo from "../individualRepo/IndividualRepo";

const mainData = [
  {
    title: "Vue calculator",
    description: "Average Response Time",
    pubpri: "Public",
    lang_color: "#41b883",
    language: "Vue",
    updatedTime: '2 days ago',
    starred: "4",
    forked: "2",
    licensed: true
  },
  {
    title: "Vue calculator",
    // description: "Average Response Time",
    pubpri: "Public",
    // lang_color: "#41b883",
    // language: "Vue",
    updatedTime: '2 days ago',
  },
  {
    title: "Vue calculator",
    description: "Average Response Time",
    pubpri: "Public",
    lang_color: "#41b883",
    language: "Vue",
    updatedTime: '2 days ago',
  },
  {
    title: "Vue calculator",
    description: "Average Response Time",
    pubpri: "Public",
    lang_color: "#41b883",
    language: "Vue",
    updatedTime: '2 days ago',
  },
];

export default function MainApp() {
  return (
    <div className="gh__mainApp">
      <div className="gh__mainApp-cover">
        <div className="gh__mainApp-cover__in">
          <div className="gh__mainApp-cover__in-sheath">
            <div className="gh__mainApp-cover__in-sheath__content">
              <form className="widthFull">
                <div className="gh__mainApp-cover__in-sheath__content-L">
                  <div className="gh__mainApp-cover__in-sheath__content-L__a">
                    <input
                      className="widthFull inputRepo"
                      placeholder="Find a repository..."
                      autoComplete="off"
                    />
                  </div>
                  <div className="gh__mainApp-cover__in-sheath__content-L__b">
                    <details className="firstDetail">
                      <summary className="detailing btt">
                        <span>Type</span>
                        <span className="dropdown"></span>
                      </summary>
                    </details>
                    <details className="secondDetail">
                      <summary className="detailing btt">
                        <span>Language</span>
                        <span className="dropdown"></span>
                      </summary>
                    </details>
                    <details className="thirdDetail">
                      <summary className="detailing btt">
                        <span>Sort</span>
                        <span className="dropdown"></span>
                      </summary>
                    </details>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="gh__mainApp-cover__in-allRepo">
            <ul>
              {mainData.map((item, index) => (
                <IndividualRepo
                  title={item.title}
                  description={item.description}
                  pubpri={item.pubpri}
                  lang_color={item.lang_color}
                  language={item.language}
                  updatedTime={item.updatedTime}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
