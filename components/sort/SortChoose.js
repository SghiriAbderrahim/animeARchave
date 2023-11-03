'use client';

import React from 'react';
import { useSearch } from '@/stores/store';

export default function SortChoose(props) {
  const { chooseName, value } = props;
  const setSortValue = useSearch((state) => state.setSort);
  const sort = useSearch((state) => state.sort);
  return (
    <label className=" checked:text-[var(--color-10)] lg:hover:bg-[var(--color-30)] grid grid-cols-3 w-full gap-14   place-items-center">
      <input
        onChange={() => {
          setSortValue(value);
        }}
        className=" peer appearance-none checked:bg-[var(--color-10)] h-4 w-4 rounded-full border-[var(--color-60)] border-4 checked:outline-[var(--color-10)] outline outline-2"
        type="radio"
        name="choose"
        checked={value === sort ? true : false}
      />
      <p className=" peer-checked:text-[var(--color-10)] justify-self-start col-span-2 font-semibold ">
        {chooseName}
      </p>
    </label>
  );
}
