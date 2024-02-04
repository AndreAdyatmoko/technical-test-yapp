import React from "react";
import style from "../custome.module.css";
import { ButtonGold } from "@/app/component/button/Button";

function About() {
  return (
    <div className={`${style.bgPrime} w-full h-full px-8 py-8`}>
      <div className="flex justify-between">
        <span>About</span>
        <ButtonGold text="Save & Update" />
      </div>
      <div className="flex gap-8 py-6">
        <div className={`${style.bgForth} w-36 h-36 rounded-3xl`}>
          <span className={`${style.textGold} text-center`}>+</span>
        </div>
        <p className={`${style.textWhite}`}>Add image</p>
      </div>
      <div>
        <div className="w-screen h-screen p-4 grid grid-cols-3">
          <p className="flex">Display name:</p>
          <input
            className={`${style.bgForth} h-10 rounded-xl py-4} col-span-2`}
          />
        </div>
        <div className="w-screen h-screen p-4 grid grid-cols-3">
          <p className="flex">Display name:</p>
          <input
            className={`${style.bgForth} h-15 rounded-xl px-4} col-span-2`}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
