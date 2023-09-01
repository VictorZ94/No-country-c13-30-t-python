import React from "react";
import SideNavbar from "../components/SideNavbar";

const Profile = () => {
  return (
    <div className="flex">
        <div className="h-screen">
            <SideNavbar />
        </div>
        <div className="p-8 flex-auto">
            <h1>This is a profile view</h1>
        </div>
    </div>
  );
};

export default Profile;
