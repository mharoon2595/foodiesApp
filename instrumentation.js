import connectDB from "./initdb";

export async function register() {
  await connectDB();
}
