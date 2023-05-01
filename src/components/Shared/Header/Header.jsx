import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="md:w-[50%] md:mx-auto py-4" fluid={true} rounded={true}>
      <Navbar.Brand as={Link} to="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Cookiteer
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Button gradientDuoTone="cyanToBlue">Login</Button>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blog</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
