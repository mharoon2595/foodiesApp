"use client";
import { FoodContext } from "@/store/context";
import { CldUploadWidget } from "next-cloudinary";
import { useContext } from "react";

export default function CloudinaryConfig({ onClick, cid }) {
  const store = useContext(FoodContext);
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
      options={{ multiple: true }}
    >
      {({ open, results }) => {
        if (results && results.info) {
          console.log("RESULTS---->", results.info.public_id);
          store.cidFn(results.info.public_id);
        }
        return (
          <button
            type="button"
            className="button bg-orange-500 p-2 rounded-md"
            onClick={() => {
              open();
              onClick();
            }}
          >
            Choose image
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
