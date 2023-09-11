import { useEffect } from "react";
import { client } from "../utils/constants";

const Logout = () => {
  useEffect(() => {
    client.get("/logout", { withCredentials: true })
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }, []);
};

export default Logout;
