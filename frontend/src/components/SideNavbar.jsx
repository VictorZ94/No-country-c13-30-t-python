import { useState } from "react";
import { Avatar, Sidebar } from 'flowbite-react';
import { HiUserCircle, HiShoppingCart, HiUser } from 'react-icons/hi';
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsFileEarmarkTextFill, BsCreditCard2BackFill } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
// @images
import LogoWallet from "../assets/icon-digital-wallet.png";
import User1 from "../assets/avatar-example.png";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [itemName, setItemName] = useState(window.location.pathname);

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
          <li className="flex flex-col gap-y-2">
            <li className="flex" onClick={() => setItemName("/")}>
              <Link
                to="/"
                className={`nav-item ${itemName === "/" ? "text-secondary-c" : "text-gray-900"}`}
              >
              <MdAccountBalanceWallet
                className={`nav-icon-item ${itemName === "/" ? "text-secondary-c" : "text-gray-500"}`}
              />
                Mi Billetera
              </Link>
            </li>
            <li className="flex" onClick={() => setItemName("/reports")}>
              <Link
                to="/reports"
                className={`nav-item ${itemName === "/reports" ? "text-secondary-c" : "text-gray-900"}`}
              >
              <BsFileEarmarkTextFill
                className={`nav-icon-item ${itemName === "/reports" ? "text-secondary-c" : "text-gray-500"}`}
              />
                Reportes
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="flex flex-1 items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
              <IoLogoUsd
                className="h-6 w-6 mr-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
                Recarga de fondos
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="flex flex-1 items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
              <BsCreditCard2BackFill
                className="h-6 w-6 mr-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
                Pagos y compras
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="flex flex-1 items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
              <HiShoppingCart
                className="h-6 w-6 mr-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
                Promociones y Ofertas
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="flex flex-1 items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
              <AiFillLock
                className="h-6 w-6 mr-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
                Seguridad
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="flex flex-1 items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
              <HiUserCircle
                className="h-6 w-6 mr-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
                Soporte al cliente
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="flex flex-1 items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
              <HiUserCircle
                className="h-6 w-6 mr-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
                Terminos y condiciones
              </Link>
            </li>
            <li className="flex" onClick={() => setItemName("/profile")}>
              <Link
                to="/profile"
                className={`nav-item ${itemName === "/profile" ? "text-secondary-c" : "text-gray-900"}`}
              >
              <HiUser
                className={`nav-icon-item ${itemName === "/profile" ? "text-secondary-c" : "text-gray-500"}`}
              />
                Perfil
              </Link>
            </li>
          </li>
          <li>
            <div className="flex flex-wrap gap-2">
              <Avatar img={User1} rounded />
              <div>
                <h1 className="font-bold mt-2">
                  Rosita Rosa
                </h1>
                <p className="text-gray-700">id: 0123456789</p>
              </div>
            </div>
          </li>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideNavbar;
