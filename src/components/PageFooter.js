import React from "react";
import BottomNavBarItem from "./BottomNavBarItem";
import { useLocation } from "react-router-dom";

const PageFooter = () => {
  let location = useLocation();
  const current_path = location.pathname;
  const pages = [
    "In-Short",
    "Education",
    "Industry",
    "Personal Projects",
    "Familiar with",
    "Contact Me",
  ];

  return (
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            {pages.map((page) => {
              const path_name = "/" + page.replace(" ", "-").toLowerCase();
              return (
                <BottomNavBarItem
                  name={page}
                  active={current_path === path_name}
                  route={path_name}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PageFooter;
