"use client";

import React, { useState, useEffect } from "react";
import style from "./custome.module.css";
import { getProfile } from "../API/api";
import { BackIcon, EditIcon, Icon1 } from "../component/icon/Icon";

function Login() {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfile()
      .then((data) => {
        setProfile(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={`${style.bgPrime} w-full min-h-full px-8 py-8`}>
      <div className={`${style.textColor} flex justify-between items-center`}>
        <span
          className="flex gap-2 text-center items-center font-bold"
          style={{ color: "rgba(255, 255, 255, 1)" }}
        >
          <BackIcon /> Back
        </span>
        <span>
          {isLoading ? "Loading..." : profile.data ? profile.data.email : ""}
        </span>
        <Icon1 />
      </div>
      <div
        className={`${style.bgSecond} w-full min-h-36 rounded-2xl mt-6 flex justify-between px-4 py-2`}
      >
        <span className="text-white font-bold">
          {profile.data ? profile.data.email : ""}
        </span>
        <EditIcon />
      </div>
      <div
        className={`${style.bgThird} w-full min-h-36 rounded-2xl mt-6 px-4 py-4`}
      >
        <span className="justify-between flex font-bold">
          About <EditIcon />
        </span>
        <p className={`${style.textGray} py-14`}>
          Add in your your to help others know you better
        </p>
      </div>
      <div
        className={`${style.bgThird} w-full min-h-36 rounded-2xl mt-6 px-4 py-4`}
      >
        <span className="justify-between flex font-bold">
          Interest <EditIcon />
        </span>
        <p className={`${style.textGray} py-14`}>
          Add in your interest to find a better match
        </p>
      </div>
    </div>
  );
}

export default Login;
