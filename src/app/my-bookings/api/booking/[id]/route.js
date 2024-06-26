import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({
      _id: params.id,
    });
    // console.log(res);
    return NextResponse.json({ message: "Deleted the booking", response: res });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updatedDoc = await request.json();
  try {
    const res = await bookingsCollection.updateOne(
      {
        _id: params.id,
      },
      {
        $set: {
          ...updatedDoc,
        },
      },
      {
        upsert: true,
      }
    );
    // console.log(res);
    return NextResponse.json({ message: "Updated the booking", response: res });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.findOne({
      _id: params.id,
    });
    // console.log(res);
    return NextResponse.json({ message: "Booking found", data: res });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
