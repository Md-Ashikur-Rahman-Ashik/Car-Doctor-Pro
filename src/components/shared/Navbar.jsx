"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Home",
      path: "/",
    },
  ];

  const session = useSession();
  // console.log(session);

  return (
    <div className="bg-base-100 text-slate-900 mb-10">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image
              src={"/assets/logo.svg"}
              height={60}
              width={100}
              alt="Logo"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="font-semibold hover:text-primary duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <IoCartOutline className="text-xl" />
          <IoSearchSharp className="text-xl" />
          <a className="btn btn-outline btn-primary">Appointment</a>
          <div>
            {session.data?.user && (
              <Image
                alt={session?.data?.user?.name}
                src={session?.data?.user?.image}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
            )}
          </div>
          {!session.data ? (
            <Link href={"/login"} className="btn btn-primary">
              Login
            </Link>
          ) : (
            <button onClick={() => signOut()} className="btn btn-primary">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
