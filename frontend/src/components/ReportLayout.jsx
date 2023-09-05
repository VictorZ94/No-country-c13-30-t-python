import { Button } from "flowbite-react";
import Welcome from "./Welcome";

const ReportsLayout = () => {
  return (
    <div>
      <Welcome />
      <div className="py-8">
        <h1 className="text-3xl font-semibold">Reportes</h1>
        <p className="text-xl py-2">Conoce paso a paso las transacciones que realizas</p>
      </div>
      <div className="flex">
        <Button size="xl" className="mr-3">Pagos</Button>
        <Button size="xl" outline>Retiros</Button>
      </div>
      <div></div>
    </div>
  );
};

export default ReportsLayout;
