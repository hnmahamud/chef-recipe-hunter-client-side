import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
  const optionsForPc = {
    orientation: "landscape",
    unit: "in",
    format: [10, 18],
  };

  const optionsForPhn = {
    orientation: "portrait",
    unit: "in",
    format: [22, 6],
  };

  return (
    <div ref={ref}>
      {/* Blogs Section */}
      <div className="w-[95%] md:w-[80%] mx-auto flex flex-col space-y-4 my-12">
        <div className="flex justify-between">
          <h3 className="text-2xl text-gray-500 font-extrabold">Blogs</h3>
          <div>
            <div className="hidden md:block text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-md text-sm text-center px-4 py-1">
              <Pdf
                x={1}
                y={1}
                options={optionsForPc}
                targetRef={ref}
                filename="blogs.pdf"
              >
                {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
              </Pdf>
            </div>

            <div className="block md:hidden text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-md text-sm text-center px-4 py-1">
              <Pdf
                x={1}
                y={1}
                options={optionsForPhn}
                targetRef={ref}
                filename="blogs.pdf"
              >
                {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
              </Pdf>
            </div>
          </div>
        </div>
        <div className="card card-side border rounded-md shadow-md p-4">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                Differences between uncontrolled and controlled components.
              </h2>
              <p className="text-gray-500">
                Uncontrolled and controlled components are two types of UI
                elements used in handle user input. Uncontrolled components rely
                on the DOM to manage user input and do not have their own
                internal state, while controlled components manage user input
                through their own internal state. Controlled components offer
                more flexibility and control over user input but require more
                code and can be more complex to manage.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-side border rounded-md shadow-md p-4">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                How to validate React props using PropTypes?
              </h2>
              <p className="text-gray-500">
                To validate React props using PropTypes, you can import the
                PropTypes library and define the expected type and shape of each
                prop in your component. This helps catch errors early on and
                makes your code more robust. PropTypes can validate primitive
                types like strings and numbers, as well as more complex types
                like arrays and objects. By providing clear and concise prop
                validation, you can ensure that your components receive the
                correct data and avoid potential bugs or issues down the line.
                Overall, PropTypes is a useful tool for improving the
                reliability and maintainability of your React code.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-side border rounded-md shadow-md p-4">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                Difference between nodejs and express js.
              </h2>
              <p className="text-gray-500">
                Node.js is a runtime environment that allows developers to run
                JavaScript code outside of a web browser. It provides a set of
                built-in modules and APIs for server-side programming, such as
                file system operations, networking, and event handling.
                Express.js, on the other hand, is a popular web framework built
                on top of Node.js that simplifies the process of building web
                applications by providing a set of abstractions for handling
                HTTP requests and responses. Express.js adds features like
                middleware, routing, and template rendering to Node.js, making
                it easier to create robust and scalable web applications. In
                summary, while Node.js provides a runtime environment for
                server-side JavaScript code, Express.js provides a higher-level
                abstraction for building web applications on top of Node.js.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-side border rounded-md shadow-md p-4">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is a custom hook, and why will you create a custom hook?
              </h2>
              <p className="text-gray-500">
                In React, a custom hook is a reusable function that encapsulates
                common logic or behavior that can be shared across multiple
                components. Custom hooks are a way to extract and reuse code
                that is used in multiple places, reducing code duplication and
                increasing code maintainability. Custom hooks typically use
                other React hooks, such as useState or useEffect, to manage
                state and side effects. They can also be used to abstract away
                complex logic or API calls, making it easier to work with
                external services or data sources. In summary, custom hooks are
                a powerful way to create reusable code in React, enabling
                developers to write more modular, maintainable, and scalable
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
