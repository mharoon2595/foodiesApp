import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      className="absolute top-0 left-0 h-full w-full bg-black opacity-75 z-[5] sm:hidden"
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
