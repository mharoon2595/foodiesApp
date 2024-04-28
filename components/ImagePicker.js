"use client";

import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import CloudinaryConfig from "@/lib/CloudinaryConfig";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  const handleClick = () => {
    imageInput.current.click();
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg, image/webp"
          ref={imageInput}
          onChange={handleImage}
        />
        <CloudinaryConfig onClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default ImagePicker;
