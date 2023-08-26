import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  return (
      <div className="h-screen flex">
        <div className="h-full flex-1 bg-blanco-c">
          <span className="flex h-full items-center justify-center">
            <img src="./src/assets/login-img.png" alt="" />
          </span>
        </div>
        <div className="flex-1">
          <div className="flex h-full items-center">
            <form className="flex flex-1 mx-auto max-w-md flex-col px-5 gap-4">
              <div className="text-center text-primario-c-500 mb-24">
                <h1 className="text-3xl">Bienvenidos</h1>
                <p>Tus pagos de manera fácil</p>
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
                  placeholder="name@digitalwallet.com"
                  required
                  type="email"
                  className="focus:border-secondary-c focus:ring-secondary-c dark:focus:border-secondary-c dark:focus:ring-secondary-c"
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
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                  Remember me
                </Label>
              </div>
              <Button
                type="submit"
                className="bg-secondary-c enabled:hover:bg-secondary-c focus:ring-secondary-c dark:bg-secondary-c dark:enabled:hover:bg-secondary-c dark:focus:ring-secondary-c rounded-lg focus:ring-2"
              >
                Submit
              </Button>
              <div className="mt-16 mx-auto">
                <img src="./src/assets/icon-digital-wallet.png" alt="logo digital wallet"/>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
