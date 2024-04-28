import React from "react";

const Sidebar = ({ onClick, children }) => {
  return (
    <div
      className="absolute top-0 left-0 z-10 w-[30%] h-full flex flex-col gap-2 bg-slate-800 p-2 sm:hidden"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Sidebar;
