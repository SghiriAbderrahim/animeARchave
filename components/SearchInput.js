import React from 'react';

export default function SearchInput(search) {
  return (
    <div className=" my-1 flex justify-center w-full gap-2">
        <input
          onInput={() => {
            search();
          }}
          id="inSearch"
          className="outline-none text-[var(--tx)] text-sm font-bold w-3/4  px-2 py-1 border-2  bg-[var(--gr2)] focus:bg-[var(--bg)] rounded-full border-[var(--gr2)] focus:border-[var(--theme-color)] "
          type="search"
          placeholder="Search for anime..."
        />
      </div>
  );
}
