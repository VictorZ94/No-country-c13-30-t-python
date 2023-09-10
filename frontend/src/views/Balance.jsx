import React from "react";
import SideNavbar from "../components/SideNavbar";
import NavbarWithDropdown from "../components/NavBarSmall";

const Balance = () => {

  return (
    <div className="mt-2 md:mt-0">
      <NavbarWithDropdown />
      <div className="flex">
        <div className="h-screen hidden md:block">
            <SideNavbar />
        </div>
        <div className="p-8 flex-auto">
            <h1>Page balance</h1>
        </div>
      </div>
    </div>
  );
};

export default Balance;
