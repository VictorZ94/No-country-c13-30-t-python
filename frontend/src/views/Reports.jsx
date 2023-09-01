import React from "react";
import SideNavbar from "../components/SideNavbar";
import ReportsLayout from "../components/ReportLayout";

const Reports = () => {
  return (
    <div className="flex">
        <div className="h-screen">
            <SideNavbar />
        </div>
        <div className="p-8 flex-auto">
            <ReportsLayout />
        </div>
    </div>
  );
};

export default Reports;
