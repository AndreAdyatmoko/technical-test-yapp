import React from "react";
import style from "./custome.module.css";
import { BackIcon, EditIcon, Icon1 } from "../component/icon/Icon";

function Login() {
  return (
    <div className={`${style.bgPrime} w-screen h-screen px-8 py-8`}>
      <div className={`${style.textColor} flex justify-between items-center`}>
        <span
          className="flex gap-2 text-center items-center font-bold"
          style={{ color: "rgba(255, 255, 255, 1)" }}
        >
          <BackIcon /> Back
        </span>
        <span>@johndoe</span>
        <Icon1 />
      </div>
      <div
        className={`${style.bgSecond} w-full min-h-36 rounded-2xl mt-6 flex justify-between px-4 py-2`}
      >
        <span className="text-white font-bold">@johndoe123,</span>
        <EditIcon />
      </div>
      <div className={`${style.bgThird} w-full min-h-36 rounded-2xl mt-6 px-4 py-4`}>
        <span className="justify-between flex font-extrabold">About <EditIcon /></span>
        <p className="py-14">Add in your your to help others know you better</p>
      </div>
      <div
        className={`${style.bgThird} w-full min-h-36 rounded-2xl mt-6`}
      ></div>
    </div>
  );
}

export default Login;
