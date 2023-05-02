import React, { useContext } from "react";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import MyFooter from "../components/Shared/Footer/MyFooter";
import { AuthContext } from "../context/AuthProviders";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Main = () => {
  // Context API
  const { fullLoading } = useContext(AuthContext);

  // Loading when page is reload
  if (fullLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Main;
