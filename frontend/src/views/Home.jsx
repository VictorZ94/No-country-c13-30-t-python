import React, { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import NavbarWithDropdown from "../components/NavBarSmall";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import { client } from "../utils/constants";

const Home = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [saldo, setSaldo] = useState();

  useEffect(() => {
    if (!currentUser?.isAuthenticated) {
      return navigate('/login');
    }

    client.get(`/api/v1/saldo/${currentUser?.user?.id}`)
      .then(res => setSaldo(+res?.data.balance));
  }, []);
  return (
    <div className="mt-2 md:mt-0">
      <NavbarWithDropdown />
      <div className="flex">
        <div className="h-screen hidden md:block">
            <SideNavbar />
        </div>
        <div className="p-8 flex-auto">
          <HomeLayout saldo={saldo}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
