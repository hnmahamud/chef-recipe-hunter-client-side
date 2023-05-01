import { Footer } from "flowbite-react";
import React from "react";
import logo from "../../../assets/logo.png";

const MyFooter = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div>
            <Footer.Brand href="#" src={logo} name="Cookiteer" />
          </div>
          <Footer.LinkGroup className="flex gap-4">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Cookiteer™" year={2022} />
      </div>
    </Footer>
  );
};

export default MyFooter;
