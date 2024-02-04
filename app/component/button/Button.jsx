import React from "react";
import styles from "../../custom.module.css";

export const ButtonPrimary = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.buttonBg} font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export const ButtonGold = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.textGold} font-bold ${className}`}
    >
      {text}
    </button>
  );
};
