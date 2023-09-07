import { Button } from "flowbite-react";
import React from "react";
import { MdAccountBalanceWallet } from "react-icons/md";

const Wallet = () => {
  return (
    <div className="bg-primario-c-400 w-96 border rounded-3xl h-80">
      <MdAccountBalanceWallet className="mx-auto my-8 w-14 h-14 text-primario-light"/>
      <div className="flex flex-col items-center">
        <div className="text-white text-lg">
          <p className="py-2">Tu saldo actual</p>
          <span className="text-2xl">$ 0.00 USD</span>
        </div>
        <Button outline className="mt-12">
          Recargar saldo
        </Button>
      </div>
    </div>
  );
};

export default Wallet;
