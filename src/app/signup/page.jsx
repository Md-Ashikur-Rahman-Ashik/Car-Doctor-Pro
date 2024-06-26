"use client";
import SocialSignIn from "@/components/shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const page = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // console.log(newUser);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    // console.log(res);
    if (res.status === 200) {
      event.target.reset();
    }
  };

  return (
    <div className="container mx-auto">
      <h6 className="font-bold text-center text-primary text-6xl mb-12">
        Sign Up
      </h6>
      <div className="flex justify-center gap-2">
        <div>
          <Image
            alt="Login Image"
            src={"/assets/images/login/login.svg"}
            height={540}
            width={540}
          ></Image>
        </div>
        <div className="border-2 rounded-xl p-12">
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex mt-2 flex-col gap-2">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button type="submit" className="btn mt-6 btn-primary w-full">
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-6 flex justify-center">or sign up with</h6>
            <SocialSignIn></SocialSignIn>
            <h6 className="my-6 flex justify-center gap-2">
              Already have an account?{" "}
              <Link href={"/login"} className="text-primary font-semibold">
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
