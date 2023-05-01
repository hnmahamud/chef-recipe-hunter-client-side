import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProviders";
import { toast } from "react-toastify";

const Header = () => {
  // Context API
  const { user, logout } = useContext(AuthContext);

  // Use location for active class
  const location = useLocation();

  // Logout handler
  const logoutHandler = () => {
    logout()
      .then(() => {
        toast("Logout Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar className="md:w-[50%] md:mx-auto py-4" fluid={true} rounded={true}>
      <Navbar.Brand as={Link} to="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Cookiteer
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        {user ? (
          <Tooltip content={user.displayName} placement="left">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar img={user.photoURL} rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
            </Dropdown>
          </Tooltip>
        ) : (
          <Button gradientDuoTone="cyanToBlue">Login</Button>
        )}

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
