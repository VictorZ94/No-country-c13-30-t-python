import React from "react";
import SideNavbar from "../components/SideNavbar";

const Home = () => {
  return (
    <div className="flex">
        <div className="h-screen">
            <SideNavbar />
        </div>
        <div className="p-2">
            <h1 className="text-3xl">This is home Layout</h1>
        </div>
    </div>
  );
};

export default Home;
