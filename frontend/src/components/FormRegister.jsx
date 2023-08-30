import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <div className="w-full bg-blanco-c rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl mb-8 font-bold text-center leading-tight tracking-tight text-primario-c-500 md:text-2xl dark:text-white">
                Crear cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="nombre"
                      value="Nombres y Apellidos"
                    />
                  </div>
                  <TextInput
                    id="nombre"
                    placeholder="Rosa Ramos"
                    required
                    type="text"
                    color={"secondary-c"}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="identidad"
                      value="CI Identidad o pasaporte"
                    />
                  </div>
                  <TextInput
                    id="identidad"
                    placeholder="123456789"
                    required
                    type="text"
                    color={"secondary-c"}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="E-mail"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    placeholder="rosa@digitalwallet.com"
                    required
                    type="email"
                    color={"secondary-c"}
                  />
                </div>
                <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password1"
                    value="Contraseña"
                  />
                </div>
                <TextInput
                  id="password1"
                  placeholder="***********"
                  required
                  type="password"
                  color={"secondary-c"}
                />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password2"
                      value="Confirmación de contraseña"
                    />
                  </div>
                  <TextInput
                    id="password2"
                    placeholder="***********"
                    required
                    type="password"
                    color={"secondary-c"}
                  />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                </div>
                <Button
                  type="submit"
                  className="bg-secondary-c enabled:hover:bg-secondary-c focus:ring-secondary-c dark:bg-secondary-c dark:enabled:hover:bg-secondary-c dark:focus:ring-secondary-c rounded-lg focus:ring-2"
                  fullSized
                >
                  Crear
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Ya tiene una cuenta? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
            </form>
        </div>
    </div>
  );
};

export default FormRegister;
