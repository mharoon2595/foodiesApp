"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const ImageOnDetails = ({ source }) => {
  return <CldImage fill src={source} alt="Description of my image" />;
};

export default ImageOnDetails;
