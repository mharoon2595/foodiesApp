"use client";
import { createContext, useState } from "react";

export const FoodContext = createContext({
  cid: "",
  cidFn: (value) => {},
});

export default function FoodContextProvider({ children }) {
  const [cid, setCid] = useState("");

  const cidSetter = (value) => {
    setCid(value);
  };

  return (
    <FoodContext.Provider
      value={{
        cid: cid,
        cidFn: cidSetter,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
