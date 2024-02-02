"use client";
import React, { useState } from "react";
import styles from "./custom.module.css";
import { ButtonPrimary } from "./component/button/Button";
import { loginUser } from "./API/api";
import Link from "next/link";

function Home() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser(identifier, password);
      console.log("Login Response", data);
      // Redirect to /login if login is successful
      window.location.href = "/login";
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div
      className={`${styles.customBg} w-screen h-screen p-4 grid grid-cols-1 lg:grid-cols-2 py-10 px-10`}
    >
      <div className="flex flex-col justify-center px-10">
        <h1 className="text-3xl text-left text-white font-bold">Login</h1>
        <input
          className={`${styles.bgBorder} rounded-md w-full py-4 px-4 mt-7`}
          type="text"
          placeholder="Enter Username/Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          className={`${styles.bgBorder} rounded-md w-full py-4 px-4 mt-4`}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonPrimary text="Login" className="mt-4" onClick={handleLogin} />
        <div className="text-center px-10 py-10">
          <p className="text-white">
            No account?{" "}
            <Link href="/register">
              <span className={`${styles.golden}`}>Register here</span>
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

export default Home;
