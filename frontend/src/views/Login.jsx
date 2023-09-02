import React from "react";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
      <div className="h-screen flex">
        <div className="h-full hidden md:block flex-1 bg-blanco-c">
          <span className="flex h-full items-center justify-center">
            <img src="./src/assets/login-img.png" alt="" />
          </span>
        </div>
        <div className="flex-1">
          <div className="flex h-full items-center">
            <FormLogin />
          </div>
        </div>
      </div>
  );
};

export default Login;
