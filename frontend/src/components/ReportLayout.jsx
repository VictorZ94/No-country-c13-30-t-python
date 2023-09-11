import { Button, Table } from "flowbite-react";
import Welcome from "./Welcome";
import historical from "../data/historial.json";
import { HiUser } from "react-icons/hi";
import { BsFileEarmarkTextFill, BsArrowUpRight } from "react-icons/bs";

const ReportsLayout = () => {
  return (
    <div>
      <Welcome />
      <div className="py-8">
        <h1 className="text-3xl font-semibold">Reportes</h1>
        <p className="text-xl py-2">Conoce paso a paso las transacciones que realizas</p>
      </div>
      <div className="flex">
        <Button
          size="xl"
          type="submit"
          className="bg-secondary-c-500 enabled:hover:bg-secondary-c focus:ring-secondary-c-200 dark:bg-secondary-c-500 dark:enabled:hover:bg-secondary-c-500 dark:focus:ring-secondary-c-200 rounded-lg focus:ring-2 mr-3"
        >
          Pagos
        </Button>
        <Button
          size="xl"
          type="submit"
          className="bg-secondary-c-500 enabled:hover:bg-secondary-c focus:ring-secondary-c-200 dark:bg-secondary-c-500 dark:enabled:hover:bg-secondary-c-500 dark:focus:ring-secondary-c-200 rounded-lg focus:ring-2"
        >
          Retiros
        </Button>
      </div>
      <Table striped className="mt-5">
      <Table.Head>
        <Table.HeadCell className="py-5 text-white text-sm bg-primario-c-500">
          Categoría
        </Table.HeadCell>
        <Table.HeadCell className="py-5 text-white text-sm bg-primario-c-500">
          Fecha
        </Table.HeadCell>
        <Table.HeadCell className="py-5 text-white text-sm bg-primario-c-500">
          cantidad
        </Table.HeadCell>
        <Table.HeadCell className="py-5 text-white text-sm bg-primario-c-500">
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {historical.map((item, idx) => (
          <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap text-lg font-bold">
            <div className="flex">
              {item?.categoria === "pago_persona"
                ? <HiUser className="mx-2 my-1 text-gray-900 dark:text-white"/>
                : <BsFileEarmarkTextFill className="mx-2 my-1 text-gray-900 dark:text-white"/>
              }
              <span>
                <p className="text-gray-900 dark:text-white">
                  {item?.nombre}
                </p>
                <p className="text-sm text-gray-400">
                  {item?.descripción}
                </p>
              </span>
            </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap text-lg font-bold">
            <p className="text-gray-900 dark:text-white">
              {item?.fecha}
            </p>
            <p className="text-sm text-gray-400">
              {item?.tiempo}
            </p>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap text-lg font-bold">
            <p className="text-gray-900 dark:text-white">
              {`${item?.valor} USD`}
            </p>
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-bold text-lg text-terciary-c hover:underline dark:text-terciary-c"
              href="#"
            >
              <p>
                <BsArrowUpRight/>
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>
  );
};

export default ReportsLayout;
