import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const MainHeader = () => {
  return (
    <div
      className="flex justify-between p-5 text-orange-300"
      style={{ fontFamily: "Quicksand" }}
    >
      <Link href={"/"}>
        {" "}
        <div className="flex gap-5 items-center ml-5">
          <Image
            src={logoImg}
            alt="Food on a plate"
            className="w-28 h-28"
            priority
          />
          <p className=" font-bold text-3xl">NEXTLEVEL FOOD</p>
        </div>
      </Link>

      <nav className="flex items-center font-semibold">
        <ul className="flex  gap-5">
          <NavLinks href={"/meals"}>Browse meals</NavLinks>

          <NavLinks href={"/community"}>Community</NavLinks>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
