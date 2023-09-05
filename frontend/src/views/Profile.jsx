import React from "react";
import SideNavbar from "../components/SideNavbar";
import FormProfile from "../components/FormProfile";

const Profile = () => {
  return (
    <div className="flex">
        <div className="h-screen">
            <SideNavbar />
        </div>
        <div className="p-8 flex-auto">
        <FormProfile />
        </div>
    </div>
  );
};

export default Profile;
