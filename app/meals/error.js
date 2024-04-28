"use client";
import React from "react";

const error = () => {
  return (
    <>
      <div className="error">
        <h1>An error has occured.</h1>
        <p>Fetching meals failed.</p>
      </div>
    </>
  );
};

export default error;
