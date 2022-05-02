import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";

// npm install --save-dev @iconify/react

export default function NavBar() {
  return (
    <div className="gh__navBar">
      <div className="gh__navBar-in section__padding section__margin">
        <div className="gh__navBar-in__main blueprint">
          <div className="gh__navBar-in__main-img imgLayout"></div>
          <div className="gh__navBar-in__main-nav mainLayout ">
            <div className="gh__navBar-in__main-nav__content box-shadow__none overflow-hide widthFull">
              <nav className="gh__navBar-in__main-nav__content-nv widthFull ">
                <a href="#">
                  <Icon
                    className="octicon"
                    icon="octicon:book-24"
                    width="16"
                    height="16"
                    inline={true}
                  />
                  Overview
                </a>
                <a href="#" id="active__navigation">
                  <Icon
                    className="octicon-active"
                    icon="octicon:repo-16"
                    width="16"
                    height="16"
                    inline={true}
                  />
                  Respositories
                  <span className="counter">397</span>
                </a>
                <a href="#">
                  <Icon
                    className="octicon"
                    icon="octicon:table-24"
                    width="16"
                    height="16"
                    inline={true}
                  />
                  Projects
                  <span className="counter"></span>
                </a>
                <a href="#">
                  <Icon
                    className="octicon"
                    icon="octicon:package-24"
                    width="16"
                    height="16"
                    inline={true}
                  />
                  Packages
                  <span className="counter"></span>
                </a>
                <a href="#">
                  <Icon
                    className="octicon"
                    icon="octicon:star-24"
                    width="16"
                    height="16"
                    inline={true}
                  />
                  Stars
                  <span className="counter">190</span>
                </a>
              </nav>
              <div></div> {/* absolute nav */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
