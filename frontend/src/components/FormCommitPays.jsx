import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { client } from "../utils/constants";
import { useAuth } from "../context/auth";

const FormCommitPays = () => {
  const [formPay, setFormPay] = useState({
    success: false
  });
  const { currentUser } = useAuth();

  const handleChange = (name, value) => {
    setFormPay({
      ...formPay,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/api/v1/pago/",
      {
        amount: +formPay?.cantity,
        details: formPay?.details,
        transaction_type: formPay?.pay_type,
        reference: formPay?.referencia,
        reference_name: formPay?.referencia_name,
        user: currentUser?.user?.id
      }
    ).then(res => console.log(res)).catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex max-w-md gap-4">
        <legend className="text-md font-medium mb-4">
          Categoria
        </legend>
        <div className="flex items-center mb-4">
          <input
            id="persona"
            type="radio"
            name="pay_type"
            value="persona"
            required
            className="w-4 h-4 border-gray-300 focus:ring-2 checked:bg-terciary-c focus:ring-terciary-c dark:bg-gray-700 dark:checked:bg-terciary-c dark:border-gray-600"
            onChange={(e) => handleChange("pay_type", e.target.value)}
          />
          <label htmlFor="persona" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Persona
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="factura"
            type="radio"
            name="pay_type"
            value="factura"
            required
            className="w-4 h-4 border-gray-300 focus:ring-2 checked:bg-terciary-c focus:ring-terciary-c dark:bg-gray-700 dark:checked:bg-terciary-c dark:border-gray-600"
            onChange={(e) => handleChange("pay_type", e.target.value)}
          />
          <label htmlFor="factura" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Factura
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="cantity"
              value="Cantidad"
            />
          </div>
          <input
            id="cantity"
            name="cantity"
            placeholder="0.00 USD"
            required
            type="number"
            onChange={(e) => handleChange("cantity", e.target.value)}
            step=".01"
            min={0}
            className="w-full rounded-lg text-sm p-2.5"
            max={1000000}
          />
        </div>
        <legend className="text-md font-medium mb-4">
          Datos
        </legend>
        <div className="flex">
          <div className="mb-4 mr-3">
            <div className="mb-2 block">
              <Label
                htmlFor="referencia"
                value="Referencia o CC"
              />
            </div>
            <TextInput
              id="referencia"
              name="referencia"
              placeholder="1241597554"
              required
              type="number"
              min={0}
              color={"secondary-c"}
              onChange={(e) => handleChange("referencia", e.target.value)}
            />
          </div>
          <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="referencia_name"
              value="nombre referencia"
            />
          </div>
          <TextInput
            id="referencia_name"
            name="referencia_name"
            placeholder="falabella, Oscar Woss..."
            type="text"
            color={"secondary-c"}
            onChange={(e) => handleChange("referencia_name", e.target.value)}
          />
        </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="max-w-md" id="textarea">
          <div className="mb-2 block">
            <Label
              htmlFor="comment"
              value="Your message"
            />
          </div>
          <Textarea
            id="comment"
            name="details"
            placeholder="Escribe los detalles del pago..."
            color={"secondary-c"}
            rows={2}
            onChange={(e) => handleChange("details", e.target.value)}
          />
        </div>
      </fieldset>
      <div className="my-4 flex justify-center">
        <Button
          type="submit"
          disabled={
            !formPay?.referencia ||
            !formPay?.cantity
          }
          className="bg-secondary-c-500 enabled:hover:bg-secondary-c focus:ring-secondary-c-200 dark:bg-secondary-c-500 dark:enabled:hover:bg-secondary-c-500 dark:focus:ring-secondary-c-200 rounded-lg focus:ring-2"
        >
          Enviar pago
        </Button>
      </div>
    </form>
  );
};

export default FormCommitPays;
