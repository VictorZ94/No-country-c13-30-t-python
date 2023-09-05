import React, { useEffect } from "react";
import SideNavbar from "../components/SideNavbar";
import ReportsLayout from "../components/ReportLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Reports = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null || currentUser === undefined || currentUser === {}) {
      return navigate('/login');
    }
  }, []);

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
