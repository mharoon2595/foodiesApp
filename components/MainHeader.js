"use client";
import React, { useState } from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";

const MainHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const clickHandler = () => {
    setShowSidebar(true);
    document.body.classList.add("modal-open");
  };

  return (
    <>
      {showSidebar && (
        <Backdrop
          onClick={() => {
            setShowSidebar(false);
            document.body.classList.remove("modal-open");
          }}
        />
      )}
      {showSidebar && (
        <Sidebar>
          <div
            className="text-orange-500 py-2 px-1 text-lg font-bold"
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <NavLinks href={"/meals"}>Browse meals</NavLinks>
          </div>

          <div
            className="text-orange-500 py-2 px-1 text-lg font-bold"
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <NavLinks href={"/community"}>Community</NavLinks>
          </div>
        </Sidebar>
      )}
      <div
        className="flex w-full justify-between p-2 sm:p-5 text-orange-300"
        style={{ fontFamily: "Quicksand" }}
      >
        <Link href={"/"}>
          {" "}
          <div className="flex gap-2 sm:gap-5 items-center ml-5">
            <Image
              src={logoImg}
              alt="Food on a plate"
              width={70}
              height={70}
              priority
            />
            <p className="font-bold text-md xs:text-lg sm:font-bold sm:text-3xl">
              NEXTLEVEL FOOD
            </p>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center font-semibold">
          <ul className="flex gap-5">
            <NavLinks href={"/meals"}>Browse meals</NavLinks>

            <NavLinks href={"/community"}>Community</NavLinks>
          </ul>
        </nav>
        <nav
          className=" w-20 p-3 xs:w-24 xs:p-5 flex flex-col justify-center  sm:hidden hover:cursor-pointer"
          onClick={clickHandler}
        >
          <div className="w-full rounded-md bg-orange-500 my-1 py-1 h-2"></div>
          <div className="w-full rounded-md bg-orange-500 my-1 py-1 h-2"></div>
          <div className="w-full rounded-md bg-orange-500 my-1 py-1 h-2"></div>
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
