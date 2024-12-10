import React from "react";

export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="bg-white w-fit h-fit px-4 py-1 font-bold text-[var(--secondary)] rounded-[20px]">
      {title}
    </h2>
  );
};
