import React from "react";
import SideNavbar from "../components/SideNavbar";
import NavbarWithDropdown from "../components/NavBarSmall";

const Home = () => {
  return (
    <div className="mt-2 md:mt-0">
      <NavbarWithDropdown />
      <div className="flex">
        <div className="h-screen hidden md:block">
            <SideNavbar />
        </div>
        <div className="p-2">
            <h1 className="text-3xl">This is home Layout</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
