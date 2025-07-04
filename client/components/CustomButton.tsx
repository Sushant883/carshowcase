"use client"

import { CustombuttonProps } from "@/types";
import React from "react";

const CustomButton = ({title,containerStyles,handleClick} : CustombuttonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span 
        className={'flex-1'}
        >
            {title}
        </span>
    </button>
  );
};

export default CustomButton;
