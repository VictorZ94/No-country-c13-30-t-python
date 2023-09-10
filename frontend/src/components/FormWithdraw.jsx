import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

const FormWithdraw = () => {
  const [formWithdraw, setFormWithdraw] = useState({});

  const handleChange = (name, value) => {
    setFormWithdraw({
      ...formWithdraw,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formWithdraw));
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
          <TextInput
            id="cantity"
            name="cantity"
            placeholder="0.00 USD"
            required
            type="number"
            color={"secondary-c"}
            onChange={(e) => handleChange("cantity", e.target.value)}
          />
        </div>
        <legend className="text-sm font-medium mb-4">
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
            type="number"
            color={"secondary-c"}
            onChange={(e) => handleChange("cedula", e.target.value)}
          />
        </div>
      </fieldset>
      <div className="mb-4 flex justify-center">
        <Button
          type="submit"
          className="bg-secondary-c-500 enabled:hover:bg-secondary-c focus:ring-secondary-c-200 dark:bg-secondary-c-500 dark:enabled:hover:bg-secondary-c-500 dark:focus:ring-secondary-c-200 rounded-lg focus:ring-2"
        >
          Enviar pago
        </Button>
      </div>
    </form>
  );
};

export default FormWithdraw;
