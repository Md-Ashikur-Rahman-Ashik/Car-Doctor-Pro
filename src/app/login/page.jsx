"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const page = () => {
  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res);
  };

  return (
    <div className="container mx-auto">
      <h6 className="font-bold text-center text-primary text-6xl mb-12">
        Sign In
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
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
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
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-6 flex justify-center">or sign in with</h6>
            <div className="flex justify-center gap-4">
              <button className="btn px-6 text-primary">
                <FaGoogle />
              </button>
              <button className="btn px-6 text-primary">
                <FaGithub />
              </button>
            </div>
            <h6 className="my-6 flex justify-center gap-2">
              New Here?{" "}
              <Link href={"/signup"} className="text-primary font-semibold">
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
