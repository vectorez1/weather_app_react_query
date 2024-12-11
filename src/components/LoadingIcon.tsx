import React from "react";
import { Icons } from "../assets/Icons";
import "./ComponentsStyle.css";

export const LoadingIcon = () => {
  return (
    <div className="loading-icon w-fit h-fit">
      <Icons.Loading width="30px" height="30px" color="var(--secondary)" />
    </div>
  );
};
