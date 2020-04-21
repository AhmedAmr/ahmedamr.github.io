import React from "react";
const LinkButton = ({ icon, name, url }) => {
  const icons = {
    github: "fab fa-github",
    linkedin: "fab fa-linkedin",
  };
  return (
    <a class="button is-dark is-inverted is-outlined" href={url}>
      <span class="icon">
        <i class={icons[icon]}></i>
      </span>
      <span>{name}</span>
    </a>
  );
};

export default LinkButton;
