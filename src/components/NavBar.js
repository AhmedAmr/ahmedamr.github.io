import React from "react";
import NavLinkButton from "./NavLinkButton";

const NavBar = () => {
  return (
    <div id="navbarMenuHeroC" class="navbar-menu">
      <div class="navbar-end ">
        <NavLinkButton
          icon="linkedin"
          name="/ahmedamron"
          url="https://www.linkedin.com/in/ahmedamron"
        />
        <NavLinkButton
          icon="github"
          name="@ahmedamr"
          url="http://github.com/ahmedamr"
        />
      </div>
    </div>
  );
};

export default NavBar;
