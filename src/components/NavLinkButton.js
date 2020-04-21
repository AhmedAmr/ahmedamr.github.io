import React from "react";
import LinkButton from "./LinkButton";

const NavLinkButton = ({ icon, name, url }) => {
  return (
    <span class="navbar-item">
      <LinkButton icon={icon} name={name} url={url} />
    </span>
  );
};

export default NavLinkButton;
