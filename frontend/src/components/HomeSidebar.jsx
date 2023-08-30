import React from "react";
import { Avatar, Sidebar } from 'flowbite-react';
import { HiShoppingBag, HiUser } from 'react-icons/hi';
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import LogoWallet from "../assets/icon-digital-wallet.png";

const HomeSidebar = () => {
  return (
    <Sidebar>
      <Sidebar.Logo
        href="#"
        img={LogoWallet}
        className="py-8"
        imgAlt="Digital wallet logo"
      >
      </Sidebar.Logo>
      <Sidebar.Items className="px-4">
        <Sidebar.ItemGroup className="flex flex-col h-[70vh] justify-between">
          <div className="">
            <Sidebar.Item
              href="#"
              icon={MdAccountBalanceWallet}
            >
              <p>
                Mi Billetera
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={BsFileEarmarkTextFill}
            >
              <p>
                Reportes
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
            >
              <p>
                Users
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingBag}
            >
              <p>
                Products
              </p>
            </Sidebar.Item>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
            <Avatar rounded />
          </div>
            <h1>
              Rosita Rosa
            </h1>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default HomeSidebar;
