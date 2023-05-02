import { Button } from "flowbite-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import animation404 from "../../assets/404page.gif";

// Error page
const ErrorPage = () => {
  const { error } = useRouteError();
  console.error(error);
  return (
    <section className="flex items-center h-screen">
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center">
          <img className="h-96" src={animation404} alt="" />
          <p className="text-lg font-semibold md:text-xl text-yellow-400">
            {error?.message}
          </p>
          <Link to="/">
            <Button size="xs" pill={true} className="w-full mt-4" type="button">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
