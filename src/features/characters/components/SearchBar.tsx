"use client";

import useSearch from "../hooks/useSearch";
import { SearchIcon } from "@/components";

export const SearchBar = () => {
  const [searchQuery, handleSearch] = useSearch();

  return (
    <div className="w-full flex justify-center mb-3">
      <div className="relative w-full text-base font-normal">
        <input
          type="text"
          className="w-full py-2 pl-6 focus:outline-none border-b-2 border-black"
          placeholder="SEARCH CHARACTER..."
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchQuery}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
