import React from "react";
import SideNavbar from "../components/SideNavbar";
import NavbarWithDropdown from "../components/NavBarSmall";
import FormSecurity from "../components/FormSecurity";

const Security = () => {

  return (
    <div className="mt-2 md:mt-0">
      <NavbarWithDropdown />
      <div className="flex">
        <div className="h-screen hidden md:block">
            <SideNavbar />
        </div>
        <div className="p-8 flex-auto">
            <FormSecurity />
        </div>
      </div>
    </div>
  );
};

export default Security;
