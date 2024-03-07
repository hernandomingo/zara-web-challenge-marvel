"use client";

import useSearch from "../features/characters/hooks/useSearch";
import { SearchIcon } from "@/components";

interface SearchBarProps {
  placeholder?: string;
  searchDelay: number;
}

export const SearchBar = ({
  placeholder = "",
  searchDelay,
}: SearchBarProps) => {
  const [searchQuery, handleSearch] = useSearch(searchDelay);

  return (
    <div className="w-full flex justify-center mb-3">
      <div className="relative w-full text-base font-normal">
        <input
          type="text"
          className="w-full py-2 pl-6 focus:outline-none border-b-2 border-black"
          placeholder={placeholder}
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
