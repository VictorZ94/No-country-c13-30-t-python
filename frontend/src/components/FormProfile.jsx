import { Button, Label, Select, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import countriesCode from "../data/code_country.json";
import { useEffect } from "react";
import { client } from "../utils/constants";

const FormProfile = () => {
  useEffect(() => {
    client.get("/user", { withCredentials: true })
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="max-w-3xl">
        <div className="text-primario-c-500 mb-4">
          <h1 className="text-3xl">Datos personales</h1>
        </div>
        <form className="flex flex-1 mx-auto flex-col gap-4">
            <div className="flex">
              <div className="mb-2 mr-3 flex-1">
                <Label
                  htmlFor="name"
                  value="Nombre (s)"
                />
                <TextInput
                  id="name"
                  placeholder="John"
                  required
                  color={"secondary-c"}
                  type="text"
                />
              </div>
              <div className="mb-2 flex-1">
                <Label
                  htmlFor="last_name"
                  value="Apellido (s)"
                />
                <TextInput
                  id="last_name"
                  placeholder="Doe"
                  color={"secondary-c"}
                  type="text"
                />
              </div>
            </div>
            <div className="mb-2">
              <Label
                htmlFor="email1"
                value="E-mail"
              />
              <TextInput
                id="email1"
                placeholder="name@digitalwallet.com"
                type="email"
                rightIcon={HiMail}
                color={"secondary-c"}
              />
            </div>
            <div className="flex">
              <div className="mb-2 mr-3 flex-1">
                <Label
                  htmlFor="code_country_phone"
                  value="Código de países"
                />
                <Select
                  id="countries"
                  required
                  color="secondary-c"
                >
                  {countriesCode.map(({ country, code }) => (
                    <option value={code} key={code}>
                      {`(+${code}) ${country}`}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="mb-2 flex-1">
                <Label
                  htmlFor="phone_number"
                  value="Celular"
                />
                <TextInput
                  id="phone_number"
                  placeholder="3126977415"
                  color="secondary-c"
                  type="number"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mb-2 mr-3 flex-1">
                <Label
                  htmlFor="document_type"
                  value="Tipo de documento"
                />
                <Select
                  id="document_type"
                  color="secondary-c"
                >
                  <option>Cédula</option>
                  <option>Pasaporte</option>
                  <option>Identidad</option>
                </Select>
              </div>
              <div className="mb-2 flex-1">
                <Label
                  htmlFor="id"
                  value="Número de identificación"
                />
                <TextInput
                  id="id"
                  placeholder="1020497722"
                  color="secondary-c"
                  type="number"
                />
              </div>
            </div>

            <div className="flex">
            </div>
            <Button
              type="submit"
              className="bg-secondary-c-500 enabled:hover:bg-secondary-c focus:ring-secondary-c-200 dark:bg-secondary-c-500 dark:enabled:hover:bg-secondary-c-500 dark:focus:ring-secondary-c-200 rounded-lg focus:ring-2"
            >
              Actualizar
            </Button>
        </form>
      </div>
      {/* <div className="mt-16 mx-auto">
        <img src="./src/assets/icon-digital-wallet.png" alt="logo digital wallet"/>
      </div> */}
    </>
  );
};

export default FormProfile;
