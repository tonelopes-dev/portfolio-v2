import React from "react";
import StacksJson from "./stacks.json";

const stack = StacksJson.map((item) => (
  <div className={item.className} data-carousel-item>
    <img
      src={item.image.src}
      className="icon absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
      alt="..."
    />
  </div>
));

return (
  <div className="flex">
   
    <div id="default-carousel" className=" w-40 p-4 " data-carousel="slide">
     
      <div className="relative h-56 overflow-hidden rounded-lg md:h-20 ">
        {stack}
      </div>
    </div>
  </div>
);
