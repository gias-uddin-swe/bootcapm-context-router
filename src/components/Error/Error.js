import React, { useContext } from "react";
import Footer from "../Footer/Footer";

import "./Error.css";
import { userContext } from "./../../App";

const Error = () => {
  const [user, setuser] = useContext(userContext);
  console.log(user);

  return (
    <div className="">
      <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
    </div>
  );
};

export default Error;
