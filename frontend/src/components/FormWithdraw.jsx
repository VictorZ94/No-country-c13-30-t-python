import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { client } from "../utils/constants";

const FormWithdraw = ({ saldo }) => {
  const [formWithdraw, setFormWithdraw] = useState({});

  const handleChange = (name, value) => {
    setFormWithdraw({
      ...formWithdraw,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/api/v1/retiro/", {
      identification_number: formWithdraw?.cedula,
      value: formWithdraw?.cantity
    }).then(res => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit}>
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
            step=".01"
            min={0}
            className="w-full rounded-lg text-sm p-2.5"
            max={saldo}
            type="number"
            onChange={(e) => handleChange("cantity", e.target.value)}
          />
        </div>
        <legend className="text-md font-medium mb-4">
          Datos
        </legend>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="cedula"
              value="Número de cédula"
            />
          </div>
          <TextInput
            id="cedula"
            name="cedula"
            placeholder="1241597554"
            required
            min={0}
            type="number"
            color={"secondary-c"}
            onChange={(e) => handleChange("cedula", e.target.value)}
          />
        </div>
      </fieldset>
      <div className="mb-4 flex justify-center">
        <Button
          type="submit"
          disabled={!formWithdraw?.cantity || !formWithdraw?.cedula}
          className="bg-secondary-c-500 enabled:hover:bg-secondary-c focus:ring-secondary-c-200 dark:bg-secondary-c-500 dark:enabled:hover:bg-secondary-c-500 dark:focus:ring-secondary-c-200 rounded-lg focus:ring-2"
        >
          Enviar pago
        </Button>
      </div>
    </form>
  );
};

export default FormWithdraw;
