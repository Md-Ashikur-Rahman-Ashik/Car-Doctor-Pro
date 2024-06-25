import { connectDB } from "@/lib/connectDB";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({
      _id: params.id,
    });
    // console.log(res);
    return Response.json({ message: "Deleted the booking", response: res });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
