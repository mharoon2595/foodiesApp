"use server";

import connectDB from "@/initdb";
import swal from "sweetalert";

const establishConnection = async () => {
  try {
    const connectToDB = await connectDB();
    return "Connected boss!";
  } catch (err) {
    console.log(err.message);
    swal("Oops", err.message, "error");
  }
};

export default establishConnection;
