"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit">{pending ? "Submitting...." : "Share meal"}</button>
  );
};

export default FormSubmit;
