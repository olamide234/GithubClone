import React from "react";
import "./IndividualRepo.css";
import { Icon } from "@iconify/react";

export default function IndividualRepo({
  title,
  description,
  pubpri,
  lang_color,
  language,
  updatedTime,
  starred, forked, licensed
}) {
  return (
    <li className="gh__oneRepo widthFull">
      <div className="gh__oneRepo-left">
        <div className="gh__oneRepo-left__title">
          <h3>
            <a href="#">{title}</a>
            <span></span>
            <span className="pubPriIndicator">{pubpri}</span>
          </h3>
        </div>
        <div className="gh__oneRepo-left__description">
          <p>{description}</p>
        </div>
        <div className="gh__oneRepo-left__tags">
          <span className="gh__oneRepo-left__tags-lang">
            <span
              className="language-color"
              style={{ backgroundColor: lang_color }}
            ></span>
            <span>{language}</span>
          </span>
          <a className="forked-a">
            <Icon
                className="aIcon"
              icon="octicon:star-24"
              color="#57606a"
              width="16"
              height="16"
              inline={true}
            />
            4 {/*{starred}*/}
          </a>
          <a className="forked-a">
            <Icon
            className="aIcon"
              icon="octicon:repo-forked-16"
              color="#57606a"
              width="16"
              height="16"
              inline={true}
            />
            2 {/*{forked}*/}
          </a>
          <span className="license">
            <Icon icon="octicon:law-24" className="aIcon" color="#57606a" width="16" height="16" inline={true} />
              MIT License
          </span>
          Updated
          <span className="updatedTime">{updatedTime}</span>
        </div>
      </div>
      <div className="gh__oneRepo-right">
        <div className="gh__oneRepo-right__starContainer">
          <div className="gh__oneRepo-right__starContainer-flex">
            <form>
              <button className="btt">
                <Icon
                  className="starIcon"
                  icon="octicon:star-24"
                  width="16"
                  height="16"
                  inline={true}
                />
                Star
              </button>
            </form>
            <details>
              <summary className="btt detailing">
                <Icon
                  icon="octicon:triangle-down-16"
                  className="dropdownArrow octicon"
                  width="16"
                  height="16"
                  inline={true}
                />
              </summary>
            </details>
          </div>
        </div>
      </div>
    </li>
  );
}
