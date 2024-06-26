import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

let db;

export const connectDB = async () => {
  if (db) {
    return db;
  }
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("doctorDB");
    return db;
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: "Something went wrong", error });
  }
};
