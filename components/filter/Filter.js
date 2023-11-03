'use client';

import React from 'react';
import Option from './Option';
import { ArrowUp, ArrowDown } from '../svgs';

export default function Filter({
  selected,
  name,
  options,
  multi,
  func,
} = props) {
  return (
    <div className=" rounded-lg relative border-2 border-[var(--gr2)] py-2 px-4 w-full flex flex-col justify-center ">
      <input
        id="box"
        type="checkbox"
        className="opacity-0 h-8 top-0 w-full border-2 border-red-500 peer absolute  z-10"
      />
      <div className="justify-self-center font-semibold text-center">
        {name}
      </div>

      <ArrowDown className="peer-checked:hidden absolute right-2 top-3" />
      <ArrowUp className="peer-checked:block hidden absolute right-2 top-3" />

      <div className="  flex-wrap gap-y-3 gap-x-2 py-4 peer-checked:flex hidden">
        {options.map((item,i) => {
          return (
            <Option
              key={name+i}
              Selected={selected}
              groupName={name}
              Func={() => {
                func(item.mal_id);
              }}
              name={item.name}
              value={item.mal_id}
              Multi={multi}
            />
          );
        })}
      </div>
    </div>
  );
}
