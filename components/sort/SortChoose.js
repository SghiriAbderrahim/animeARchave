'use client';

import React from 'react';
import { useSearch } from '@/stores/store';

export default function SortChoose(props) {
  const { chooseName, value } = props;
  const setSortValue = useSearch((state) => state.setSort);
  const sort = useSearch((state) => state.sort);
  return (
    <label className=" checked:text-[var(--theme-color)] lg:hover:bg-[var(--gr)] grid grid-cols-3 w-full gap-14   place-items-center">
      <input
        onChange={() => {
          setSortValue(value);
        }}
        className=" peer appearance-none checked:bg-[var(--theme-color)] h-4 w-4 rounded-full border-[var(--bg)] border-4 checked:outline-[var(--theme-color)] outline outline-2"
        type="radio"
        name="choose"
        checked={value === sort ? true : false}
      />
      <p className=" peer-checked:text-[var(--theme-color)] justify-self-start col-span-2 font-semibold ">
        {chooseName}
      </p>
    </label>
  );
}
