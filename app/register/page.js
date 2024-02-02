"use client";
import { registerUser } from "@/app/API/api";
import styles from "../custom.module.css";
import { ButtonPrimary } from "../component/button/Button";
import Link from "next/link";

function Register() {
  const handelRegister = async () => {
    try {
      const data = await registerUser("email", "username", "password");
      console.log("Register Response", data);
    } catch (error) {
      console.error("Register Error", error);
    }
  };
  return (
    <div
      className={`${styles.customBg} w-screen h-screen p-4 grid grid-cols-1 lg:grid-cols-2 py-10 px-10`}
    >
      <div className="flex flex-col justify-center px-10">
        <h1 className="text-3xl text-left text-white font-bold">Register</h1>
        <input
          className={`${styles.bgBorder} rounded-md w-full py-4 px-4 mt-7`}
          type="text"
          placeholder="Enter Email"
        />
        <input
          className={`${styles.bgBorder} rounded-md w-full py-4 px-4 mt-4`}
          type="text"
          placeholder="Create Username"
        />
        <input
          className={`${styles.bgBorder} rounded-md w-full py-4 px-4 mt-4`}
          type="Password"
          placeholder="Create Password"
        />
        <input
          className={`${styles.bgBorder} rounded-md w-full py-4 px-4 mt-4`}
          type="Password"
          placeholder="Confirm Password"
        />
        <ButtonPrimary
          text="Register"
          className="mt-4"
          onClick={handelRegister}
        />
        <div className="text-center px-10 py-10">
          <p className={`${styles.textColor} text-white`}>
            Have an account?{" "}
            <Link href="/">
            <span className={`${styles.textColor} underline`}>
              Login here
            </span>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-center font-bold text-white">
          Hi There, Welcome to Your App
        </h1>
      </div>
    </div>
  );
}

export default Register;
