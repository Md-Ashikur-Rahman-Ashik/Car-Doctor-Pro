"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialSignIn = () => {
  const router = useRouter();
  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider);
    console.log(res)
    if (res.status == -"authenticated") {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn px-6 text-primary"
      >
        <FaGoogle />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="btn px-6 text-primary"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialSignIn;
