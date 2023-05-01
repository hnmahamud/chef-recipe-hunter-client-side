import { Carousel } from "flowbite-react";
import React from "react";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[calc(100vh-76px)]">
      <Carousel>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-white"
        >
          Slide 1
        </div>

        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-white"
        >
          Slide 2
        </div>

        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-white"
        >
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
