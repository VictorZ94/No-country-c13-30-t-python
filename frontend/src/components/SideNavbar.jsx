"use client";

import React from "react";
import { Avatar, Sidebar } from 'flowbite-react';
import { HiUserCircle, HiShoppingCart } from 'react-icons/hi';
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsFileEarmarkTextFill, BsCreditCard2BackFill } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
// @images
import LogoWallet from "../assets/icon-digital-wallet.png";
import User1 from "../assets/avatar-example.png";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <Sidebar className="w-80">
      <Sidebar.Logo
        href="#"
        img={LogoWallet}
        className="py-8"
        imgAlt="Digital wallet logo"
      >
      </Sidebar.Logo>
      <Sidebar.Items className="px-4">
        <Sidebar.ItemGroup className="flex flex-col h-[80vh] justify-between">
          <div className="flex flex-col gap-y-2">
            <Sidebar.Item
              icon={MdAccountBalanceWallet}
            >
              <Link to="/">
                Mi Billetera
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              icon={BsFileEarmarkTextFill}
            >
              <Link to="/reports">
                Reportes
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={IoLogoUsd}
            >
              <p>
                Recarga de fondos
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={BsCreditCard2BackFill}
            >
              <p>
                Pagos y compras
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingCart}
            >
              <p>
                Promociones y Ofertas
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={AiFillLock}
            >
              <p>
                Seguridad
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUserCircle}
            >
              <p>
                Soporte al cliente
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUserCircle}
            >
              <p>
                Terminos y condiciones
              </p>
            </Sidebar.Item>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <Avatar img={User1} rounded />
              <div>
                <h1 className="font-bold mt-2">
                  Rosita Rosa
                </h1>
                <p className="text-gray-700">id: 0123456789</p>
              </div>
            </div>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideNavbar;
