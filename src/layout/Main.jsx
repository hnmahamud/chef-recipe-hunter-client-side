import React from "react";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import MyFooter from "../components/Shared/Footer/MyFooter";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Main;
