import { Button } from "flowbite-react";
import ReportImage from "../assets/reports-img.png";

const ReportsLayout = () => {
  return (
    <div>
      <div className="flex justify-between bg-terciary-c w-full h-48 border rounded-3xl">
        <div className="p-8">
          <h1 className="text-3xl font-semibold uppercase">Bienvenido a digitalwallet</h1>
          <p className="text-xl py-4">Tu Billetera en Línea preferida, gestiona tus transacciones financieras de manera segura</p>
        </div>
        <img src={ReportImage} className="mx-8" alt="report layout image" />
      </div>
      <div className="py-8">
        <h1 className="text-3xl font-semibold">Reportes</h1>
        <p className="text-xl py-2">Conoce paso a paso las transacciones que realizas</p>
      </div>
      <div className="flex">
        <Button size="xl" className="mr-3">Pagos</Button>
        <Button size="xl" outline>Retiros</Button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ReportsLayout;
