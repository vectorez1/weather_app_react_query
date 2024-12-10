import React from "react";
import { Icons } from "../assets/Icons";
import { useRef } from "react";

type SeachBarParams = {
  onClick: (ref: React.RefObject<HTMLInputElement>) => void;
};

export const SearchBar = ({ onClick }: SeachBarParams) => {
  const ref = useRef<HTMLInputElement>(null);
  function handleSearch(): void {
    onClick(ref);
  }
  return (
    <div className="searchBar flex items-center bg-white px-4 py-2 rounded-3xl gap-2">
      <button
        className=" w-fit h-fit flex items-center justify-center"
        onClick={handleSearch}
      >
        <Icons.Search width="25px" height="25px" color="var(--secondary)" />
      </button>
      <input
        type="text"
        className="bg-transparent border-b-2 focus:outline-none focus:border-b-[var(--secondary)]"
        placeholder="Search City..."
        ref={ref}
      />
    </div>
  );
};
