import React from "react";

const BottomNavBarItem = ({ name, active, route }) => {
  console.log(active);
  return (
    <li class={`${active ? "is-active" : ""}`}>
      <a href={route}>{name}</a>
    </li>
  );
};

export default BottomNavBarItem;
